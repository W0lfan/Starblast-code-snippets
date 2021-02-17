const t4 = 180 ; // 180 * 2
const t5 = 320 ; // 320 * 2
const t6 = 500 ; // 500 * 2
const t7 = 720 ; // 720 * 2
let tier_4_crystals = t4 ; 
let tier_5_crystals = tier_4_crystals + t5 ; 
let tier_6_crystals = tier_5_crystals + t6 ; 
let tier_7_crystals = tier_6_crystals + t7 ;
var mod_map_names = ["Amerkati", "Arekaba 18", "Verist 5", "Acharteglo", "Aragor 2", "Hulgoa", "Koluiya"];
var songs = ["procedurality.mp3", "argon.mp3", "red_mist.mp3","warp_drive.mp3", "crystals.mp3" ];
var crystals_value =  [3,4,5];
var random_map = [9960,9959,257,268,256];

this.options = {
  //DO NOT CHANGE THE FOLOWING OPTIONS:
  root_mode: " ",
  weapons_store: false,
  starting_ship: 101,
  survival_time: 30,

  //Changable options:
  crystal_value: /*crystals_value[~~(Math.random()*crystals_value.length)]*/50,
  map_name: mod_map_names[~~(Math.random()*mod_map_names.length)],
  soundtrack: songs[~~(Math.random()*songs.length)],
  map_id: random_map[~~(Math.random()*random_map.length)],
  map_size: 110,
  release_crystal: true
};




var keep_your_ship = function(ship) {
  ship.set({type: ship.custom.tier, stats: ship.custom.stats, crystals: ship.custom.crystals_for_tier_keep, generator: 0});
};
var stop_idle = function(ship) {
  ship.set({idle: false});
};
var set_less_crystals = function(ship) {
  if (ship.crystals > 10) {
    ship.set({crystals:  ship.crystals - Math.trunc(ship.type/100), score: ship.score + Math.trunc(ship.type/100) - 1});
    ship.custom.credits+= Math.trunc(ship.type/100);
    ship.custom.total_gems += Math.trunc(ship.type/100);
    ship.custom.needed_gems -= Math.trunc(ship.type/100);
  }
  else {
    ship.set({crystals:  ship.crystals - 1});
    ship.custom.total_gems+= 1;
    ship.custom.credits+=1;
    ship.custom.needed_gems-=1;
  }
};
var m9 = {
  id: "m9",
  position: [1,0,0,0],
  visible: true,
  shortcut: "9",
  clickable: true,
  components: [
      { type: "box",position:[0,0,100,100],stroke:"#424242", fill: "#787878",width:10}
  ]
};
var m0 = {
  id: "m0",
  position: [0,0,2,2],
  visible: true,
  shortcut: "0",
  clickable: true,
  components: [
      { type: "box",position:[0,0,100,100],stroke:"#424242", fill: "#787878",width:10}
  ]
};
var hide_components = function(ship) {
  ship.setUIComponent({id:"cant_upgrade", visible: false});
  ship.setUIComponent({id:"m9", visible: false});
  ship.setUIComponent({id:"m0", visible: false});
};
var regive_first_ship = function(ship) {
  ship.set({
    type: ship.custom.t6_tier,
    stats: ship.custom.t6_stats
  });
};
this.tick = function(game) {
  if (game.step % 15 === 0) {
    for (let ship of game.ships) {
      if (ship.custom.needed_gems > tier_7_crystals) {
        ship.custom.needed_gems = "NONE";
      } else {
        ship.custom.tier_next = (Math.trunc((ship.type + 100) / 100)*100);
      }
      var upgrade = {
        id: "upgrade",
        position: [82,39.5,8,14],
        clickable: true,
        shortcut: "W",
        visible: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#424242",width:10,fill: "#787878"},
          { type: "text",position:[10,15,80,30],value:"Needed gems", color:"#FFFFFF"},
          { type: "text",position:[10,40,80,30],value:ship.custom.needed_gems, color:"#FFFFFF"},
          { type: "text",position:[20,70,60,20],value:"[W]",color:"#FFFFFF"},
          ]
      };
      var credits = {
        id: "credits",
        position: [90.5,39.5,8,14],
        visible: true,
        clickable: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#424242", fill: "#787878",width:10},
          { type: "text",position:[10,15,80,30],value:"Credits:",color:"#FFFFFF"},
          { type: "text",position:[10,50,80,40],value:ship.custom.credits,color:"#FFFFFF"},
          ]
      };
      var cant_upgrade = {
        id: "cant_upgrade",
        position: [25,0,40,10],
        visible: true,
        clickable: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#424242", fill: "#FF9696",width:10},
          { type: "text",position:[5,30,90,40],
          value:"You have to mine " + ship.custom.needed_gems + " gems to unlock a new tier (W)", 
          color:"#000000"},
          ]
      };
      if (
        300 < ship.type && ship.type < 400 && ship.crystals === 180 && ship.custom.total_gems < tier_4_crystals
        ||
        400 < ship.type && ship.type < 500 && ship.crystals === 320 && ship.custom.total_gems < tier_5_crystals
        ||
        500 < ship.type && ship.type < 600 && ship.crystals === 500 && ship.custom.total_gems < tier_6_crystals
        ||
        ship.type < 700 && ship.crystals === 720 && ship.custom.total_gems < tier_7_crystals
        
        ) 
        {
          ship.setUIComponent(cant_upgrade);
          ship.setUIComponent(m9);
          ship.setUIComponent(m0);
        } 
      if (
        300 < ship.type && ship.type < 400 && ship.crystals === 180 && ship.custom.total_gems >= tier_4_crystals
        ||
        300 < ship.type && ship.type < 400 && ship.crystals < 180
        ||
        400 < ship.type && ship.type < 500 && ship.crystals === 320 && ship.custom.total_gems >= tier_5_crystals
        ||
        400 < ship.type && ship.type < 500 && ship.crystals < 320
        ||
        500 < ship.type && ship.type < 600 && ship.crystals === 500 && ship.custom.total_gems >= tier_6_crystals
        ||
        500 < ship.type && ship.type < 600 && ship.crystals < 500
        ||
        600 < ship.type && ship.type < 700 && ship.crystals === 720 && ship.custom.total_gems >= tier_7_crystals
        ||
        600 < ship.type && ship.type < 700 && ship.crystals < 720
        ) 
        {
          ship.setUIComponent({id:"cant_upgrade", visible: false});
          ship.setUIComponent({id:"m9", visible: false});
          ship.setUIComponent({id:"m0", visible: false});
        }
      if (ship.type < 700 && ship.type > 600 && ship.crystals === 720) {
        ship.custom.t6_stats = ship.stats;
        ship.custom.t6_tier = ship.type;
      }
      if (ship.custom.needed_gems <= 0 && ship.custom.tier_passed == 3) {
        ship.custom.tier_passed = 4;
        ship.custom.needed_gems = t5;
      }
      if (ship.custom.needed_gems <= 0 && ship.custom.tier_passed == 4) {
        ship.custom.tier_passed = 5;
        ship.custom.needed_gems = t6;
      }
      if (ship.custom.needed_gems <= 0 && ship.custom.tier_passed == 5) {
        ship.custom.tier_passed = 6;
        ship.custom.needed_gems = t7;
      }
      if (ship.custom.needed_gems <= 0 && ship.custom.tier_passed == 6) {
        ship.custom.needed_gems = "TIER 7";
      }
      ship.setUIComponent(credits);
      ship.setUIComponent(upgrade);
      ship.custom.ShipX = ship.x;
      ship.custom.ShipY = ship.y;
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
      }
      if (ship.alive !== true) {
        ship_reduce_score(ship);
        if (ship.type > 700) {
          regive_first_ship(ship);
        }
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
  if (ship.custom.credits >= 180) {
    var secondaries_code = [40,41,42];
    var number = [
      1,2,3,4,5,6,7,8,9,10,
      -1,-2,-3,-4,-5,-6,-7,-8,-9,-10
    ];
    game.addCollectible({
      code: secondaries_code[~~(Math.random()*secondaries_code.length)],
      x: ship.custom.ShipX + number[~~(Math.random()*number.length)],
      y: ship.custom.ShipY + number[~~(Math.random()*number.length)],
    });
    ship.custom.credits = ship.custom.credits - 180;
    }
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
