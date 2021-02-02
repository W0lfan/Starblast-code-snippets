this.options = {
    //DO NOT CHANGE THE FOLOWING OPTIONS:
    root_mode: "",
    weapons_store: false,
    starting_ship: 800,
    ships: mod_ships,
  };


//For more facility / difficulty, change the following numbers:
let tier_4_crystals = 180 * 3 ; //Gems needed to take a Tier 4
let tier_5_crystals = tier_4_crystals + 320 * 3 ; //Gems needed to take a Tier 5
let tier_6_crystals = tier_5_crystals + 500 * 3 ; //Gems needed to take a Tier 6
let tier_7_crystals = tier_6_crystals + 720 * 3 ; //Gems needed to take a Tier 7


var keep_your_ship = function(ship) {
  ship.set({type: ship.custom.tier, crystals: 180, stats: ship.custom.stats})
};
var stop_idle = function(ship) {
  ship.set({idle: false});
};
var set_less_crystals = function(ship) {
  if (ship.crystals > 10) {
    ship.set({crystals:  ship.crystals - Math.trunc(ship.type/100), score: ship.score + Math.trunc(ship.type/100) - 1});
    ship.custom.credits+= Math.trunc(ship.type/100);
    ship.custom.total_gems+= Math.trunc(ship.type/100);
  }
  else {
    ship.set({crystals:  ship.crystals - 1});
    ship.custom.total_gems+= 1;
  }
};



this.tick = function(game) {
  if (game.step % 15 === 0) {
    for (let ship of game.ships) {
      if (ship.type > 700) {
        ship.custom.tier = "NONE";
      } else {
         ship.custom.tier_next = (Math.trunc((ship.type + 100) / 100)*100);
      }
      var upgrade = {
        id: "upgrade",
        position: [5,30,8,14],
        clickable: true,
        shortcut: "W",
        visible: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
          { type: "text",position:[10,15,80,30],value:ship.custom.tier_next,color:"#CDE"},
          { type: "text",position:[20,70,60,20],value:"[W]",color:"#CDE"}
          ]
      };
      var credits = {
        id: "credits",
        position: [5,50,8,14],
        visible: true,
        clickable: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
          { type: "text",position:[10,15,80,30],value:ship.custom.credits,color:"#CDE"},
          { type: "text",position:[20,50,60,20],value:"BUY A",color:"#CDE"},
          { type: "text",position:[20,70,60,20],value:"SECONDARIES",color:"#CDE"}
          ]
      };
      ship.setUIComponent(credits);
      ship.setUIComponent(upgrade);
      ShipX = ship.x;
      ShipY = ship.y;
      if (ship.custom.start !== true) {
        ship.custom.start = true;
        ship.custom.total_gems = 0;
        ship.custom.credits = 0;
        ship.custom.start_giving_gems = false;
        ship.custom.open_store = false;
      }
      if ( 300 < ship.type < 400 && ship.crystals == 180) {
        ship.custom.stats = ship.stats;
        ship.custom.tier = ship.type;
      }
      if (ship.custom.total_gems < tier_4_crystals && ship.type > 400) {
        keep_your_ship(ship);
      } 
      if ( 400 < ship.type < 500 && ship.crystals == 320) {
        ship.custom.stats = ship.stats;
        ship.custom.tier = ship.type;
      }
      if (ship.custom.total_gems < tier_5_crystals && ship.type > 500) {
        keep_your_ship(ship);
      } 
      if ( 500 < ship.type < 600 && ship.crystals == 500) {
        ship.custom.stats = ship.stats;
        ship.custom.tier = ship.type;
      }
      if (ship.custom.total_gems < tier_6_crystals && ship.type > 600) {
        keep_your_ship(ship);
      } 
      if ( 600 < ship.type < 700 && ship.crystals == 720) {
        ship.custom.stats = ship.stats;
        ship.custom.tier = ship.type;
      }
      if (ship.custom.total_gems < tier_5_crystals && ship.type > 700) {
        keep_your_ship(ship);
      } 
    }
  }
  if (game.step % 30 == 0) {
    for (let ship of game.ships ) {
      if (ship.custom.start_giving_gems !== false) {
        if (ship.crystals !== 0) {
          set_less_crystals(ship);
        }
      }
    }
  }
};


var mined_gems = function(ship) {
  if (ship.custom.open_store !== true) {
    ship.custom.open_store = true;
    ship.custom.start_giving_gems = true;
    ship.custom.current_crystals = ship.crystals ; //This variable take the actual number of gems
    ship.set({idle: true});
  } 
  else {
    ship.custom.open_store = false;
    ship.custom.start_giving_gems = false;
    stop_idle(ship);
    echo(ship.name + " has a total gems of  " + ship.custom.total_gems);
  }
};


this.event = function(event, game) {
  let ship = event.ship;
  switch (event.name) {
    case "ui_component_clicked":
      switch (event.id) {
        case "upgrade":
          mined_gems(ship);
          break;
    }
    break;
  }
};


