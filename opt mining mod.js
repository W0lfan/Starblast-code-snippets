let base_cargo = 100; //  gem upgrade for tier 3
const ship_cargo = Array(7).fill(0).map((i, r) => (r + 1) ** 2 * 20);
this.options = {
  weapons_store: false,
  crystal_value: 10,
  map_size: 100,
  release_crystal: true,
  asteroids_strength: 0.1
};
const upgrades = [
  { id: "9", position: [25, 0, 20, 10], visible: true, clickable: true, shortcut: "9", components: [{ type: "box", position: [0, 0, 100, 100] }] },
  { id: "0", position: [45, 0, 20, 10], visible: true, clickable: true, shortcut: "0", components: [{ type: "box", position: [0, 0, 100, 100] }] }
];
const donate = {
  id: "donate", position: [92, 46.5, 8, 7], visible: true, clickable: true, shortcut: "W",
  components:
    [{ type: "box", position: [0, 0, 100, 100], fill: "#00ffe650" },
    { type: "text", position: [0, 0, 100, 100], value: "W", color: "#0ff" }]
};
const scoreboard = function () {
  return {
    id: "scoreboard", components: [
      { type: "box", position: [0, 93, 100, 7], fill: "#f0ad4e" }, // full bar
      { type: "box", position: [0, 94, 0, 5], fill: "#f00" }, // progress bar
      { type: "text", position: [0, 84, 7, 7], value: 0, color: '#fff' }, // starter value
      { type: "text", position: [50, 84, 50, 8], value: base_cargo, align: 'right', color: '#fff' } // max value
    ]
  };
}
this.tick = function (game) {
  // disable upgrade
  if (game.step % 30 === 0) {
    for (let ship of game.ships)
      if (ship.type > ship.custom.tier_allow * 100 && ship.crystals == ship_cargo[Math.trunc(ship.type / 100) - 1])
        upgrades.forEach(i => ship.setUIComponent(i));
      else upgrades.forEach(i => ship.setUIComponent({ id: i.id, visible: false }));
  }
  if (game.step % 45 === 0) {
    var ships = game.ships.sort((a, b) => b.score - a.score).slice(0, 7);
    for (let ship of game.ships) {
      if (!ship.custom.init) {
        // mining
        ship.custom.donated = false; // donate or not
        ship.custom.donate = 0; // gem donated
        ship.custom.tier_allow = 3;
        ship.custom.gem_donate = 1;
        ship.custom.base_cargo = base_cargo;
        ship.custom.scoreboard = new scoreboard;
        // weapons
        ship.custom.credit = 0; // credit
        ship.custom.init = true;
        ship.setUIComponent(donate);
      }
      // update scoreboard 
      ship.custom.scoreboard.components = ship.custom.scoreboard.components.slice(0, 4);
      ships.forEach((ship_id, index) => {
        const height = 7;
        if (ship.id === ship_id.id) ship.custom.scoreboard.components.push({ type: 'box', position: [0, index * height, 100, height], fill: '#1b9bb933' });
        ship.custom.scoreboard.components.push({ type: 'player', id: ship_id.id, position: [0, index * height, 70, height], color: '#fff' });
        ship.custom.scoreboard.components.push({ type: 'text', position: [70, index * height, 30, height], value: ship_id.score, align: 'right', color: '#fff' });
      });
      ship.setUIComponent(ship.custom.scoreboard);
      // donating gem
      if (ship.custom.donated) {
        if (ship.custom.donate > ship.custom.base_cargo) { // check if the gem donate reach the highest value
          if (ship.custom.tier_allow < 6) { // check if tier allow is equal or higher than 6
            ship.custom.donate -= ship.custom.base_cargo;
            ship.custom.base_cargo *= 2;
            ship.custom.scoreboard.components[3].value = ship.custom.base_cargo;
          }
          ship.custom.tier_allow++;
        }
        ship.custom.gem_donate = Math.trunc(ship.type / 100); // amount of gem donate each tier
        let crystals = ship.crystals > ship.custom.gem_donate ? ship.custom.gem_donate : ship.crystals;
        ship.custom.credit += crystals;
        ship.custom.donate += crystals;
        ship.custom.scoreboard.components[1].position[2] = (ship.custom.donate / ship.custom.base_cargo) * 100;
        ship.set({ idle: true, vx: 0, vy: 0, score: ship.score + crystals, crystals: ship.crystals - crystals });
      } else ship.set({ idle: false });
    };
  }
};
this.event = function (event, game) {
  let ship = event.ship;
  switch (event.id) {
    case "donate":
      ship.custom.donated = !ship.custom.donated;
      let weaponses = ['Rockets', 'Missiles', 'Torpedoes', 'Heavy mines', 'Space mines', 'Mining pods', 'Attack pods', 'Defend pods'];
      let healing_button = {
        id: 'healing', position: [0, 50, 10, 10], clickable: true, visible: true,
        components: []
      };
      if (ship.custom.donated) {
        ship.setUIComponent(healing_button);
      } else {
        ship.setUIComponent({ id: 'healing', visible: false });
      }
      break;
  }
};
