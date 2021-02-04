var teams = {
  hues: [30,160],
  number: 5,
  stuff_time: 1,
};
/*


*/

var taupe = {
  start: /*In tiks*/   3600,
  team: 1,
};

this.options = {
  // see documentation for options reference
  root_mode: "survival",
  map_size: 200,
  friendly_colors: teams.number,
  hues: teams.hues,
  
};

this.tick = function(game) {
  if (game.step % 15 == 0) {
    for (let ship of game.ships) {
      let number_of_ships_at_20_minuts = game.ships.length;
      if (ship.custom.start !== true) {
        ship.custom.start = true;
        game.custom.taupe_start = false;
      if (ship.team === 3) {
        start_new_team(ship);
        }
      }
    }
  }
  if (game.step % taupe_start_tick == 0 && game.custom.taupe_start !== true) {
    for (let ship of game.ships) {
      game.custom.taupe_start = true;
      ship_taupe_1 = game.ships[Math.floor(Math.random() * game.ships.length)];
      var game_ships_2 = game.ships.filter(ship => ship != ship_taupe_1);
      ship_taupe_2 = game_ships_2[Math.floor(Math.random() * game_ships_2.length)];
      set_taupe(ship);
    }
  }
};

var start_new_team = function(ship) {
  ship.set({team:random_number[~~(Math.random()*random_number.length)] });
  echo(ship.name + ' has been assignated to a new team (3).');
};

var set_taupe = function() {
  ship.taupe_1.set({
    team: 3, 
  });
  taupe_1.set({
    team: 3, 
  });
  let intermission = function(ship, teammate) {
    ship.intermission({
      "You're now":"A 'taupe'",
      "Your goal":"Kill everyone except your teammate",
      "Your teammates": teammate.name,
    });
    ship.set({
      team: 3,
    });
  };
  intermission(ship_taupe_1, ship_taupe_2);
  intermission(ship_taupe_2, ship_taupe_1);
};









