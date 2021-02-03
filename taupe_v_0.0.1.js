  friendly_colors: 3,
  hues: teams.hues,
  
  var teams = {
  hues: [30,160],
}
const taupe_start_tick = 3600
/*,in tick:
  https://mapmaking.fr/tick/;
*/;


      let number_of_ships_at_20_minuts = game.ships.length;
      if (ship.custom.start !== true) {
        ship.custom.start = true;
        ship.custom.total_gems = 0;
        ship.custom.credits = 0;
        ship.custom.start_giving_gems = false;
        ship.custom.open_store = false;
        ship.custom.hue = ship.hue;
        ship.custom.needed_gems = t4;
        ship.custom.tier_passed = 3;
        ship.setUIComponent(heal_button);
        ship.setUIComponent(warning);
        ship.setUIComponent(heal_detail);
        game.custom.taupe_start = false;
        if (ship.team === 3) {
          start_new_team(ship);
        }


var start_new_team = function(ship) {
  ship.set({team:random_number[~~(Math.random()*random_number.length)] });
  echo(ship.name + ' has been assignated to a new team (3).');
};


  if (game.step % taupe_start_tick == 0 && game.custom.taupe_start !== true) {
    game.custom.taupe_start = true;
    ship_taupe_1 = number_of_ships_at_20_minuts[~~(Math.random()*number_of_ships_at_20_minuts.length)];
    ship_taupe_2 = number_of_ships_at_20_minuts[~~(Math.random()*number_of_ships_at_20_minuts.length)];
    shipt1X = game.ships[ship_taupe_1].x;
    shipt1Y = game.ships[ship_taupe_1].y;
    shipt2Y = game.ships[ship_taupe_2].y;
    shipt2X = game.ships[ship_taupe_2].x;
    set_taupe(ship);
  }
  
  
  
  
var set_taupe = function(ship) {
  const level = [701,702,703,704,705,706,707];
  game.ships[ship_taupe_1].set({
    team: 3, 
    healing: false, 
    type: level[~~(Math.random()*level.length)],
    crystals: 980
  });
  game.ships[ship_taupe_2].set({
    team: 3, 
    healing: false, 
    type: level[~~(Math.random()*level.length)],
    crystals: 980
  });
  for (let i = 10; i <= 12; i++) {
    game.addCollectible({
      code: i,
      x: shipt1X,
      y: shipt1Y
    })
  }
  for (let i = 10; i <= 12; i++) {
    game.addCollectible({
      code: i,
      x: shipt2X,
      y: shipt2Y
    })
  }
  game.addCollectible({
    code: collectibles_120[~~(Math.random()*collectibles_120.length)],
    x: shipt2X,
    y: shipt2Y
  })
  game.addCollectible({
    code: collectibles_120[~~(Math.random()*collectibles_120.length)],
    x: shipt2X,
    y: shipt2Y
  })
  if (ship.id == ship_taupe_2 ) {
  game.ships[ship_taupe_2].intermission({
    "You're now":"A 'taupe'",
     "Your goal":"Kill everyone except your teammate",
     "Your teammates": game.ships[ship_taupe_1].name
  });
  }
  if (ship.id == ship_taupe_1 ) {
  game.ships[ship_taupe_1].intermission({
    "You're now":"A 'taupe'",
     "Your goal":"Kill everyone except your teammate",
     "Your teammates": game.ships[ship_taupe_2].name
  });
  }
  game.ships[ship_taupe_1].setUIComponent({id: "heal_button", visible: false});
  game.ships[ship_taupe_1].setUIComponent({id: "warning", visible: false});
  game.ships[ship_taupe_1].setUIComponent({id: "heal_detail", visible: false});
  game.ships[ship_taupe_1].setUIComponent({id: "credits", visible: false});
  game.ships[ship_taupe_1].setUIComponent({id: "upgrade", visible: false});
  game.ships[ship_taupe_2].setUIComponent({id: "heal_button", visible: false});
  game.ships[ship_taupe_2].setUIComponent({id: "warning", visible: false});
  game.ships[ship_taupe_2].setUIComponent({id: "heal_detail", visible: false});
  game.ships[ship_taupe_2].setUIComponent({id: "credits", visible: false});
  game.ships[ship_taupe_2].setUIComponent({id: "upgrade", visible: false});
};
