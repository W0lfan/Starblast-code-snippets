


var teams = {
  hues: [0,60,120,180,240,300],
  number: 5,
  stuff_time: 1,
};

var taupe = {
  team: 1,
};

var times = {
  //Numbers in ticks:
  mining_phase: 15, //20 minuts
  taupe_start: 24000,
  attack_phase: 24000,
  purge_phase: 6000,
};


this.options = {
  root_mode: " ",
  weapons_store: true,
  starting_ship: 800,
  survival_time: 30,
  friendly_colors: teams.number,
  hues: teams.hues,
  map_player: 25,
  //Changable options:
  crystal_value: 50,
  map_size: 110,
};

var set_middle = function(ship) {
  ship.set({x: 0, y: 0, idle: true});
};

var stop_idle = function(ship) {
  ship.set({
    idle: false,
    x: Math.random()*game.options.map_size*10 - game.options.map_size*5,
    y: Math.random()*game.options.map_size*10 - game.options.map_size*5,
  });
};


var start_new_team = function(ship) {
  ship.set({team:1});
  echo(ship.name + ' has been assignated to a new team (1).');
};

var set_taupe = function() {
  ship.taupe_1.set({
    team: 1, 
  });
  taupe_1.set({
    team: 1, 
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

var died_finish = function(ship) {
   ship.gameover({
     "You died":"you lost",
     "Score":ship.score,
   });
};


this.tick = function(game) {
  if (game.step % 15 === 0) {
    for (let ship of game.ships) {
      var e = game.ships.length;
      var waiting_text = {
        id: "waiting_text",
        position: [30,0,45,80],
        visible: true,
        components: [
            { type: "text",position:[0,-2,100,40],value:quotes,color:"#CDE"},
            { type: "text",position:[25,2,40,50],value:e + "/20 players",color:"#CDE"}
          ]
      };
      if (ship.custom.start !== true) {
        ship.custom.start = true;
        game.custom.taupe_start = false;
        game.custom.phase = "waiting_";
        set_middle(ship);
        ship.setUIComponent(waiting_text);
        quotes = "Waiting for more players...";
        if (ship.team !== 1) {
          start_new_team(ship);
        }
      }
      if (game.custom.phase == "waiting_" && e == 20) {
        game.custom.phease = "mining_phase";
        stop_idle(ship);
        quotes = "Mining phase";
      }
      if (ship.alive !== true) {
        died_finish(ship);
      }
    }
  }
  if (game.step % times.taupe_start == 0 && game.custom.taupe_start !== true) {
    for (let ship of game.ships) {
      game.custom.taupe_start = true;
      var game_ships_1 = game.ships.filter(ship => ship.team == 0);
      ship_taupe_1 = game_ships_1[Math.floor(Math.random() * game_ships_1.length)];
      var game_ships_2 = game.ships.filter(ship => ship.team == 1);
      ship_taupe_2 = game_ships_2[Math.floor(Math.random() * game_ships_2.length)];
      var game_ships_3 = game.ships.filter(ship => ship.team == 2);
      ship_taupe_3 = game_ships_3[Math.floor(Math.random() * game_ships_3.length)];
      var game_ships_4 = game.ships.filter(ship => ship.team == 3);
      ship_taupe_4 = game_ships_4[Math.floor(Math.random() * game_ships_4.length)];
      var game_ships_5 = game.ships.filter(ship => ship.team == 4);
      ship_taupe_5 = game_ships_5[Math.floor(Math.random() * game_ships_5.length)];
    }
  }
  if (game.step % times.attack_phase) {
    for (let ship of game.ships) {
      team_set_ship(ship);
      if (ship.team == 0) {
        game.custom.team_1++;
      }
      if (ship.team == 1) {
        game.custom.team_2++;
      }
      if (ship.team == 2) {
        game.custom.team_3++;
      }
      if (ship.team == 3) {
        game.custom.team_4++;
      }
      if (ship.team == 4) {
        game.custom.team_5++;
      }
    }
  }
};

var team_set_ship = function(ship) {
  if (game.custom.asignated_players_t1 < 6) {
    ship.set({})
  }
};



game.modding.commands.start_mining_phease = function(req) {
  e = 20;
  echo('Starting the mining phase.');
};
































