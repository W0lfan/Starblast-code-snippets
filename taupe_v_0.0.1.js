//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                              STARBLAST TAUPE MOD
//
//                            * This mod was made by Wolfan. Feel free to DM him on Discord 
//                              for any bugs reports / feedbacks.
//                            * The creator of this mod do not own the ships of this mod. 
//                              All of the following ships are Neuronality's property.
//                            * Please credite the creator of the mod when hosting or 
//                              modifying this mod.
//                            * You can change some options to play this mode more easily
//                              or with more difficulty by changing the following numbers:     


var Fly_101 = (function(){var r=Function('return(function(){var model;return model={name:\'Fly\',level:1,model:1,size:1.05,specs:{shield:{capacity:[75,100],reload:[2,3]},generator:{capacity:[40,60],reload:[10,15]},ship:{mass:60,speed:[125,145],rotation:[110,130],acceleration:[100,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-65,-60,-50,-20,10,30,55,75,60],z:[0,0,0,0,0,0,0,0,0]},width:[0,8,10,30,25,30,18,15,0],height:[0,6,8,12,20,20,18,15,0],propeller:true,texture:[4,63,10,1,1,1,12,17]},cockpit:{section_segments:12,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0],y:[-15,0,20,30,60],z:[0,0,0,0,0]},width:[0,13,17,10,5],height:[0,18,25,18,5],propeller:false,texture:[7,9,9,4,4]},cannon:{section_segments:6,offset:{x:0,y:-15,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[5,6],rate:4,type:1,speed:[160,180],number:1,error:2.5},propeller:false,texture:[3,3,10,3]}},wings:{main:{length:[60,20],width:[100,50,40],angle:[-10,10],position:[0,20,10],doubleside:true,offset:{x:0,y:10,z:5},bump:{position:30,size:20},texture:[11,63]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}')),JSON.stringify(r)})();
var Delta_Fighter_201 = (function(){var r=Function('return(function(){var model;return model={name:\'Delta-Fighter\',level:2,model:1,size:1.3,specs:{shield:{capacity:[100,150],reload:[3,4]},generator:{capacity:[50,80],reload:[15,25]},ship:{mass:80,speed:[110,135],rotation:[80,100],acceleration:[110,120]}},bodies:{cockpit:{angle:0,section_segments:8,offset:{x:0,y:-20,z:12},position:{x:[0,0,0,0,0],y:[-20,-10,0,10,20],z:[-7,-3,0,5,3]},width:[3,12,18,16,3],height:[3,6,8,6,3],texture:[9]},cockpit2:{angle:0,section_segments:8,offset:{x:0,y:-10,z:12},position:{x:[0,0,0,0],y:[-10,0,10,40],z:[0,0,5,3]},width:[5,18,16,3],height:[5,12,10,5],texture:[9,2,11]},propulsor:{section_segments:8,offset:{x:0,y:35,z:10},position:{x:[0,0,0,0,0,0],y:[0,10,20,30,40,30],z:[0,0,0,0,0]},width:[5,15,10,10,10,0],height:[15,15,15,15,10,0],texture:[63,63,4,5,12],propeller:true},bumps:{section_segments:8,offset:{x:40,y:40,z:5},position:{x:[0,0,0,0,0,0],y:[-40,-10,0,10,40,45],z:[0,0,0,0,0,0]},width:[0,5,8,12,5,0],height:[0,25,28,22,15,0],texture:[63]},gunsupport:{section_segments:8,offset:{x:30,y:-40,z:5},position:{x:[-30,-20,-10,0,0,0],y:[-20,-15,-5,10,40,55],z:[-20,-20,-10,0,0,0]},width:[3,5,8,4,5,0],height:[3,5,8,12,15,0],texture:63},gun:{section_segments:8,offset:{x:0,y:-60,z:-15},position:{x:[0,0,0,0],y:[-20,-10,5,10],z:[0,0,0,0]},width:[3,7,8,3],height:[3,7,8,3],texture:[6,4,5],laser:{damage:[3,5],rate:3,type:1,speed:[100,120],number:3,angle:15,error:0}}},wings:{main:{doubleside:true,offset:{x:0,y:-25,z:5},length:[100],width:[120,30,40],angle:[0,20],position:[30,90,85],texture:11,bump:{position:30,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.081,1.969,1.501,1.455,1.403,1.368,1.263,1.192,1.095,1.063,1.128,1.209,1.352,1.545,1.85,2.348,2.965,3.211,3.33,2.93,2.496,2.442,2.441,1.866,1.967,1.954,1.967,1.866,2.441,2.442,2.496,2.93,3.33,3.211,2.965,2.348,1.85,1.545,1.352,1.209,1.128,1.063,1.095,1.192,1.263,1.368,1.403,1.455,1.501,1.969],"lasers":[{"x":0,"y":-2.08,"z":-0.39,"angle":0,"damage":[3,5],"rate":3,"type":1,"speed":[100,120],"number":3,"spread":15,"error":0,"recoil":0}],"radius":3.33}')),JSON.stringify(r)})();
var Trident_202 = (function(){var r=Function('return(function(){var model;return model={name:\'Trident\',level:2,model:2,size:1.2,specs:{shield:{capacity:[125,175],reload:[3,5]},generator:{capacity:[50,80],reload:[15,20]},ship:{mass:100,speed:[110,135],rotation:[70,85],acceleration:[90,110]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0],y:[-100,-50,0,30,70,100,90],z:[0,0,0,0,0,0,0]},width:[1,25,15,30,30,20,10],height:[1,20,20,30,30,10,0],texture:[1,1,10,2,3],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-40,z:10},position:{x:[0,0,0,0,0,0,0],y:[-20,-10,0,30,40],z:[0,0,0,0,0]},width:[0,10,10,10,0],height:[0,10,15,12,0],texture:[9],propeller:false},cannons:{section_segments:12,offset:{x:50,y:40,z:0},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,0],height:[0,5,15,15,10,5,0],angle:0,laser:{damage:[4,8],rate:2.5,type:1,speed:[100,120],number:1,angle:0,error:0},propeller:false,texture:[4,4,10,4,63,4]}},wings:{main:{offset:{x:0,y:60,z:0},length:[80,30],width:[70,50,60],texture:[4,63],angle:[0,0],position:[10,-20,-50],bump:{position:-10,size:15}},winglets:{length:[30,20],width:[10,30,0],angle:[50,20],position:[90,80,50],texture:[63],bump:{position:10,size:30},offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.4,2.164,1.784,1.529,1.366,0.981,0.736,0.601,0.516,0.457,0.415,2.683,2.66,2.66,2.724,2.804,2.763,2.605,2.502,2.401,2.596,2.589,2.426,2.448,2.443,2.52,2.443,2.448,2.426,2.589,2.596,2.401,2.502,2.605,2.763,2.804,2.724,2.66,2.66,2.683,0.415,0.457,0.516,0.601,0.736,0.981,1.366,1.529,1.784,2.164],"lasers":[{"x":1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.2,"y":-0.24,"z":0,"angle":0,"damage":[4,8],"rate":2.5,"type":1,"speed":[100,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.804}')),JSON.stringify(r)})();
var Pulse_Fighter_301 = (function(){var r=Function('return(function(){var model;return model={name:\'Pulse-Fighter\',level:3,model:1,size:1.3,specs:{shield:{capacity:[150,200],reload:[3,5]},generator:{capacity:[60,90],reload:[20,30]},ship:{mass:120,speed:[105,120],rotation:[60,80],acceleration:[80,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-90,-75,-50,0,50,105,90],z:[0,0,0,0,0,0,0]},width:[0,15,25,30,35,20,0],height:[0,10,15,25,25,20,0],propeller:true,texture:[63,1,1,10,2,12]},cockpit:{section_segments:12,offset:{x:0,y:-20,z:20},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,10,30,60],z:[0,0,0,0,0]},width:[0,10,15,10,5],height:[0,18,25,18,5],propeller:false,texture:9},cannon:{section_segments:6,offset:{x:0,y:-40,z:-10},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,50],z:[0,0,0,0,0,0]},width:[0,5,10,10,15,0],height:[0,5,15,15,10,0],angle:0,laser:{damage:[15,30],rate:1,type:2,speed:[150,175],number:1,error:0},propeller:false,texture:3},deco:{section_segments:8,offset:{x:50,y:50,z:-10},position:{x:[0,0,5,5,0,0,0],y:[-52,-50,-20,0,20,40,42],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,5,5,0],height:[0,5,10,15,10,5,0],angle:0,laser:{damage:[3,6],rate:3,type:1,speed:[100,150],number:1,error:0},propeller:false,texture:4}},wings:{main:{length:[80,20],width:[120,50,40],angle:[-10,20],position:[30,50,30],doubleside:true,bump:{position:30,size:10},texture:[11,63],offset:{x:0,y:0,z:0}},winglets:{length:[40],width:[40,20,30],angle:[10,-10],position:[-40,-60,-55],bump:{position:0,size:30},texture:63,offset:{x:0,y:0,z:0}},stab:{length:[40,10],width:[50,20,20],angle:[40,30],position:[70,75,80],doubleside:true,texture:63,bump:{position:0,size:20},offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.343,2.204,1.998,1.955,2.088,1.91,1.085,0.974,0.895,0.842,0.829,0.95,1.429,2.556,2.618,2.726,2.851,2.837,2.825,2.828,2.667,2.742,2.553,2.766,2.779,2.735,2.779,2.766,2.553,2.742,2.667,2.828,2.825,2.837,2.851,2.726,2.618,2.556,1.43,0.95,0.829,0.842,0.895,0.974,1.085,1.91,2.088,1.955,1.998,2.204],"lasers":[{"x":0,"y":-2.34,"z":-0.26,"angle":0,"damage":[15,30],"rate":1,"type":2,"speed":[150,175],"number":1,"spread":0,"error":0,"recoil":0},{"x":1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.3,"y":-0.052,"z":-0.26,"angle":0,"damage":[3,6],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.851}')),JSON.stringify(r)})();
var Side_Fighter_302 = (function(){var r=Function('return(function(){var model;return model={name:\'Side-Fighter\',level:3,model:2,size:1.5,next:[403,404],specs:{shield:{capacity:[125,175],reload:[2,4]},generator:{capacity:[75,125],reload:[20,35]},ship:{mass:90,speed:[100,120],rotation:[50,70],acceleration:[100,130]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-30,-22,-15,0,15,22,40,30],z:[0,0,0,0,0,0,0,0,0]},width:[5,10,25,30,25,17,15,0],height:[5,10,25,30,25,17,15,0],texture:[5,63,63,63,63,12,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0],y:[-10,-8,0],z:[0,0,0]},width:[0,10,10],height:[0,10,10],texture:[9],propeller:false,laser:{damage:[4,6],rate:10,type:1,speed:[150,240],number:1,error:20}}},wings:{wings1:{doubleside:true,offset:{x:60,y:0,z:-80},length:[0,50,50,50],width:[0,0,100,100,0],angle:[95,90,90,95],position:[0,0,0,0,0],texture:[7],bump:{position:0,size:8}},join:{offset:{x:0,y:0,z:0},length:[61],width:[10,6],angle:[0],position:[0,0,0,50],texture:[8],bump:{position:10,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[0.902,0.912,0.888,0.892,0.731,0.749,0.779,2.343,2.255,2.136,2.061,2.022,2.038,2.04,2.022,2.061,2.136,2.255,2.343,0.836,0.924,1.106,1.282,1.262,1.222,1.202,1.222,1.262,1.282,1.106,0.924,0.836,2.343,2.255,2.136,2.061,2.022,2.038,2.04,2.022,2.061,2.136,2.255,2.343,0.779,0.749,0.731,0.892,0.888,0.912],"lasers":[{"x":0,"y":-0.9,"z":0,"angle":0,"damage":[4,6],"rate":10,"type":1,"speed":[150,240],"number":1,"spread":0,"error":20,"recoil":0}],"radius":2.343}')),JSON.stringify(r)})();
var Aternaki_303 = (function(){var r=Function('return(function(){var model;return model={name:\'Aternaki\',level:3,model:3,size:1.6,specs:{shield:{capacity:[150,185],reload:[5,7]},generator:{capacity:[50,70],reload:[30,42]},ship:{mass:275,speed:[80,100],rotation:[35,50],acceleration:[100,115]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-100,-80,-20,40,50,90,95,110,105],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,25,25,25,20,20,15,0],height:[0,15,20,20,20,15,15,15,0],texture:[63,3,2,4,3,63,10,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-55,z:13},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-25,-23,-20,-10,30,40],z:[-10,-3,0,0,2,2]},width:[0,5,5,10,17,15],height:[0,5,5,10,15,15],texture:[63,63,4,9,2]},cockpit_side:{section_segments:8,offset:{x:0,y:20,z:14},position:{x:[0,0,0,0,0,0,0],y:[-40,-45,-30,20,45,70],z:[0,0,0,0,0,-1,10]},width:[0,15,15,15,13,9,0],height:[0,15,15,10,7,2,0],angle:0,propeller:false,texture:[17,4,2,3,63,63]},sides:{section_segments:8,offset:{x:28,y:20,z:0},position:{x:[0,0,0,0,0,0,0],y:[-60,-50,-30,10,30,50,50],z:[0,0,0,0,0,0,0]},width:[0,10,15,15,15,5,0],height:[0,10,15,15,15,10,0],angle:1,texture:[63,2,10,63,2,17],propeller:true,laser:{damage:[15,20],rate:2,type:1,speed:[150,170],recoi:30,number:1,angle:1,error:0}},sides1:{section_segments:8,offset:{x:28,y:20,z:0},position:{x:[0,0,0,0,0,0,0],y:[-60,-50,-30,10,30,50,50],z:[0,0,0,0,0,0,0]},width:[0,10,15,15,15,5,0],height:[0,10,15,15,15,10,0],angle:1,texture:[63,2,10,63,2,17],propeller:true,laser:{damage:[5,10],rate:5,type:1,speed:[150,170],recoi:10,number:1,angle:1,error:0}}},wings:{details:{doubleside:true,offset:{x:10,y:-65,z:0},length:[20,0],width:[30,20],angle:[0,0],position:[0,10,10],texture:63,bump:{position:20,size:10}},details_:{doubleside:true,offset:{x:10,y:-65,z:1},length:[15,0],width:[25,15],angle:[0,0],position:[0,8,9],texture:11,bump:{position:20,size:10}},main:{doubleside:true,offset:{x:20,y:20,z:-5},length:[20,30,10,0],width:[50,60,40,20],angle:[-10,-15,-30,0],position:[0,0,40,60,0],texture:[4,11,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.2,2.956,2.568,2.365,2.25,1.79,1.524,1.531,1.496,1.439,1.406,1.398,1.447,1.579,1.76,2.021,2.432,2.854,3.394,3.797,2.575,2.486,2.473,3.208,3.553,3.527,3.553,3.208,2.473,2.486,2.575,3.797,3.394,2.854,2.432,2.021,1.76,1.579,1.456,1.398,1.406,1.439,1.496,1.531,1.524,1.79,2.25,2.365,2.568,2.956],"lasers":[{"x":0.862,"y":-1.28,"z":0,"angle":1,"damage":[15,20],"rate":2,"type":1,"speed":[150,170],"number":1,"spread":1,"error":0,"recoil":0},{"x":-0.862,"y":-1.28,"z":0,"angle":-1,"damage":[15,20],"rate":2,"type":1,"speed":[150,170],"number":1,"spread":1,"error":0,"recoil":0},{"x":0.862,"y":-1.28,"z":0,"angle":1,"damage":[5,10],"rate":5,"type":1,"speed":[150,170],"number":1,"spread":1,"error":0,"recoil":0},{"x":-0.862,"y":-1.28,"z":0,"angle":-1,"damage":[5,10],"rate":5,"type":1,"speed":[150,170],"number":1,"spread":1,"error":0,"recoil":0}],"radius":3.797}')),JSON.stringify(r)})();
var Y_Defender_304 = (function(){var r=Function('return(function(){var model;return model={name:\'Y-Defender\',level:3,model:4,size:1.5,specs:{shield:{capacity:[175,225],reload:[4,6]},generator:{capacity:[50,80],reload:[18,25]},ship:{mass:200,speed:[80,100],rotation:[40,60],acceleration:[70,80]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-100,-95,-50,-40,-20,-10,30,70,65],z:[0,0,0,0,0,0,0,0,0]},width:[0,20,25,10,10,20,15,20,0],height:[0,10,20,15,15,20,25,15,0],texture:[1,2,2,63,2,10,2,12],laser:{damage:[20,40],rate:2,type:1,speed:[130,170],number:1,recoil:75,error:0}},propulsors:{section_segments:8,offset:{x:50,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-30,-25,20,25,40,50,60,100,90],z:[0,0,0,0,0,0,0,0,0]},width:[0,20,15,5,25,20,15,15,0],height:[0,20,15,5,25,20,20,10,0],texture:[63,63,63,2,2,3,4,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-70,z:10},position:{x:[0,0,0,0,0,0,0],y:[-20,-10,0,10,20],z:[0,0,0,0,0]},width:[0,10,10,10,0],height:[0,10,15,12,0],texture:[9],propeller:false}},wings:{join:{offset:{x:14,y:0,z:0},length:[25],width:[20,10],angle:[0],position:[0,0,0,50],texture:[63],bump:{position:10,size:40}},join2:{offset:{x:14,y:50,z:0},length:[25],width:[20,10],angle:[0],position:[0,0,0,50],texture:[3],bump:{position:10,size:40}},winglets:{offset:{x:5,y:40,z:10},length:[10,20],width:[15,30,50],angle:[60,-20],position:[0,5,60],texture:[63],bump:{position:10,size:60}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.959,2.915,2.203,1.734,0.652,0.639,1.358,1.816,2.118,2.23,2.139,2.06,2.016,2.023,2.04,2.551,2.584,2.67,3.055,3.578,3.552,3.315,3.834,2.269,2.104,2.269,3.834,3.315,3.552,3.578,3.055,2.67,2.584,2.551,2.04,2.023,2.016,2.06,2.139,2.23,2.118,1.816,1.358,0.639,0.652,1.734,2.203,2.915,2.959],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[20,40],"rate":2,"type":1,"speed":[130,170],"number":1,"spread":0,"error":0,"recoil":75}],"radius":3.834}')),JSON.stringify(r)})();
var Vanguard_401 = (function(){var r=Function('return(function(){var model;return model={name:\'Vanguard\',level:4,model:1,size:1.2,specs:{shield:{capacity:[140,190],reload:[3,4]},generator:{capacity:[80,140],reload:[25,35]},ship:{mass:200,speed:[75,90],rotation:[90,120],acceleration:[60,80]}},bodies:{main:{section_segments:11,offset:{x:0,y:-47,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,6,12,48,77,110,137,141],z:[0,0,0,0,0,0,0,0]},width:[0,22,24,35,37,34,23,0],height:[0,22,24,35,37,34,23,0],texture:[9,3,2,8,3,2,3]},engines:{section_segments:12,offset:{x:28,y:-27,z:-10},position:{x:[25,-2,-4,-2,0,0],y:[0,40,74,98,108,105],z:[18,10,0,0,0,0]},width:[9,10,9,14,11,0],height:[2,10,9,14,11,0],texture:[3,3,3,3,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-30,z:15},position:{x:[0,0,0,0,0],y:[0,40,66,84,89],z:[-8,-2,-1,1,20]},width:[20,30,30,23,0],height:[20,30,30,23,0],texture:[9],propeller:false},cannons:{section_segments:8,offset:{x:18,y:-183,z:8},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,23,27,62,62,97,102,163],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,7,7,4,4,7,7],height:[0,5,5,7,7,4,4,7,7],texture:[12,13,4,8,4,4,3,8],propeller:false,laser:{damage:[18,25],rate:3,type:2,speed:[170,200],recoil:70,number:1,error:0}}},wings:{outer:{offset:{x:37,y:-115,z:15},length:[0,12,12,22,4,38],width:[165,235,246,232,167,122,35],angle:[-15,-15,-15,-8,-8,-8],position:[20,54,54,47,79,100,101],texture:[4,3,4,4,1,8],doubleside:true,bump:{position:30,size:4}},inner:{offset:{x:-37,y:-115,z:15},length:[12],width:[165,112],angle:[0],position:[20,0],texture:[63,63],doubleside:true,bump:{position:30,size:4}},winglet:{offset:{x:104,y:-13,z:55},length:[45,15,15,45],width:[25,70,35,70,25],angle:[-70,-70,-110,-110],position:[0,0,0,0,0],texture:[63],doubleside:true,bump:{position:0,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.128,4.427,4.643,4.646,4.01,3.568,3.144,2.81,2.808,3.088,3.087,3.077,3.045,2.998,2.935,2.552,2.417,2.317,1.954,1.88,1.891,2.158,2.148,2.228,2.236,2.256,2.236,2.228,2.148,2.158,1.891,1.88,1.954,2.317,2.417,2.552,2.935,2.998,3.045,3.077,3.087,3.088,2.808,2.81,3.144,3.568,4.01,4.646,4.643,4.427],"lasers":[{"x":0.432,"y":-4.392,"z":0.192,"angle":0,"damage":[18,25],"rate":3,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":70},{"x":-0.432,"y":-4.392,"z":0.192,"angle":0,"damage":[18,25],"rate":3,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":70}],"radius":4.646}')),JSON.stringify(r)})();
var Penery_402 = (function(){var r=Function('return(function(){var model;return model={name:\'Penery\',level:4,model:2,size:1.5,specs:{shield:{capacity:[175,200],reload:[5,7]},generator:{capacity:[80,130],reload:[40,55]},ship:{mass:190,speed:[110,120],rotation:[40,55],acceleration:[85,105]}},bodies:{body:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-130,-100,-60,-10,0,20,50,80,90,85],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,30,35,35,35,35,30,20,0],height:[0,20,20,20,20,20,20,20,20,0],texture:[4,63,4,4,4,18,63,12,17],propeller:true},propeller:{section_segments:10,offset:{x:65,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-70,-30,-10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,15,20,20,20,20,18,10,0],height:[0,15,15,15,15,15,15,18,10,0],texture:[3,18,4,4,17,63,63,12,17],propeller:true},cannon:{section_segments:6,offset:{x:65,y:-30,z:0},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,0]},width:[0,10,10,6,5,0],height:[0,10,10,7,5,0],angle:0,laser:{damage:[15,20],rate:4,type:2,speed:[160,180],number:2,error:0,angle:5,recoil:50},propeller:false,texture:[16.9,13,17,8]},engines:{section_segments:7,offset:{x:0,y:20,z:-35},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-7,-5,-4,-3,2,-1,2,3,4,4],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,20,20,20,20,20,20,20,20,0],height:[0,20,20,20,20,20,20,20,20,20,0],texture:[4,4,4,4,4,4,4,4,4,16.9],propeller:false,vertical:true},topcockpit:{section_segments:16,offset:{x:0,y:-20,z:11},position:{x:[0,0,0,0,0,0,0],y:[-65.5,-50,0,0,30],z:[0,0,0,0,0]},width:[0,10,19,19,0],height:[0,10,19,19,0],texture:[4,9,17,18,0]}},wings:{main:{doubleside:true,offset:{x:20,y:-5,z:5},length:[50,0],width:[50,50],angle:[0,0],position:[0,0,0],texture:63,bump:{position:20,size:5}},details:{doubleside:true,offset:{x:20,y:15,z:3},length:[50,0],width:[50,50],angle:[0,0],position:[0,0,0],texture:11,bump:{position:20,size:5}},main2:{doubleside:true,offset:{x:82,y:-20,z:0},length:[0,0,0,20],width:[0,0,0,150,40],angle:[0,0,0,20],position:[0,0,0,-15,10],texture:[0,8,13,63],bump:{position:35,size:20}},main3:{doubleside:true,offset:{x:85,y:-20,z:0},length:[0,0,0,20],width:[0,0,0,100,40],angle:[0,0,0,20],position:[0,0,0,-10,10],texture:[0,8,13,15],bump:{position:35,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.9,3.565,3.082,2.462,2.069,4.116,3.947,3.633,3.414,3.269,3.241,3.213,3.137,3.128,2.997,2.855,2.772,2.888,3.063,3.067,2.725,2.255,2.618,2.766,2.748,2.705,2.748,2.766,2.618,2.255,2.725,3.067,3.063,2.888,2.772,2.855,2.997,3.128,3.137,3.213,3.241,3.269,3.414,3.633,3.947,4.116,2.069,2.462,3.082,3.565],"lasers":[{"x":1.95,"y":-2.4,"z":0,"angle":0,"damage":[15,20],"rate":4,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50},{"x":-1.95,"y":-2.4,"z":0,"angle":0,"damage":[15,20],"rate":4,"type":2,"speed":[160,180],"number":2,"spread":5,"error":0,"recoil":50}],"radius":4.116}')),JSON.stringify(r)})();
var Mercury_403 = (function(){var r=Function('return(function(){var model;return model={name:\'Mercury\',level:4,model:3,size:1.3,specs:{shield:{capacity:[150,200],reload:[3,5]},generator:{capacity:[100,150],reload:[30,50]},ship:{mass:200,speed:[85,105],rotation:[60,90],acceleration:[60,80]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0],y:[-45,-50,-40,-30,0,50,100,90],z:[0,0,0,0,0,0,0,0]},width:[1,5,15,20,30,35,20,0],height:[1,5,10,15,25,15,10,0],texture:[1,4,3,63,11,10,12],propeller:true,laser:{damage:[20,40],rate:1,type:2,speed:[170,200],number:1,error:0}},cockpit:{section_segments:8,offset:{x:0,y:20,z:20},position:{x:[0,0,0,0,0,0,0],y:[-40,-20,0,20,50],z:[0,0,0,0,0]},width:[0,10,15,10,0],height:[0,18,25,18,0],texture:[4,9,4,4],propeller:false},deco:{section_segments:8,offset:{x:70,y:0,z:-10},position:{x:[0,0,0,10,-5,0,0,0],y:[-115,-80,-100,-30,0,30,100,90],z:[0,0,0,0,0,0,0,0]},width:[1,5,10,15,15,20,10,0],height:[1,5,15,20,35,30,10,0],texture:[6,6,4,63,63,4,12],angle:0,propeller:true},wingends:{section_segments:8,offset:{x:115,y:25,z:-5},position:{x:[0,2,4,2,0,0],y:[-20,-10,0,10,20,15],z:[0,0,0,0,0,0]},width:[2,3,6,3,4,0],height:[5,15,22,17,5,0],texture:[4,4,4,4,6],propeller:true,angle:2,laser:{damage:[3,5],rate:4,type:1,speed:[150,180],number:1,error:0}}},wings:{main:{length:[80,40],width:[40,30,20],angle:[-10,20],position:[30,50,30],texture:[11,11],bump:{position:30,size:10},offset:{x:0,y:0,z:0}},font:{length:[80,30],width:[20,15],angle:[-10,20],position:[-20,-40],texture:[63],bump:{position:30,size:10},offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.303,1.306,1.221,1.135,3.514,3.457,3.283,3.008,2.819,2.69,2.614,2.461,2.233,3.14,3.312,3.323,3.182,2.865,2.958,3.267,3.33,3.079,2.187,2.651,2.647,2.605,2.647,2.651,2.187,3.079,3.33,3.267,2.958,2.865,3.182,3.323,3.312,3.14,2.233,2.461,2.614,2.69,2.819,3.008,3.283,3.457,3.514,1.135,1.221,1.306],"lasers":[{"x":0,"y":-1.3,"z":0.26,"angle":0,"damage":[20,40],"rate":1,"type":2,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.972,"y":0.13,"z":-0.13,"angle":2,"damage":[3,5],"rate":4,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.972,"y":0.13,"z":-0.13,"angle":-2,"damage":[3,5],"rate":4,"type":1,"speed":[150,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.514}')),JSON.stringify(r)})();
var X_Warrior_404 = (function(){var r=Function('return(function(){var model;return model={name:\'X-Warrior\',level:4,model:4,size:1.6,specs:{shield:{capacity:[150,200],reload:[3,5]},generator:{capacity:[90,150],reload:[35,55]},ship:{mass:250,speed:[75,100],rotation:[50,90],acceleration:[90,110]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-100,-99,-50,0,10,30,50,80,100,90],z:[-10,-10,-5,0,0,0,0,0,0,0,0]},width:[0,5,30,35,25,30,50,50,20,0],height:[0,5,20,20,20,20,20,20,10,0],texture:[4,2,10,2,63,11,4,63,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-20,z:5},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,0,30,40],z:[0,0,0,0,0]},width:[0,10,15,10,0],height:[0,18,25,18,0],texture:9,propeller:false},cannons:{section_segments:12,offset:{x:30,y:-70,z:0},position:{x:[0,0,0,0,0],y:[-30,-20,0,20,30],z:[0,0,0,0,0]},width:[3,5,5,5,3],height:[3,5,15,15,3],texture:[6,4,4,6],angle:0,laser:{damage:[5,8],rate:3,type:1,speed:[120,180],number:1,error:0}},wingendtop:{section_segments:12,offset:{x:105,y:50,z:40},position:{x:[0,0,0,0,0,0,0],y:[-65,-70,-20,0,20,30,5],z:[0,0,0,0,0,0,0]},width:[0,2,3,7,7,5,0],height:[0,2,3,7,7,5,0],texture:[12,63,63,11,63,12],angle:0},wingendbottom:{section_segments:12,offset:{x:105,y:50,z:-40},position:{x:[0,0,0,0,0,0,0],y:[-65,-70,-20,0,20,30,25],z:[0,0,0,0,0,0,0]},width:[0,2,3,7,7,5,0],height:[0,2,3,7,7,5,0],texture:[12,63,63,11,63,12],angle:0,laser:{damage:[3,5],rate:2.5,type:1,speed:[100,160],number:1,error:0}},propellers:{section_segments:12,offset:{x:40,y:60,z:0},position:{x:[0,0,5,3,5,0,0],y:[-35,-40,-30,0,40,50,40],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,0],height:[0,5,25,30,25,5,0],texture:4,angle:0,propeller:true}},wings:{xwing1:{doubleside:true,offset:{x:0,y:70,z:0},length:[80,35],width:[50,40,30],angle:[20,20],position:[0,-10,-20],texture:[1,10],bump:{position:10,size:20}},xwing2:{doubleside:true,offset:{x:0,y:70,z:0},length:[80,35],width:[50,40,30],angle:[-20,-20],position:[0,-10,-20],texture:[1,1],bump:{position:10,size:20}},winglets2:{offset:{x:30,y:-40,z:0},length:[20,10],width:[30,20,5],angle:[-10,20],position:[0,0,0],texture:63,bump:{position:30,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.2,3.096,3.365,3.37,2.625,2.149,2.266,2.325,2.329,1.208,1.156,3.483,3.455,3.472,3.565,3.811,4.087,4.351,4.352,3.594,3.502,3.848,3.867,3.701,3.258,3.206,3.258,3.701,3.867,3.848,3.502,3.594,4.352,4.351,4.087,3.811,3.565,3.472,3.455,3.483,1.156,1.208,2.329,2.325,2.266,2.149,2.625,3.37,3.365,3.096],"lasers":[{"x":0.96,"y":-3.2,"z":0,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-3.2,"z":0,"angle":0,"damage":[5,8],"rate":3,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.36,"y":-0.64,"z":-1.28,"angle":0,"damage":[3,5],"rate":2.5,"type":1,"speed":[100,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.36,"y":-0.64,"z":-1.28,"angle":0,"damage":[3,5],"rate":2.5,"type":1,"speed":[100,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.352}')),JSON.stringify(r)})();
var Leviathan_405 = (function(){var r=Function('return(function(){var model;return model={name:\'Leviathan\',level:4,model:5,size:2.2,specs:{shield:{capacity:[150,200],reload:[3,5]},generator:{capacity:[110,130],reload:[30,45]},ship:{mass:150,speed:[80,95],rotation:[80,90],acceleration:[60,70]}},bodies:{main:{section_segments:10,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-70,-60,-40,-20,10,30,55,75,60],z:[0,0,0,0,0,0,0,0,0]},width:[5,10,20,25,25,25,25,20,0],height:[5,7,10,10,10,10,10,10,0],propeller:true,texture:[13,63,2,10,2,18,13,16.9]},cockpit:{section_segments:6,offset:{x:0,y:-50,z:10},position:{x:[0,0,0,0,0,0,0],y:[-20,-10,0,10,20],z:[0,0,0,0,0]},width:[5,10,13,15,3],height:[0,3,3,3,3],texture:[4,9,9,63,3]},cockpit_details:{section_segments:6,offset:{x:1,y:-50,z:10},position:{x:[0,0,0,0,0,0,0],y:[-20,-10,0,10,20],z:[0,0,0,0,0]},width:[5,10,13,15,3],height:[0,1,1,1,1],texture:[8,4,4,4,3]},side:{section_segments:10,offset:{x:2,y:0,z:8},position:{x:[0,0,0,0,0,0,0],y:[-40,-32,-5,0,5,10,15],z:[0,0,0,0,0,0,0]},width:[2,2,2,2,2,2,2,2,2,0],height:[2,2,2,2,2,2,2,2,2,0],texture:[0,4,4,4,4,17]},side1:{section_segments:10,offset:{x:0,y:20,z:9},position:{x:[0,0,0,0,0,0,0],y:[-60,-60,-60,-60,-60,0,0],z:[0,0,0,0,0,0,0]},width:[2,2,2,2,2,2,2,2,2,0],height:[2,2,2,2,2,2,2,2,2,0],texture:[63]},engines:{section_segments:6,offset:{x:0,y:7,z:-22},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-7,-5,-4,-3,2,-1,2,3,4,4],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,10,10,10,10,10,10,10,10,0],height:[0,10,10,10,10,10,10,10,10,10,0],texture:[13,13,13,13,13,13,13,13,13,16.9],propeller:false,vertical:true},engines1:{section_segments:6,offset:{x:0,y:7.5,z:-22},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-10,-7,-5,-4,-3,2,-1,2,3,4,4],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,5,0],texture:[13,13,13,13,13,13,13,13,13,15.8],propeller:false,vertical:true},engines_details:{section_segments:8,offset:{x:5,y:20.5,z:10.5},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,2,2,2,2,0],height:[0,1,1,1,1,1,1,1,1,0],texture:[18],propeller:false},engines_details1:{section_segments:8,offset:{x:5,y:23.5,z:10.5},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,2,2,2,2,0],height:[0,1,1,1,1,1,1,1,1,0],texture:[18],propeller:false},engines_details2:{section_segments:8,offset:{x:3,y:18,z:10.5},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,2,2,2,2,0],height:[0,1,1,1,1,1,1,1,1,0],texture:[18],propeller:false,angle:50},engines_details3:{section_segments:8,offset:{x:3,y:26,z:10.5},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,2,2,2,2,2,2,0],height:[0,1,1,1,1,1,1,1,1,0],texture:[18],propeller:false,angle:-50},cannon:{section_segments:6,offset:{x:20,y:7,z:-10},position:{x:[0,0,0,0,0,0],y:[-25,-30,-20,0,30,25],z:[0,0,0,0,0,0]},width:[0,10,13,13,9,0],height:[0,10,13,13,9,0],angle:0,laser:{damage:[10,15],rate:5,type:1,speed:[160,180],number:1,error:0},propeller:true,texture:[16.9,18,13,4]},details:{section_segments:8,offset:{x:20,y:30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details1:{section_segments:8,offset:{x:20,y:25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details2:{section_segments:8,offset:{x:20,y:20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details3:{section_segments:8,offset:{x:20,y:15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details4:{section_segments:8,offset:{x:20,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false}},wings:{main:{length:[70,0],width:[50,25],angle:[-5,-5],position:[0,30],texture:[8],bump:{position:40,size:10},offset:{x:0,y:-5,z:-7}},main1:{length:[10],width:[20,10],angle:[-5,-5],position:[0,10],texture:[63],bump:{position:40,size:5},offset:{x:20,y:22,z:7}},winglets:{length:[10,0],width:[20,5],angle:[0,10],position:[0,15],texture:[17],bump:{position:40,size:10},offset:{x:10,y:-70,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.966,3.893,3.211,2.735,2.278,1.946,1.636,1.617,1.583,1.521,1.557,1.795,2.148,2.752,3.166,3.298,3.479,3.331,2.278,2.068,2.091,2.2,2.561,2.544,2.463,2.425,2.463,2.544,2.561,2.2,2.091,2.068,2.278,3.331,3.479,3.298,3.166,2.752,2.148,1.795,1.557,1.521,1.583,1.617,1.636,1.946,2.278,2.735,3.211,3.893],"lasers":[{"x":0.88,"y":-1.012,"z":-0.44,"angle":0,"damage":[10,15],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.88,"y":-1.012,"z":-0.44,"angle":0,"damage":[10,15],"rate":5,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.966}')),JSON.stringify(r)})();
var Side_Interceptor_406 = (function(){var r=Function('return(function(){var model;return model={name:\'Side-Interceptor\',level:4,model:6,size:1.6,specs:{shield:{capacity:[175,225],reload:[3,6]},generator:{capacity:[100,150],reload:[30,40]},ship:{mass:120,speed:[80,110],rotation:[50,100],acceleration:[110,140]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-30,-22,-15,0,15,22,30,20],z:[0,0,0,0,0,0,0,0,0,0]},width:[5,10,25,30,25,10,15,0],height:[5,10,25,30,25,10,15,0],texture:[1,3,63,63,3,4,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0],y:[-10,-8,0],z:[0,0,0]},width:[0,10,10],height:[0,10,10],texture:[5,9,5],propeller:false},cannons:{section_segments:12,offset:{x:60,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-25,-30,-20,0,20,30,20],z:[0,0,0,0,0,0,0]},width:[0,3,5,5,5,3,0],height:[0,3,5,5,5,3,0],texture:[12,6,63,63,6,12],angle:0,laser:{damage:[5,7],rate:5,type:1,speed:[100,200],number:1,error:5}}},wings:{wings1:{doubleside:true,offset:{x:60,y:20,z:0},length:[-20,-10,-40],width:[50,50,130,30],angle:[280,315,315],position:[0,0,-50,0],texture:4,bump:{position:10,size:-10}},wings2:{doubleside:true,offset:{x:60,y:20,z:0},length:[20,10,40],width:[50,50,130,30],angle:[-100,-135,-135],position:[0,0,-50,0],texture:4,bump:{position:10,size:10}},join:{doubleside:true,offset:{x:0,y:0,z:0},length:[61],width:[10,6],angle:[0],position:[0,0,0,50],texture:63,bump:{position:10,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[0.962,0.973,0.948,0.951,3.427,3.044,2.657,2.383,2.207,2.233,2.2,2.147,2.096,2.096,2.147,2.2,2.233,2.37,2.4,1.63,1.451,1.323,1.061,1.009,0.977,0.962,0.977,1.009,1.061,1.323,1.451,1.63,2.4,2.37,2.233,2.2,2.147,2.096,2.096,2.147,2.2,2.233,2.207,2.383,2.657,3.044,3.427,0.951,0.948,0.973],"lasers":[{"x":1.92,"y":-0.96,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[100,200],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.92,"y":-0.96,"z":0,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[100,200],"number":1,"spread":0,"error":5,"recoil":0}],"radius":3.427}')),JSON.stringify(r)})();
var Pioneer_407 = (function(){var r=Function('return(function(){var model;return model={name:\'Pioneer\',level:4,model:7,size:1.6,specs:{shield:{capacity:[175,230],reload:[4,7]},generator:{capacity:[50,100],reload:[25,30]},ship:{mass:250,speed:[90,120],rotation:[40,80],acceleration:[50,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0],y:[-100,-60,-10,0,20,50,80,100,90],z:[-10,-5,0,0,0,0,0,0,0,0]},width:[5,50,50,30,40,50,50,20,0],height:[5,20,20,20,30,30,20,10,0],texture:[2,10,2,4,11,11,63,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-40,z:10},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,0,30,40],z:[0,0,0,0,0]},width:[0,10,15,10,0],height:[0,18,25,18,0],texture:[9],propeller:false},cannons:{section_segments:12,offset:{x:30,y:-70,z:0},position:{x:[0,0,0,0,0],y:[-30,-20,0,20,30],z:[0,0,0,0,0]},width:[3,5,5,5,3],height:[3,5,15,15,3],texture:[6,4,4,6],angle:0,laser:{damage:[6,11],rate:3,type:1,speed:[100,140],number:1,error:0}},shield:{section_segments:12,offset:{x:60,y:-40,z:0},position:{x:[0,5,3,5,0,0],y:[-30,-20,0,20,30,20],z:[0,0,0,0,0,0]},width:[5,10,10,10,5,0],height:[5,25,30,25,5,0],propeller:true,texture:4,angle:0},shield2:{section_segments:12,offset:{x:60,y:60,z:0},position:{x:[0,5,3,5,0,0],y:[-30,-20,0,20,30,20],z:[0,0,0,0,0,0]},width:[5,10,10,10,5,0],height:[5,25,30,25,5,0],propeller:true,texture:4,angle:0}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.204,3.168,3.365,3.37,2.625,2.907,3.057,3.073,2.942,2.664,2.548,2.441,1.29,1.032,1.136,1.287,2.732,2.911,3.245,3.523,3.553,3.411,3.132,3.263,3.258,3.206,3.258,3.263,3.132,3.411,3.553,3.523,3.245,2.911,2.732,1.287,1.136,1.032,1.29,2.441,2.548,2.664,2.942,3.073,3.057,2.907,2.625,3.37,3.365,3.168],"lasers":[{"x":0.96,"y":-3.2,"z":0,"angle":0,"damage":[6,11],"rate":3,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.96,"y":-3.2,"z":0,"angle":0,"damage":[6,11],"rate":3,"type":1,"speed":[100,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.553}')),JSON.stringify(r)})();
var Crusader_408 = (function(){var r=Function('return(function(){var model;return model={name:\'Crusader\',level:4,model:8,size:1.6,specs:{shield:{capacity:[250,300],reload:[5,7]},generator:{capacity:[50,90],reload:[20,35]},ship:{mass:250,speed:[75,100],rotation:[40,70],acceleration:[80,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-100,-99,-90,-30,30,100,80],z:[0,0,0,0,0,0,0]},width:[0,5,15,40,25,20,0],height:[0,5,15,40,50,20,0],texture:[6,63,1,8,63,12]},cockpit:{section_segments:8,offset:{x:0,y:-50,z:30},position:{x:[0,0,0,0,0],y:[-30,-10,0,10,20],z:[-13,-3,0,5,3]},width:[3,13,15,9,3],height:[3,6,8,6,3],texture:[9]},main_propulsor:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0],y:[50],z:[0]},width:[25],height:[0],propeller:true},side_propulsors:{section_segments:8,offset:{x:60,y:20,z:0},position:{x:[-30,-10,0,0,0],y:[-40,-20,0,20,70],z:[0,0,0,0,0]},width:[5,5,10,20,10],height:[5,5,10,10,10],texture:[63],propeller:true},lasers:{section_segments:8,offset:{x:45,y:-20,z:-5},position:{x:[0,0,0,0,0],y:[-40,-20,-30,20,70],z:[0,0,0,0,0]},width:[0,5,8,12,1],height:[0,3,5,12,1],texture:[6,6,10],laser:{damage:[6,9],rate:3,type:1,speed:[130,160],number:1,error:0}}},wings:{main:{offset:{x:20,y:-25,z:5},length:[100,15],width:[120,30,40],angle:[0,40],position:[30,90,85],texture:[11,63],bump:{position:0,size:20}},tail:{offset:{x:0,y:75,z:20},length:[30,40],width:[30,20,25],angle:[10,-30],position:[0,0,-30],texture:[63],bump:{position:0,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.2,3.14,2.815,2.366,2.084,2.4,2.332,2.322,2.128,1.994,1.918,2.067,2.304,2.644,3.134,4.525,4.797,4.922,4.238,3.554,3.649,3.411,2.88,3.263,3.258,3.206,3.258,3.263,2.88,3.411,3.649,3.554,4.238,4.922,4.797,4.525,3.134,2.644,2.304,2.067,1.918,1.994,2.128,2.322,2.332,2.4,2.084,2.366,2.815,3.14],"lasers":[{"x":1.44,"y":-1.92,"z":-0.16,"angle":0,"damage":[6,9],"rate":3,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.44,"y":-1.92,"z":-0.16,"angle":0,"damage":[6,9],"rate":3,"type":1,"speed":[130,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.922}')),JSON.stringify(r)})();
var U_Sniper_501 = (function(){var r=Function('return(function(){var model;return model={name:\'U-Sniper\',level:5,model:1,size:1.8,specs:{shield:{capacity:[200,300],reload:[4,6]},generator:{capacity:[80,160],reload:[40,60]},ship:{mass:200,speed:[70,90],rotation:[50,70],acceleration:[60,110]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0],y:[0,-10,40,100,90,100],z:[0,0,0,0,0,0]},width:[0,10,23,10,0],height:[0,5,23,10,0],texture:[12,1,10,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:30},position:{x:[0,0,0,0],y:[20,40,80],z:[-4,0,-6]},width:[5,10,5],height:[0,8,0],texture:[9]},uwings:{section_segments:8,offset:{x:50,y:-20,z:-10},position:{x:[0,0,0,0,0,0],y:[-90,-100,40,80,90,100],z:[0,0,0,0,0,0]},width:[0,10,25,20,0],height:[0,5,25,20,0],texture:[12,2,3,4]},cannons:{section_segments:12,offset:{x:70,y:20,z:0},position:{x:[0,0,0,0,0,0,0],y:[-60,-70,-20,0,20,50,45],z:[0,0,0,0,0,0,0]},width:[0,5,6,10,15,5,0],height:[0,5,5,10,10,5,0],angle:0,laser:{damage:[40,60],rate:2,type:2,speed:[190,240],recoil:200,number:1,error:0},propeller:false,texture:[4,4,10,4,63,4]},side_propulsors:{section_segments:10,offset:{x:30,y:30,z:5},position:{x:[0,0,0,0,0,0,0],y:[0,10,13,25,30,40,60,50],z:[0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,5,5,10,5,0],height:[0,5,10,10,10,5,5,10,5,0],propeller:true,texture:[5,2,11,2,63,11,12]}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[0.361,0.366,0.378,4.774,4.83,4.17,3.608,3.248,3.245,3.083,2.915,2.807,2.751,2.829,2.976,3.22,3.412,3.521,3.693,3.681,3.138,2.937,3.473,3.407,3.618,3.607,3.618,3.407,3.473,2.937,3.138,3.681,3.693,3.521,3.412,3.22,2.976,2.829,2.751,2.807,2.915,3.083,3.245,3.248,3.608,4.17,4.83,4.774,0.378,0.366],"lasers":[{"x":2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200},{"x":-2.52,"y":-1.8,"z":0,"angle":0,"damage":[40,60],"rate":2,"type":2,"speed":[190,240],"number":1,"spread":0,"error":0,"recoil":200}],"radius":4.83}')),JSON.stringify(r)})();
var FuryStar_502 = (function(){var r=Function('return(function(){var model;return model={name:\'FuryStar\',level:5,model:2,size:1.5,specs:{shield:{capacity:[200,275],reload:[6,7]},generator:{capacity:[100,150],reload:[30,40]},ship:{mass:200,speed:[70,100],rotation:[120,180],acceleration:[150,180]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:5},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-50,-45,0,10,15,35,55,40],z:[0,0,0,0,0,0,0,0]},width:[0,20,25,17,25,20,15,0],height:[0,15,15,15,20,20,15,0],texture:[1,4,63,4,2,12,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-43,z:5},position:{x:[0,0,0,0,0,0,0],y:[-10,-4,10],z:[-5,0,0]},width:[1,18,20],height:[1,15,10],texture:[9]},missiles:{section_segments:12,offset:{x:35,y:-5,z:10},position:{x:[0,0,0,0,0],y:[-30,-23,0,23,30],z:[0,0,0,0,0]},width:[0,5,5,5,0],height:[0,5,5,5,0],texture:[6,4,4,10],angle:0,laser:{damage:[1,2],rate:4,type:1,speed:[100,125],number:1,error:0}},cannon:{section_segments:6,offset:{x:15,y:-10,z:-15},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[12,18],rate:2,type:1,speed:[200,250],number:1,error:0},propeller:false,texture:[3,3,10,3]},top_propulsors:{section_segments:10,offset:{x:75,y:45,z:40},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,80,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,5,0],propeller:true,texture:[4,4,2,2,5,63,5,63,17]},bottom_propulsors:{section_segments:10,offset:{x:100,y:0,z:-40},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,80,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,5,0],propeller:true,texture:[4,4,2,2,5,63,5,4,17]}},wings:{rooftop:{doubleside:true,offset:{x:0,y:-20,z:20},length:[20,15,25,25,5],width:[50,40,35,35,35,30],angle:[0,-20,30,30,30],position:[0,10,20,50,80,100],texture:[8,63,3,3],bump:{position:-40,size:5}},bottom:{doubleside:true,offset:{x:10,y:-20,z:0},length:[30,30,30],width:[60,50,50,50],angle:[-27,-27,-27],position:[0,10,30,40],texture:[1],bump:{position:-40,size:5}},topwinglets:{doubleside:true,offset:{x:80,y:87,z:45},length:[20],width:[40,30],angle:[60],position:[0,50],texture:[63],bump:{position:10,size:10}},bottomwinglets:{doubleside:true,offset:{x:100,y:50,z:-45},length:[20],width:[40,30],angle:[-60],position:[0,50],texture:[4],bump:{position:10,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[1.59,1.832,1.891,1.874,1.458,1.479,1.524,1.571,1.645,1.757,1.925,3.322,3.427,3.455,3.48,3.666,3.822,4.057,4.521,4.774,5.039,5.299,1.577,1.71,1.679,1.653,1.679,1.71,1.577,5.299,5.039,4.774,4.521,4.057,3.822,3.666,3.48,3.455,3.428,3.322,1.925,1.757,1.645,1.571,1.524,1.479,1.458,1.874,1.891,1.832],"lasers":[{"x":1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.05,"y":-1.05,"z":0.3,"angle":0,"damage":[1,2],"rate":4,"type":1,"speed":[100,125],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.45,"y":-1.8,"z":-0.45,"angle":0,"damage":[12,18],"rate":2,"type":1,"speed":[200,250],"number":1,"spread":0,"error":0,"recoil":0}],"radius":5.299}')),JSON.stringify(r)})();
var T_Warrior_503 = (function(){var r=Function('return(function(){var model;return model={name:\'T-Warrior\',level:5,model:3,size:1.6,specs:{shield:{capacity:[225,325],reload:[4,7]},generator:{capacity:[80,140],reload:[35,50]},ship:{mass:250,speed:[80,90],rotation:[50,80],acceleration:[90,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-95,-100,-98,-70,0,90,91],z:[0,0,0,0,0,0,0]},width:[0,5,6,20,30,20,3],height:[0,2,4,20,30,25,3],texture:[12,5,63,1,10,12]},cannon:{section_segments:6,offset:{x:0,y:-45,z:-15},position:{x:[0,0,0,0,0,0],y:[-40,-50,-20,0,20,30],z:[0,0,0,0,0,20]},width:[0,5,8,11,7,0],height:[0,5,8,11,10,0],angle:0,laser:{damage:[4,6],rate:3,type:1,speed:[130,160],number:5,angle:30,error:0},propeller:false,texture:[3,3,10,3]},back:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0],y:[90,95,95],z:[0,0,0]},width:[15,18,2],height:[18,23,2],texture:[63]},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0],y:[-50,-40,-25,0,5],z:[0,0,0,0,9,9]},width:[0,10,15,10,0],height:[0,10,15,16,0],texture:[9]},top_propulsor:{section_segments:10,offset:{x:0,y:30,z:60},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,100,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,15,15,20,10,0],height:[0,15,20,20,20,15,15,20,10,0],texture:[4,63,1,1,1,63,1,1,12],propeller:true},side_propulsors:{section_segments:10,offset:{x:80,y:30,z:-30},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,100,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,15,15,20,10,0],height:[0,15,20,20,20,15,15,20,10,0],texture:[4,63,1,1,1,63,1,1,12],propeller:true}},wings:{top_join:{offset:{x:0,y:50,z:0},length:[60],width:[70,30],angle:[90],position:[0,0,0,50],texture:[11],bump:{position:10,size:20}},side_joins:{offset:{x:0,y:50,z:0},length:[80],width:[70,30],angle:[-20],position:[0,0,0,50],texture:[11],bump:{position:10,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.204,3.125,2.591,2.145,1.713,1.46,1.282,1.155,1.073,1.009,0.977,0.955,0.957,2.594,3.217,3.408,3.55,3.898,4.204,4.633,5.051,4.926,2.67,2.95,4.171,4.168,4.171,2.95,2.67,4.926,5.051,4.633,4.204,3.898,3.55,3.408,3.217,2.594,0.96,0.955,0.977,1.009,1.073,1.155,1.282,1.46,1.713,2.145,2.591,3.125],"lasers":[{"x":0,"y":-3.04,"z":-0.48,"angle":0,"damage":[4,6],"rate":3,"type":1,"speed":[130,160],"number":5,"spread":30,"error":0,"recoil":0}],"radius":5.051}')),JSON.stringify(r)})();
var Thenpale_504 = (function(){var r=Function('return(function(){var model;return model={name:\'Thenpale\',level:5,model:4,size:1.85,specs:{shield:{capacity:[200,275],reload:[2,6]},generator:{capacity:[80,120],reload:[50,65]},ship:{mass:250,speed:[90,110],rotation:[65,80],acceleration:[60,65]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-130,-100,-70,-50,-10,30,50,80,90,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,16,20,20,20,20,20,15,0],height:[0,5,10,10,10,10,10,10,10,0],texture:[63,3,3,3,3,2,18,4,16.9],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-20,z:2},position:{x:[0,0,0,0,0,0,0],y:[-70,-50,0,30,40],z:[0,0,0,0,0]},width:[10,15,15,15,10],height:[10,15,15,15,10],texture:[9,9,18,13,10],propeller:false},reactors:{section_segments:8,offset:{x:65,y:50,z:-12},position:{x:[-10,-10,-6,-2,-1,-0.5,0,0,0,0,0,0],y:[-70,-70,-50,-25,-5,10,30,40,50,50],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7,9,10,10,10,10,10,10,0],height:[0,7,9,10,10,10,10,10,10,0],texture:[16.5,63,4,63,13,18,4,3],angle:0,propeller:false,laser:{damage:[25,35],rate:1,type:1,speed:[170,190],number:1,angle:-10,recoil:50}},reactors1:{section_segments:12,offset:{x:65,y:100,z:-12},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-5,-5,-5,-5,-5,5,5,5,5,5],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7,9,7,7,7,7,7,7,0],height:[0,2,5,7,7,7,7,7,7,0],texture:[17,63,63,4,63,18,17,17],angle:0,propeller:true},cannons:{section_segments:8,offset:{x:20,y:-25,z:-10},position:{x:[-3,-3,-2,-1,0,0,0,0,0,0,0,0],y:[-60,-60,-45,-30,-5,40,80,100,100,0],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,5,4,10],height:[0,5,10,10,10,10,10,5,4,10],texture:[17.5,4,13,4,18,4,15.9,17],propeller:true,laser:{damage:[15,25],rate:1,type:1,speed:[150,170],number:1,angle:0,recoil:50}},details:{section_segments:8,offset:{x:15,y:-25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details1:{section_segments:8,offset:{x:15,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details2:{section_segments:8,offset:{x:15,y:-15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details3:{section_segments:8,offset:{x:15,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details4:{section_segments:8,offset:{x:15,y:-5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details5:{section_segments:8,offset:{x:15,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details6:{section_segments:8,offset:{x:15,y:5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details7:{section_segments:8,offset:{x:15,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details8:{section_segments:8,offset:{x:15,y:15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false}},wings:{font:{length:[70,0],width:[70,50],angle:[0,0],position:[0,30],texture:[18],bump:{position:30,size:15},offset:{x:0,y:20,z:-10}},wings:{length:[10,20,0],width:[70,70,20],angle:[0,0,0],position:[0,5,40],texture:[4,63],bump:{position:30,size:0},offset:{x:70,y:60,z:-10}},main:{doubleside:true,offset:{x:0,y:-31,z:17},length:[0,1,1],width:[0,79,79],angle:[0,0,0],position:[0,0,0,0],texture:63,bump:{position:20,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.55,4.671,3.277,3.004,2.483,2.019,1.721,1.512,1.365,2.01,2.412,2.443,2.514,2.601,2.736,3.206,3.61,4.208,5.073,5.495,4.912,4.601,2.925,2.918,2.637,2.595,2.637,2.918,2.925,4.601,4.912,5.495,5.073,4.208,3.61,3.206,2.736,2.601,2.516,2.443,2.412,2.01,1.365,1.512,1.721,2.019,2.483,3.004,3.277,4.671],"lasers":[{"x":2.035,"y":-0.74,"z":-0.444,"angle":0,"damage":[25,35],"rate":1,"type":1,"speed":[170,190],"number":1,"spread":-10,"error":0,"recoil":50},{"x":-2.035,"y":-0.74,"z":-0.444,"angle":0,"damage":[25,35],"rate":1,"type":1,"speed":[170,190],"number":1,"spread":-10,"error":0,"recoil":50},{"x":0.629,"y":-3.145,"z":-0.37,"angle":0,"damage":[15,25],"rate":1,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.629,"y":-3.145,"z":-0.37,"angle":0,"damage":[15,25],"rate":1,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":50}],"radius":5.55}')),JSON.stringify(r)})();
var Shadow_X_2_505 = (function(){var r=Function('return(function(){var model;return model={name:\'Shadow X-2\',level:5,model:5,size:1.1,specs:{shield:{capacity:[150,220],reload:[5,7]},generator:{capacity:[80,145],reload:[19,29]},ship:{mass:125,speed:[110,140],rotation:[35,48],acceleration:[140,160]}},bodies:{main:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-100,-98,-95,-70,-40,0,40,70,80,90,100],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,20,30,20,20,30,30,30,20,0],height:[0,4,4,20,20,10,10,15,15,15,10,10],texture:[12,5,63,4,4,3,4,4,5]},back:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0],y:[90,95,100,105,90],z:[0,0,0,0,0]},width:[10,15,18,19,2],height:[3,5,7,8,2],texture:[63],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-25,z:12},position:{x:[0,0,0,0,0,0],y:[-45,-40,-25,0,5],z:[0,0,0,0,0,0]},width:[0,10,15,5,0],height:[0,10,15,5,0],texture:[9]},laser:{section_segments:10,offset:{x:50,y:10,z:-13},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-25,0,10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,5,0],texture:[6,4,10,3,4,3,2],propeller:true,laser:{damage:[5,7],rate:5,type:1,speed:[160,190],number:1}}},wings:{top:{doubleside:true,offset:{x:10,y:60,z:5},length:[30],width:[50,30],angle:[60],position:[0,50],texture:[3],bump:{position:10,size:10}},side:{doubleside:true,offset:{x:10,y:70,z:5},length:[30],width:[40,20],angle:[-13],position:[0,60],texture:[63],bump:{position:10,size:10}},wings:{offset:{x:0,y:35,z:0},length:[80],width:[100,70],angle:[0],position:[-80,50],texture:[4],bump:{position:10,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[5,7],"rate":5,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.199}')),JSON.stringify(r)})();
var Aetos_506 = (function(){var r=Function('return(function(){var model;return model={name:\'Aetos\',level:5,model:6,size:1.5,specs:{shield:{capacity:[200,300],reload:[5,7]},generator:{capacity:[80,140],reload:[35,45]},ship:{mass:175,speed:[90,100],rotation:[70,90],acceleration:[110,130]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-100,-99,-98,-50,0,100,80],z:[0,0,0,0,0,0,0]},width:[0,5,6,17,28,20,0],height:[0,2,4,15,25,25,0],texture:[4,6,10,10,11,12],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-60,z:10},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,5,10,10,0],height:[0,5,10,12,0],texture:[9]},lasers:{section_segments:8,offset:{x:81,y:-15,z:-30},position:{x:[0,0,0,0,0],y:[25,70,10,80,90],z:[0,0,0,0,0]},width:[5,0,0,5,0],height:[5,5,0,5,0],texture:[63,63,6],angle:2,laser:{damage:[5,8],rate:5,type:1,speed:[120,180],number:1,angle:0,error:0}}},wings:{top:{doubleside:true,offset:{x:15,y:40,z:0},length:[50],width:[70,30],angle:[70],position:[0,30],texture:[63],bump:{position:10,size:10}},main:{doubleside:true,offset:{x:0,y:25,z:15},length:[90,40],width:[70,50,30],angle:[-30,-40],position:[30,20,-20],texture:[8,63],bump:{position:10,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.917,2.069,1.61,1.343,1.158,1.037,0.95,0.895,0.853,0.83,0.824,3.271,3.283,3.312,3.232,3.135,3.283,3.38,3.09,2.882,2.75,2.726,3.059,3.054,3.006,3.054,3.059,2.726,2.75,2.882,3.09,3.38,3.283,3.135,3.232,3.312,3.283,3.271,0.824,0.83,0.853,0.895,0.95,1.037,1.158,1.343,1.61,2.069,2.917],"lasers":[{"x":2.44,"y":-0.15,"z":-0.9,"angle":2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.44,"y":-0.15,"z":-0.9,"angle":-2,"damage":[5,8],"rate":5,"type":1,"speed":[120,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.38}')),JSON.stringify(r)})();
var Howler_507 = (function(){var r=Function('return(function(){var model;return model={name:\'Howler\',level:5,model:7,size:1.2,zoom:1,specs:{shield:{capacity:[275,340],reload:[5,7]},generator:{capacity:[80,110],reload:[35,50]},ship:{mass:225,speed:[85,98],rotation:[70,95],acceleration:[90,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-145,-135,-125,-130,-100,-55,5,60,85,120,118],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,8,20,30,35,35,30,22,0],height:[0,5,5,8,15,20,33,30,30,22,0],texture:[17,4,13,3,2,1,10,31,12,17],propeller:true,laser:{damage:[2.5,4],rate:6,speed:[160,210],number:2,recoil:0,type:1}},cockpit:{section_segments:8,offset:{x:0,y:-80,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-20,-16,30,60],z:[-4,-4,1,0,0,0,0,0,0,0,0,0]},width:[0,6,16,12],height:[0,4,16,12],texture:[2,9,31]},front1:{section_segments:8,offset:{x:22,y:-125,z:0},position:{x:[0,0,0,0,0,0,-5],y:[-22.5,-12,-4.5,-7.5,22.5,60],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,4.5,4.5,6,12,9],height:[0,4.5,4.5,6,12,9],texture:[17,4,3],laser:{damage:[9,15],rate:1,speed:[150,200],number:1,recoil:25,type:2}},front2:{section_segments:10,offset:{x:32,y:-95,z:0},position:{x:[-4,-4,0,-1],y:[0,-12,22.5,60],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7.5,12,9],height:[0,12,18,15],texture:[13,2,63],angle:0},propulsors:{section_segments:8,offset:{x:40,y:30,z:-5},position:{x:[-12,-12,-2,0,0,0,0,0,0,0,0,0,0],y:[-90,-100,-60,20,50,48],z:[5,5,5,0,0,0,0,0,0,0,0,0,0]},width:[0,3.5999999999999996,12,24,14.399999999999999,0],height:[0,3.5999999999999996,15.6,24,14.399999999999999,0],texture:[4,31,10,13,17],propeller:true},uwing:{section_segments:[0,60,120,180],offset:{x:-20,y:-30,z:10},position:{x:[0,0,0,0,0,0],y:[-65,-70,40,80,110],z:[0,0,0,0,0,0]},width:[0,5,25,25,0],height:[0,10,25,25,20],texture:[4]}},wings:{main:{doubleside:true,offset:{x:20,y:-20,z:5},length:[89,0],width:[130,60],angle:[-12,-12],position:[0,80,80],texture:18,bump:{position:20,size:5}},sides:{doubleside:true,offset:{x:20,y:-20,z:10},length:[84,-3,5,12,-5],width:[25,25,140,140,50,50],angle:[-12,5,5,5,5],position:[40,85,55,55,70,70],texture:[63,4,63,4,17],bump:{position:35,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.96,3.579,3.36,2.703,2.264,1.914,1.655,1.622,1.629,1.67,2.637,2.622,2.666,2.756,2.878,3.003,3.196,3.358,3.496,3.55,2.322,2.273,2.121,2.457,2.443,2.405,2.443,2.457,2.121,2.273,2.322,3.55,3.496,3.358,3.196,3.003,2.878,2.756,2.666,2.622,2.637,1.67,1.629,1.622,1.655,1.914,2.264,2.703,3.36,3.579],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[2.5,4],"rate":6,"type":1,"speed":[160,210],"number":2,"spread":0,"error":0,"recoil":0},{"x":0.528,"y":-3.54,"z":0,"angle":0,"damage":[9,15],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":25},{"x":-0.528,"y":-3.54,"z":0,"angle":0,"damage":[9,15],"rate":1,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":25}],"radius":3.96}')),JSON.stringify(r)})();
var React_Gunner_508 = (function(){var r=Function('return(function(){var model;return model={name:\'React Gunner\',level:5,model:8,size:1.2,specs:{shield:{capacity:[225,275],reload:[5,5]},generator:{capacity:[170,250],reload:[55,75]},ship:{mass:250,speed:[100,115],rotation:[50,70],acceleration:[100,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-50,-200,-180,-150,-70,-55,80,80,85,120,118],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,1,40,40,40,40,40,40,40,30,0],height:[0,1,20,25,30,30,30,30,30,30,0],texture:[17,63,4,3,3,63,63,17,13,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:0,z:20},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-20,-70,30,60],z:[0,6,0,0,0,0,0,0,0,0,0,0]},width:[0,20,40,30],height:[0,4,20,12],texture:[2,9,4]},cannons:{section_segments:6,offset:{x:65,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-120,-120,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10],height:[0,5,10,10,10,10,10],angle:0,propeller:true,texture:[17,17,13,4,4,63],laser:{damage:[5,7],rate:1.7,type:1,speed:[160,170],number:2,error:0,recoil:15}},cannons1:{section_segments:6,offset:{x:65,y:40,z:0},position:{x:[0,0,0,0,0,0,0],y:[-20,-20,-20,0,20,20,20],z:[0,0,0,0,0,0,0]},width:[0,5,6,6,6,6,6],height:[0,5,6,6,6,6,6],angle:180,propeller:true,texture:[17,17,18,4,4,63],laser:{damage:[20,30],rate:0.5,type:1,speed:[100,120],number:2,error:10,recoil:200}},lasers_rings:{section_segments:6,offset:{x:65,y:-120,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,100,0,80,0,60,0,40,0,20,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,0,10,0,10,0,10,0,10,0],height:[0,10,0,10,0,10,0,10,0,10,0],texture:[18],propeller:false}},wings:{main:{doubleside:true,offset:{x:10,y:-30,z:-10},length:[40,0],width:[150,150],angle:[0,0],position:[0,0,0],texture:4,bump:{position:5,size:2}},main1:{doubleside:true,offset:{x:50,y:5,z:0},length:[0,0,0,20],width:[0,0,0,250,40],angle:[0,0,0,30],position:[20,30,0,-30,10],texture:[0,8,13,63],bump:{position:35,size:20}},main2:{doubleside:true,offset:{x:60,y:-30,z:0},length:[40,0],width:[150,60],angle:[0,0],position:[0,60,0],texture:3.4,bump:{position:5,size:1}},main3:{doubleside:true,offset:{x:60,y:-30,z:-0.5},length:[45,0],width:[155,70],angle:[0,0],position:[0,60,0],texture:[18],bump:{position:5,size:1}},main4:{doubleside:true,offset:{x:30,y:-170,z:-0.5},length:[10,0],width:[70,40],angle:[0,0],position:[0,40,0],texture:[16],bump:{position:5,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.28,5.137,4.907,3.795,3.326,3.112,2.709,2.493,2.407,2.364,2.384,2.454,2.523,2.54,2.599,2.707,2.871,2.964,2.362,2.431,2.547,2.683,2.418,2.506,2.443,2.405,2.443,2.506,2.418,2.683,2.547,2.431,2.362,2.964,2.871,2.707,2.599,2.54,2.523,2.454,2.384,2.364,2.407,2.493,2.709,3.112,3.326,3.795,4.907,5.137],"lasers":[{"x":1.56,"y":-2.88,"z":0,"angle":0,"damage":[5,7],"rate":1.7,"type":1,"speed":[160,170],"number":2,"spread":0,"error":0,"recoil":15},{"x":-1.56,"y":-2.88,"z":0,"angle":0,"damage":[5,7],"rate":1.7,"type":1,"speed":[160,170],"number":2,"spread":0,"error":0,"recoil":15},{"x":1.56,"y":1.44,"z":0,"angle":180,"damage":[20,30],"rate":0.5,"type":1,"speed":[100,120],"number":2,"spread":0,"error":10,"recoil":200},{"x":-1.56,"y":1.44,"z":0,"angle":-180,"damage":[20,30],"rate":0.5,"type":1,"speed":[100,120],"number":2,"spread":0,"error":10,"recoil":200}],"radius":5.28}')),JSON.stringify(r)})();
var Bat_Defender_509 = (function(){var r=Function('return(function(){var model;return model={name:\'Bat-Defender\',level:5,model:9,size:1.8,specs:{shield:{capacity:[300,400],reload:[7,10]},generator:{capacity:[70,100],reload:[25,35]},ship:{mass:350,speed:[70,90],rotation:[40,70],acceleration:[90,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-99,-100,-97,-45,-40,-25,-23,15,20,55,50],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,30,17,27,25,25,27,15,5],height:[0,2,2,25,27,27,25,25,27,20,0],texture:[6,5,1,4,6,4,63,6,2,12]},propulsors:{section_segments:8,offset:{x:30,y:-20,z:0},position:{x:[-5,-2,0,0,0,0,0,0,0,0,0],y:[30,55,60,80,95,100,90,95],z:[0,0,0,0,0,0,0,0]},width:[12,14,14,10,12,10,0],height:[5,14,14,10,12,10,0],texture:[2,6,4,11,6,12],propeller:true},lasers:{section_segments:8,offset:{x:70,y:-40,z:10},position:{x:[0,0,0,0,0],y:[25,90,10,50,60],z:[0,0,0,0,0]},width:[5,5,0,10,5],height:[5,1,0,0,5],texture:[63,6],angle:3,laser:{damage:[10,15],rate:2.5,type:1,speed:[150,200],number:1,error:0},propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-45,z:8},position:{x:[0,0,0,0,0,0],y:[-50,-40,-25,0,5],z:[-10,-5,0,0,0]},width:[0,5,10,10,0],height:[0,10,15,16,0],texture:[9]}},wings:{wings:{offset:{x:20,y:0,z:0},length:[35,15,20,15],width:[100,50,50,40,45],angle:[-10,20,0,0],position:[0,0,10,30,0],texture:[11,4],bump:{position:-20,size:15}},side:{doubleside:true,offset:{x:105,y:30,z:-30},length:[30,10,30],width:[40,60,60,40],angle:[90,110,110,90],position:[0,-30,-30,0],texture:[63],bump:{position:0,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.604,3.424,2.813,2.415,2.149,1.968,1.913,1.973,2.073,2.759,3.932,3.974,4.081,4.084,4.04,4.116,4.187,3.661,2.16,2.365,2.719,3.22,3.183,3.028,2.016,1.984,2.016,3.028,3.183,3.22,2.719,2.365,2.16,3.661,4.187,4.116,4.04,4.081,4.084,3.974,3.932,2.759,2.073,1.973,1.913,1.968,2.149,2.415,2.813,3.424],"lasers":[{"x":2.539,"y":-1.08,"z":0.36,"angle":3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.539,"y":-1.08,"z":0.36,"angle":-3,"damage":[10,15],"rate":2.5,"type":1,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.187}')),JSON.stringify(r)})();
var Advanced_Fighter_601 = (function(){var r=Function('return(function(){var model;return model={name:\'Advanced-Fighter\',level:6,model:1,size:2,specs:{shield:{capacity:[200,350],reload:[4,6]},generator:{capacity:[120,200],reload:[50,60]},ship:{mass:400,speed:[70,80],rotation:[30,50],acceleration:[70,100]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-100,-80,-90,-50,0,50,100,90],z:[0,0,0,0,0,0,0,0]},width:[0,5,15,25,40,25,20,0],height:[0,5,10,30,25,20,10,0],propeller:true,texture:[4,4,1,1,10,1,1],laser:{damage:[90,150],rate:1,type:2,speed:[180,240],number:1,recoil:150,error:0}},cockpit:{section_segments:12,offset:{x:0,y:-35,z:33},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,10,30,40],z:[0,0,0,0,0,0,0]},width:[0,12,15,10,0],height:[0,12,18,12,0],propeller:false,texture:[7,9,9,7]},side_propellers:{section_segments:10,offset:{x:30,y:30,z:0},position:{x:[0,0,0,0,0,0],y:[-50,-20,0,20,80,70],z:[0,0,0,0,0,0]},width:[15,20,10,25,10,0],height:[10,15,15,10,5,0],angle:0,propeller:true,texture:[3,63,4,10,3]},cannons:{section_segments:12,offset:{x:70,y:50,z:-30},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,0],height:[0,5,15,15,10,5,0],angle:0,propeller:false,texture:[4,4,10,4,63,4],laser:{damage:[6,12],rate:3,type:1,speed:[100,150],number:1,error:0}},cannons2:{section_segments:12,offset:{x:95,y:50,z:-40},position:{x:[0,0,0,0],y:[-50,-20,40,50],z:[0,0,0,0]},width:[2,5,5,2],height:[2,15,15,2],angle:0,propeller:false,texture:6,laser:{damage:[4,10],rate:3,type:1,speed:[100,150],number:1,error:0}}},wings:{main:{length:[100,30,20],width:[100,50,40,30],angle:[-25,20,25],position:[30,70,50,50],bump:{position:-20,size:20},offset:{x:0,y:0,z:0},texture:[11,11,63],doubleside:true},winglets:{length:[40],width:[40,20,30],angle:[10,-10],position:[-50,-70,-65],bump:{position:0,size:30},texture:63,offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4,3.65,3.454,3.504,3.567,2.938,1.831,1.707,1.659,1.943,1.92,1.882,1.896,3.96,5.654,5.891,6.064,5.681,5.436,5.573,5.122,4.855,4.675,4.626,4.479,4.008,4.479,4.626,4.675,4.855,5.122,5.573,5.436,5.681,6.064,5.891,5.654,3.96,3.88,1.882,1.92,1.943,1.659,1.707,1.831,2.938,3.567,3.504,3.454,3.65],"lasers":[{"x":0,"y":-4,"z":0.4,"angle":0,"damage":[90,150],"rate":1,"type":2,"speed":[180,240],"number":1,"spread":0,"error":0,"recoil":150},{"x":2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.8,"y":0,"z":-1.2,"angle":0,"damage":[6,12],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.8,"y":0,"z":-1.6,"angle":0,"damage":[4,10],"rate":3,"type":1,"speed":[100,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":6.064}')),JSON.stringify(r)})();
var Negator_602 = (function(){var r=Function('return(function(){var model;return model={name:\'Negator\',level:6,model:2,size:1.8,next:[701,702],specs:{shield:{capacity:[250,300],reload:[5,7]},generator:{capacity:[150,250],reload:[37,55]},ship:{mass:225,speed:[100,120],rotation:[70,75],acceleration:[100,115]}},bodies:{main:{section_segments:12,offset:{x:0,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-100,-100,-100,-70,-60,0,5,50,60,85,80],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,25,26,30,35,35,30,20,0],height:[0,5,5,10,12,15,15,15,15,15,0],texture:[17,4,2,3,2,63,10,63,18,16.9],propeller:true},cannon1:{section_segments:8,offset:{x:40,y:0,z:-5},position:{x:[0,0,0,0,0,0,0,0],y:[-25,-30,-20,0,10,35,50,45],z:[0,0,0,0,0,0,0,0]},width:[0,5,7,7,7,7,5,0],height:[0,5,7,7,7,7,5,0],angle:0,laser:{damage:[20,35],rate:3,type:1,speed:[160,180],number:1,angle:0,recoil:25},propeller:true,texture:[16.9,13,8,4,18,4]},cannon2:{section_segments:12,offset:{x:43,y:0,z:-5},position:{x:[-2,-2,0,0,0,0,0,0],y:[-50,-55,-40,0,20,55,65,60],z:[0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,5,0],height:[0,15,20,20,20,20,15,0],angle:0,laser:{damage:[20,35],rate:3,type:1,speed:[160,180],number:1,angle:0,recoil:25},propeller:true,texture:[17,63,3,2,1,13]},cannon3:{section_segments:12,offset:{x:32,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-55,-40,0,20,55,65,60],z:[0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,5,0],height:[0,15,20,20,20,20,15,0],angle:0,laser:{damage:[20,35],rate:3,type:1,speed:[160,180],number:1,angle:2,recoil:25},propeller:true,texture:[17,63,3,2,1,13]},cockpit:{section_segments:12,offset:{x:0,y:-50,z:10},position:{x:[0,0,0,0,0,0,0],y:[-30,-20,13,40,60],z:[0,0,0,0,0]},width:[0,10,15,15,0],height:[0,10,15,15,0],texture:[63,9,10,63]}},wings:{main:{doubleside:true,offset:{x:20,y:0,z:-10},length:[80,10,10,0],width:[70,55,50,0],angle:[10,30,20,10],position:[0,40,50,90,0],texture:[11,63,4,0],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.968,3.976,3.439,2.938,2.345,2.57,2.581,2.46,2.356,2.172,2.05,2.328,2.79,3.554,4.007,4.257,4.62,5.159,5.309,2.833,2.909,2.771,2.604,2.794,2.748,2.705,2.748,2.794,2.604,2.771,2.909,2.833,5.309,5.159,4.62,4.257,4.007,3.554,2.79,2.328,2.05,2.172,2.356,2.46,2.581,2.57,2.345,2.938,3.439,3.976],"lasers":[{"x":1.44,"y":-1.08,"z":-0.18,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":25},{"x":-1.44,"y":-1.08,"z":-0.18,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":25},{"x":1.476,"y":-1.98,"z":-0.18,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":25},{"x":-1.476,"y":-1.98,"z":-0.18,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":0,"error":0,"recoil":25},{"x":1.152,"y":-1.98,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":2,"error":0,"recoil":25},{"x":-1.152,"y":-1.98,"z":0,"angle":0,"damage":[20,35],"rate":3,"type":1,"speed":[160,180],"number":1,"spread":2,"error":0,"recoil":25}],"radius":5.309}')),JSON.stringify(r)})();
var Scorpion_603 = (function(){var r=Function('return(function(){var model;return model={name:\'Scorpion\',level:6,model:3,size:2,specs:{shield:{capacity:[225,400],reload:[5,7]},generator:{capacity:[80,175],reload:[38,50]},ship:{mass:450,speed:[75,90],rotation:[50,70],acceleration:[80,100]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0],y:[-90,-40,-30,0,50,100,120,110],z:[-10,-5,0,0,0,0,20,20]},width:[0,12,20,15,25,10,5],height:[0,10,15,25,15,10,5],texture:[1,4,63,11,11,4],propeller:false},tail:{section_segments:14,offset:{x:0,y:70,z:50},position:{x:[0,0,0,0,0,0],y:[-70,-25,-10,20,40,50],z:[0,0,0,0,-10,-20]},width:[0,5,35,25,5,5],height:[0,5,25,20,5,5],texture:[6,4,63,10,4],laser:{damage:[50,100],rate:0.9,type:2,speed:[170,230],number:1,angle:0,error:0,recoil:100}},cockpit:{section_segments:8,offset:{x:13,y:-44,z:12},position:{x:[-5,0,0,0,0],y:[-15,-5,0,5,15],z:[0,0,0,1,0]},width:[0,8,10,8,0],height:[0,5,5,5,0],texture:[6,5],propeller:false},deco:{section_segments:8,offset:{x:70,y:0,z:-10},position:{x:[0,0,0,10,-5,0,0,0],y:[-115,-80,-100,-60,-30,-10,20,0],z:[0,0,0,0,0,0,0,0]},width:[1,5,10,15,15,20,10,0],height:[1,5,15,20,35,30,10,0],texture:[6,6,1,1,11,2,12],laser:{damage:[2,3],rate:1.8,type:1,speed:[130,170],number:2,angle:5,error:0},propeller:true},wingends:{section_segments:8,offset:{x:105,y:-80,z:-10},position:{x:[0,2,4,2,0],y:[-20,-10,0,10,20],z:[0,0,0,0,0]},width:[2,3,6,3,2],height:[5,15,22,17,5],texture:4,angle:0,propeller:false}},wings:{main:{length:[80,30],width:[40,30,20],angle:[-10,20],position:[30,-50,-80],texture:63,bump:{position:30,size:10},offset:{x:0,y:0,z:0}},font:{length:[80,30],width:[20,15],angle:[-10,20],position:[-20,-40],texture:4,bump:{position:30,size:10},offset:{x:0,y:0,z:0}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.6,2.846,2.313,2.192,5.406,5.318,5.843,5.858,5.621,4.134,3.477,3.601,3.622,3.464,3.351,3.217,1.458,1.391,1.368,1.37,1.635,2.973,3.47,3.911,4.481,4.804,4.481,3.911,3.47,2.973,1.635,1.37,1.368,1.391,1.458,3.217,3.351,3.464,3.622,3.601,3.477,4.134,5.621,5.858,5.843,5.318,5.406,2.192,2.313,2.846],"lasers":[{"x":0,"y":0,"z":2,"angle":0,"damage":[50,100],"rate":0.9,"type":2,"speed":[170,230],"number":1,"spread":0,"error":0,"recoil":100},{"x":2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0},{"x":-2.8,"y":-4.6,"z":-0.4,"angle":0,"damage":[2,3],"rate":1.8,"type":1,"speed":[130,170],"number":2,"spread":5,"error":0,"recoil":0}],"radius":5.858}')),JSON.stringify(r)})();
var Marauder_604 = (function(){var r=Function('return(function(){var model;return model={name:\'Marauder\',level:6,model:4,size:1.4,specs:{shield:{capacity:[210,350],reload:[8,11]},generator:{capacity:[85,160],reload:[25,40]},ship:{mass:250,speed:[70,110],rotation:[60,80],acceleration:[80,120]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-65,-75,-55,-40,0,30,60,80,90,80],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,6,18,23,30,25,25,30,35,0],height:[0,5,10,12,12,20,15,15,15,0],texture:[6,4,1,10,1,1,11,12,17],propeller:true,laser:{damage:[10,16],rate:10,type:1,speed:[170,200],recoil:0,number:1,error:0}},cockpit:{section_segments:[40,90,180,270,320],offset:{x:0,y:-85,z:22},position:{x:[0,0,0,0,0,0],y:[15,35,60,95,125],z:[-1,-2,-1,-1,3]},width:[5,12,14,15,5],height:[0,12,15,15,0],texture:[8.98,8.98,4]},outriggers:{section_segments:10,offset:{x:25,y:0,z:-10},position:{x:[-5,-5,8,-5,0,0,0,0,0,0],y:[-100,-125,-45,0,30,40,70,80,100,90],z:[10,10,5,5,0,0,0,0,0,0,0,0]},width:[0,6,10,10,15,15,15,15,10,0],height:[0,10,20,25,25,25,25,25,20,0],texture:[13,4,4,63,4,18,4,13,17],laser:{damage:[4,8],rate:3,type:1,speed:[110,140],recoil:0,number:1,error:0},propeller:true},intake:{section_segments:12,offset:{x:25,y:-5,z:10},position:{x:[0,0,5,0,-3,0,0,0,0,0],y:[-10,-30,-5,35,60,70,85,100,85],z:[0,-6,0,0,0,0,0,0,0,0]},width:[0,5,10,10,15,10,10,5,0],height:[0,15,15,20,20,15,15,5,0],texture:[6,4,63,4,63,18,4,17]}},wings:{main:{length:[20,70,35],width:[50,55,40,20],angle:[0,-20,0],position:[20,20,70,25],texture:[3,18,63],doubleside:true,bump:{position:30,size:15},offset:{x:0,y:0,z:13}},spoiler:{length:[20,45,0,5],width:[40,40,20,30,0],angle:[0,20,90,90],position:[60,60,80,80,90],texture:[10,11,63],doubleside:true,bump:{position:30,size:18},offset:{x:0,y:0,z:30}},font:{length:[37],width:[40,15],angle:[-10],position:[0,-45],texture:[63],doubleside:true,bump:{position:30,size:10},offset:{x:35,y:-20,z:10}},shields:{doubleside:true,offset:{x:12,y:60,z:-15},length:[0,15,45,20],width:[30,30,65,65,30,30],angle:[30,30,90,150],position:[10,10,0,0,10],texture:[4],bump:{position:0,size:4}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[2.665,3.563,3.573,2.856,2.359,2.03,2.85,2.741,2.228,1.71,1.404,1.199,1.11,3.408,3.491,3.521,3.44,3.385,3.439,3.481,3.181,2.932,2.962,2.944,2.85,2.244,2.85,2.944,2.962,2.932,3.181,3.481,3.439,3.385,3.44,3.521,3.491,3.408,1.11,1.199,1.404,1.71,2.228,2.741,2.85,2.03,2.359,2.856,3.573,3.563],"lasers":[{"x":0,"y":-2.66,"z":0.28,"angle":0,"damage":[10,16],"rate":10,"type":1,"speed":[170,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.56,"y":-3.5,"z":-0.28,"angle":0,"damage":[4,8],"rate":3,"type":1,"speed":[110,140],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.573}')),JSON.stringify(r)})();
var Condor_605 = (function(){var r=Function('return(function(){var model;return model={name:\'Condor\',level:6,model:5,size:1.5,specs:{shield:{capacity:[225,400],reload:[7,10]},generator:{capacity:[70,130],reload:[30,48]},ship:{mass:200,speed:[75,105],rotation:[50,70],acceleration:[80,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-110,-95,-100,-100,-45,-40,-25,-23,15,20,55,80,100,90],z:[-10,-9,-8,-7,-6,-4,-2,0,0,0,0,0,0,0]},width:[0,2,5,10,25,27,27,25,25,27,40,35,30,0],height:[0,2,5,10,25,27,27,25,25,27,20,15,10,0],texture:[6,2,3,10,5,63,5,2,5,3,63,11,4],propeller:true,laser:{damage:[30,60],rate:2,type:2,speed:[150,200],number:1,angle:0,error:0}},cannons:{section_segments:12,offset:{x:75,y:30,z:-25},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,0],height:[0,5,15,15,10,5,0],angle:0,laser:{damage:[3,6],rate:4,type:1,speed:[100,130],number:1,angle:0,error:0},propeller:false,texture:[6,4,10,4,63,4]},cockpit:{section_segments:12,offset:{x:0,y:-60,z:8},position:{x:[0,0,0,0],y:[-25,-8,20,65],z:[0,0,0,0]},width:[0,10,10,0],height:[0,12,15,5],texture:[9]}},wings:{back:{offset:{x:0,y:25,z:10},length:[90,40],width:[70,50,30],angle:[-30,40],position:[0,20,0],texture:[11,63],doubleside:true,bump:{position:10,size:20}},front:{offset:{x:0,y:55,z:10},length:[90,40],width:[70,50,30],angle:[-30,-40],position:[-60,-20,-20],texture:[11,63],doubleside:true,bump:{position:10,size:10}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.3,3.015,2.45,1.959,1.658,1.477,1.268,1.11,1.148,1.237,2.34,2.448,2.489,3.283,3.363,3.501,3.586,3.333,3.496,3.502,3.154,2.52,3.016,3.132,3.054,3.006,3.054,3.132,3.016,2.52,3.154,3.502,3.496,3.333,3.586,3.501,3.363,3.283,2.49,2.448,2.34,1.237,1.148,1.11,1.268,1.477,1.658,1.959,2.45,3.015],"lasers":[{"x":0,"y":-3.3,"z":0,"angle":0,"damage":[30,60],"rate":2,"type":2,"speed":[150,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0},{"x":-2.25,"y":-0.6,"z":-0.75,"angle":0,"damage":[3,6],"rate":4,"type":1,"speed":[100,130],"number":1,"spread":0,"error":0,"recoil":0}],"radius":3.586}')),JSON.stringify(r)})();
var A_Speedster_606 = (function(){var r=Function('return(function(){var model;return model={name:\'A-Speedster\',level:6,model:6,size:1.5,specs:{shield:{capacity:[200,300],reload:[6,8]},generator:{capacity:[80,140],reload:[30,45]},ship:{mass:175,speed:[90,115],rotation:[60,80],acceleration:[90,140]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0],y:[-100,-95,0,0,70,65],z:[0,0,0,0,0,0]},width:[0,10,40,20,20,0],height:[0,5,30,30,15,0],texture:[6,11,5,63,12],propeller:true,laser:{damage:[38,84],rate:1,type:2,speed:[175,230],recoil:50,number:1,error:0}},cockpit:{section_segments:8,offset:{x:0,y:-60,z:15},position:{x:[0,0,0,0,0,0,0],y:[-20,0,20,40,50],z:[-7,-5,0,0,0]},width:[0,10,10,10,0],height:[0,10,15,12,0],texture:[9]},side_propulsors:{section_segments:10,offset:{x:50,y:25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,80,70],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,15,20,20,20,15,15,20,10,0],height:[0,15,20,20,20,15,15,20,10,0],propeller:true,texture:[4,4,2,2,5,63,5,4,12]},cannons:{section_segments:12,offset:{x:30,y:40,z:45},position:{x:[0,0,0,0,0,0,0],y:[-50,-45,-20,0,20,30,40],z:[0,0,0,0,0,0,0]},width:[0,5,7,10,3,5,0],height:[0,5,7,8,3,5,0],angle:-10,laser:{damage:[8,12],rate:2,type:1,speed:[100,130],number:1,angle:-10,error:0},propeller:false,texture:[6,4,10,4,63,4]}},wings:{join:{offset:{x:0,y:0,z:10},length:[40,0],width:[10,20],angle:[-1],position:[0,30],texture:[63],bump:{position:0,size:25}},winglets:{offset:{x:0,y:-40,z:10},doubleside:true,length:[45,10],width:[5,20,30],angle:[50,-10],position:[90,80,50],texture:[4],bump:{position:10,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}')),JSON.stringify(r)})();
var Rock_Tower_607 = (function(){var r=Function('return(function(){var model;return model={name:\'Rock-Tower\',level:6,model:7,size:2.1,specs:{shield:{capacity:[300,500],reload:[8,11]},generator:{capacity:[75,115],reload:[35,45]},ship:{mass:450,speed:[75,90],rotation:[50,70],acceleration:[80,90]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-20,-25,40,85,70],z:[-10,-8,-5,0,0,0,0,0,0]},width:[0,40,45,10,12,30,30,20,0],height:[0,10,12,8,12,10,25,20,0],texture:[4,63,4,4,4,11,10,12],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:30,z:20},position:{x:[0,0,0,0,0,0,0,0],y:[-30,-20,0,10,20,30],z:[0,0,0,0,0,0]},width:[0,10,15,15,10,5],height:[0,10,15,15,10,5],texture:9,propeller:false},dimeds_banhammer:{section_segments:6,offset:{x:25,y:-70,z:-10},position:{x:[0,0,0,0,0,0],y:[-20,-10,-20,0,10,12],z:[0,0,0,0,0,0]},width:[0,0,5,7,6,0],height:[0,0,5,7,6,0],texture:[6,6,6,10,12],angle:0,laser:{damage:[4,6],rate:8,type:1,speed:[150,230],number:1,error:5}},propulsors:{section_segments:8,offset:{x:30,y:50,z:0},position:{x:[0,0,5,5,0,0,0],y:[-45,-50,-20,0,20,50,40],z:[0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,0],height:[0,15,20,25,20,10,0],texture:[11,2,3,4,5,12],angle:0,propeller:true}},wings:{main:{length:[55,15],width:[60,40,30],angle:[-10,20],position:[30,40,30],texture:63,doubleside:true,offset:{x:0,y:20,z:-5},bump:{position:30,size:20}},finalizer_fins:{length:[20],width:[20,10],angle:[-70],position:[-42,-30],texture:63,doubleside:true,offset:{x:35,y:-35,z:0},bump:{position:0,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[3.78,3.758,3.974,3.976,3.946,3.508,1.532,1.64,1.556,1.426,1.347,1.298,1.269,1.764,1.894,2.075,3.269,3.539,3.933,3.989,4.058,4.127,4.524,4.416,3.634,3.577,3.634,4.416,4.524,4.127,4.058,3.989,3.933,3.539,3.269,2.075,1.894,1.764,1.68,1.298,1.347,1.426,1.556,1.64,1.532,3.508,3.946,3.976,3.974,3.758],"lasers":[{"x":1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.05,"y":-3.78,"z":-0.42,"angle":0,"damage":[4,6],"rate":8,"type":1,"speed":[150,230],"number":1,"spread":0,"error":5,"recoil":0}],"radius":4.524}')),JSON.stringify(r)})();
var Barracuda_608 = (function(){var r=Function('return(function(){var model;return model={name:\'Barracuda\',level:6,model:8,size:2.4,specs:{shield:{capacity:[300,400],reload:[8,12]},generator:{capacity:[100,150],reload:[8,14]},ship:{mass:675,speed:[70,90],rotation:[30,45],acceleration:[130,150],dash:{rate:2,burst_speed:[160,200],speed:[120,150],acceleration:[70,70],initial_energy:[50,75],energy:[20,30]}}},bodies:{body:{section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-100,-60,-10,0,20,50,80,100,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,20,25,35,40,40,35,30,0],height:[0,5,40,45,40,60,70,60,30,0],texture:[10,2,10,2,3,13,13,63,12],propeller:true},front:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0],y:[-90,-85,-70,-60,-20],z:[0,0,0,0,0]},width:[0,40,45,10,12],height:[0,15,18,8,12],texture:[8,63,4,4,4],propeller:true},propeller:{section_segments:10,offset:{x:40,y:40,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,20,15,0],height:[0,10,15,15,15,10,10,18,8,0],texture:[4,4,10,3,3,63,4,63,12],propeller:true},sides:{section_segments:6,angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-80,-75,-60,-50,-10,10,50,60,75,80],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,30,35,10,12,12,10,35,30,0],height:[0,10,12,8,12,12,8,12,10,0],texture:[4,63,4,4,4,4,4,63,4]},cockpit:{section_segments:12,offset:{x:0,y:-20,z:30},position:{x:[0,0,0,0,0,0,0,0],y:[-50,-20,0,10,30,50],z:[0,0,0,0,0,0]},width:[0,12,18,20,15,0],height:[0,20,22,24,20,0],texture:[9]}},wings:{top:{doubleside:true,offset:{x:0,y:20,z:15},length:[70],width:[70,30],angle:[90],position:[0,30],texture:[63],bump:{position:10,size:30}},top2:{doubleside:true,offset:{x:0,y:51,z:5},length:[70],width:[50,20],angle:[90],position:[0,60],texture:[63],bump:{position:10,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.28,5.25,5.332,5.393,4.944,1.997,1.745,1.556,1.435,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,3.205,3.571,3.9,5.132,5.888,5.835,5.551,4.886,5.808,4.886,5.551,5.835,5.888,5.132,3.9,3.571,3.205,3.587,3.81,3.779,3.838,3.84,3.779,3.81,3.587,1.435,1.556,1.745,1.997,4.944,5.393,5.332,5.25],"lasers":[],"radius":5.888}')),JSON.stringify(r)})();
var O_Defender_609 = (function(){var r=Function('return(function(){var model;return model={name:\'O-Defender\',level:6,model:9,size:2.2,specs:{shield:{capacity:[400,550],reload:[10,13]},generator:{capacity:[70,100],reload:[25,40]},ship:{mass:500,speed:[70,80],rotation:[30,40],acceleration:[60,80]}},bodies:{main:{section_segments:8,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0],y:[-90,-88,0,90,91],z:[0,0,0,0,0]},width:[5,6,25,10,20],height:[2,10,40,20,20],texture:[63,1,10],propeller:true,laser:{damage:[35,60],rate:2,type:2,speed:[130,180],number:1,angle:0,error:0}},side:{section_segments:10,offset:{x:50,y:0,z:0},position:{x:[-40,-5,15,25,20,0,-50],y:[-100,-70,-40,-10,20,50,90],z:[0,0,0,0,0,0,0]},width:[5,20,20,20,20,20,5],height:[15,25,30,30,30,25,0],texture:[0,1,2,3,4,63]},cockpit:{section_segments:8,offset:{x:0,y:-60,z:18},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,5,10,10,0],height:[0,5,10,12,0],texture:[9]},top_propulsor:{section_segments:15,offset:{x:0,y:0,z:10},position:{x:[0,0,0,0],y:[80,95,100,90],z:[0,0,0,0]},width:[5,20,10,0],height:[5,15,5,0],propeller:true,texture:[1,63,12]},bottom_propulsor:{section_segments:15,offset:{x:0,y:0,z:-10},position:{x:[0,0,0,0],y:[80,95,100,90],z:[0,0,0,0]},width:[5,20,10,0],height:[5,15,5,0],propeller:true,texture:[1,63,12]}},wings:{join:{offset:{x:0,y:20,z:0},length:[80,0],width:[130,50],angle:[-1],position:[0,-30],texture:[8],bump:{position:-20,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.409,4.448,4.372,4.204,4.119,4.136,4.174,4.107,4.066,4.094,4.073,4.141,4.16,4.062,4.015,3.966,3.83,3.76,3.742,3.591,3.502,3.494,3.575,4.291,4.422,4.409,4.422,4.291,3.575,3.494,3.502,3.591,3.742,3.76,3.83,3.966,4.015,4.062,4.16,4.141,4.073,4.094,4.066,4.107,4.174,4.136,4.119,4.204,4.372,4.448],"lasers":[{"x":0,"y":-3.96,"z":0,"angle":0,"damage":[35,60],"rate":2,"type":2,"speed":[130,180],"number":1,"spread":0,"error":0,"recoil":0}],"radius":4.448}')),JSON.stringify(r)})();
var Regatura_610 = (function(){var r=Function('return(function(){var model;return model={name:\'Regatura\',level:6,model:10,size:1.5,specs:{shield:{capacity:[225,275],reload:[5,8]},generator:{capacity:[125,170],reload:[50,70]},ship:{mass:225,speed:[65,80],rotation:[50,65],acceleration:[100,120]}},bodies:{main:{section_segments:12,offset:{x:0,y:20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-50,-50,-100,-90,-50,-20,5,50,60,80,70],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,13,15,20,25,30,30,25,15,0],height:[0,5,5,1,5,5,5,5,5,5,0],texture:[17,4,63,3,2,17,4,11,63,17],propeller:false},reactor:{section_segments:12,offset:{x:0,y:80,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-70,-30,-30,-25,-15,-5,5,10,15,20,20],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[25,15,15,15,25,25,25,25,15,10],height:[12,12,10,10,10,10,10,10,10,10,0],texture:[18,18,13,13,4,4,4,4,63,17],propeller:true},cockpit:{section_segments:12,offset:{x:0,y:-46,z:0},position:{x:[0,0,0,0],y:[-20,-15,15,20],z:[5,0,0,0]},width:[0,70,70,0],height:[0,12,12,5],texture:[4,9,4],angle:90},shield:{section_segments:12,offset:{x:22,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-5,-6,-7,-9,-10,-11,2,5,10,15,15],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,100,100,100,100,100,100,100,100,70,0],height:[0,5,5,1,5,15,15,15,15,5,0],texture:[17,4,13,13,4,4,17,13,63,17],propeller:false,angle:90},cannon:{section_segments:8,offset:{x:60,y:-50,z:0},position:{x:[0,0,0,0,0,0,0,-5,-7,-7,-10,0,0],y:[-80,-80,-70,-50,20,40,40,50,90,100,100],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,10,15,15,15,15,15,15,10,0],texture:[17,13,63,4,18,63,4,63,13,17],propeller:true,laser:{damage:[10,15],rate:7,type:1,speed:[170,195],number:1,error:5}},cannon_join:{section_segments:12,offset:{x:45,y:-30,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0],y:[-20,-15,-10,-5,2,5,2,7,10,20,20],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,70,70,70,70,70,70,70,70,0],height:[0,5,5,5,5,5,5,5,5,5,0],texture:[17,13,4,63,4,4,4,4,63,17],propeller:false,vertical:false,angle:90},cannon_detail:{section_segments:12,offset:{x:61,y:-50,z:0},position:{x:[0,0,0,0,0,0,0,-5,-7,-7,-10,0,0],y:[-75,-75,-70,-50,20,40,40,50,90,95,95],z:[0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,15,15,15,15,15,15,10,0],height:[0,5,5,5,5,5,5,5,5,5,0],texture:[17,63,63,17,13,17,13,17,63,17],propeller:false},cannon_detail1:{section_segments:12,offset:{x:60,y:-50,z:10},position:{x:[0,0,0,0,0,0,0,-5,-7,-7,-10,0,0],y:[-75,-75,-70,-50,20,40,40,50,90,95,95],z:[-7,-5,-5,0,0,0,0,0,0,0,0,0,0]},width:[0,2,2,5,5,5,5,5,5,5,0],height:[0,2,5,5,5,5,5,5,5,5,0],texture:[17,63,63,17,13,17,13,17,63,17],propeller:false}},wings:{winglets:{doubleside:true,offset:{x:40,y:-5,z:5},length:[50,0],width:[30,15],angle:[-20,-20],position:[0,50,50],texture:63,bump:{position:20,size:1}},winglets1:{doubleside:true,offset:{x:40,y:-5,z:5},length:[50,0],width:[30,15],angle:[20,20],position:[0,50,50],texture:63,bump:{position:20,size:1}},winglets2:{doubleside:true,offset:{x:10,y:75,z:5},length:[20,0],width:[20,15],angle:[50,50],position:[0,25,25],texture:63,bump:{position:20,size:1}},fron_cockpit:{doubleside:true,offset:{x:0.01,y:-130,z:0},length:[5,27,0],width:[90,80,20],angle:[0,0],position:[0,0,10,0],texture:[17,4],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.25,4.87,4.216,4.31,4.36,4.053,3.571,3.126,2.818,2.593,2.451,2.353,2.29,2.133,2.197,2.685,2.976,3.048,2.413,2.191,1.934,2.271,2.483,3.297,3.09,3.006,3.09,3.297,2.483,2.271,1.934,2.191,2.413,3.048,2.976,2.685,2.197,2.133,2.29,2.353,2.451,2.593,2.818,3.126,3.571,4.053,4.36,4.31,4.216,4.87],"lasers":[{"x":1.8,"y":-3.9,"z":0,"angle":0,"damage":[10,15],"rate":7,"type":1,"speed":[170,195],"number":1,"spread":0,"error":5,"recoil":0},{"x":-1.8,"y":-3.9,"z":0,"angle":0,"damage":[10,15],"rate":7,"type":1,"speed":[170,195],"number":1,"spread":0,"error":5,"recoil":0}],"radius":5.25}')),JSON.stringify(r)})();
var Odyssey_701 = (function(){var r=Function('return(function(){var model;return model={name:\'Odyssey\',level:7,model:1,size:4,specs:{shield:{capacity:[750,750],reload:[15,15]},generator:{capacity:[330,330],reload:[150,150]},ship:{mass:700,speed:[45,45],rotation:[20,20],acceleration:[150,150]}},tori:{circle:{segments:20,radius:95,section_segments:12,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],y:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],z:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},width:[20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20],height:[8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],texture:[63,63,4,10,4,4,10,4,63,63,63,63,3,10,3,3,10,3,63]}},bodies:{main:{section_segments:20,offset:{x:0,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-130,-130,-85,-70,-60,-20,-25,40,40,100,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,40,45,10,12,30,30,40,30,0],height:[0,20,25,25,10,12,25,25,20,10,0],texture:[4,15,63,4,4,4,11,10,4,12]},laser1:{section_segments:12,offset:{x:110,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-25,-30,-20,0,20,30,20],z:[0,0,0,0,0,0,0]},width:[0,3,5,5,5,3,0],height:[0,3,5,5,5,3,0],texture:[12,6,63,63,6,12],laser:{damage:[20,20],rate:3,type:1,speed:[200,200],number:1,error:0}},laser2:{section_segments:12,offset:{x:110,y:0,z:0},position:{x:[0,0,0,0,0,0,0],y:[-25,-30,-20,0,20,30,20],z:[0,0,0,0,0,0,0]},width:[0,3,5,5,5,3,0],height:[0,3,5,5,5,3,0],texture:[12,6,63,63,6,12],angle:180,laser:{damage:[20,20],rate:3,type:1,speed:[200,200],number:1,error:0}},cannon:{section_segments:6,offset:{x:0,y:-115,z:0},position:{x:[0,0,0,0],y:[-25,-30,-20,0],z:[0,0,0,0]},width:[0,15,9,7],height:[0,10,9,7],texture:[6,6,6,10],laser:{damage:[250,250],rate:1,type:1,speed:[100,100],number:1,error:0,recoil:300}},cockpit:{section_segments:10,offset:{x:0,y:0,z:15},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,0,10,30],z:[0,0,0,0,0]},width:[0,12,15,10,0],height:[0,20,22,18,0],texture:[9]},bumpers:{section_segments:8,offset:{x:85,y:20,z:0},position:{x:[-5,0,5,10,5,0,-5],y:[-85,-80,-40,0,20,50,55],z:[0,0,0,0,0,0,0]},width:[0,10,15,15,15,5,0],height:[0,20,35,35,25,15,0],texture:[11,2,63,4,3],angle:0},toppropulsors:{section_segments:10,offset:{x:17,y:50,z:15},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,50,40],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,10,0],texture:[3,4,10,3,3,63,4],propeller:true},bottompropulsors:{section_segments:10,offset:{x:17,y:50,z:-15},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-20,-15,0,10,20,25,30,40,50,40],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,10,0],texture:[3,4,10,3,3,63,4],propeller:true}},wings:{topjoin:{offset:{x:0,y:-3,z:0},doubleside:true,length:[100],width:[20,20],angle:[25],position:[0,0,0,50],texture:[1],bump:{position:10,size:30}},bottomjoin:{offset:{x:0,y:-3,z:0},doubleside:true,length:[100],width:[20,20],angle:[-25],position:[0,0,0,50],texture:[1],bump:{position:-10,size:30}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[11.623,11.646,10.525,8.979,7.873,3.633,3.688,8.551,8.989,8.821,9.353,9.348,9.272,9.272,9.348,9.353,8.977,9.064,9.121,4.686,5.299,6.216,7.781,8.276,8.144,7.775,8.144,8.276,7.781,6.216,5.299,4.686,9.121,9.064,8.977,9.353,9.348,9.272,9.272,9.348,9.353,8.821,8.989,8.551,3.688,3.633,7.873,8.979,10.525,11.646],"lasers":[{"x":8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":-2.4,"z":0,"angle":0,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":8.8,"y":2.4,"z":0,"angle":180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-8.8,"y":2.4,"z":0,"angle":-180,"damage":[20,20],"rate":3,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":0,"y":-11.6,"z":0,"angle":0,"damage":[250,250],"rate":1,"type":1,"speed":[100,100],"number":1,"spread":0,"error":0,"recoil":300}],"radius":11.646}')),JSON.stringify(r)})();
var Pseudo_Vanguard_702 = (function(){var r=Function('return(function(){var model;return model={name:\'Pseudo-Vanguard\',level:7,model:2,size:1.5,specs:{shield:{capacity:[400,400],reload:[4,4]},generator:{capacity:[225,225],reload:[50,50]},ship:{mass:350,speed:[50,50],rotation:[40,40],acceleration:[80,80]}},bodies:{main:{section_segments:15,offset:{x:0,y:50,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,-10,20,30,50,80,110,95],z:[0,0,0,0,0,0,0,0]},width:[0,65,75,75,75,60,40,0],height:[0,40,42,42,40,34,23,0],texture:[63,4,63,4,3,4,17],propeller:true},big_main:{section_segments:10,offset:{x:21,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,0,20,30,50,80,95,95],z:[0,0,0,0,0,0,0,0]},width:[0,20,24,35,37,34,23,0],height:[0,22,24,35,37,34,23,0],texture:[18,8,63,18,3,2,3]},cannons:{section_segments:8,offset:{x:20,y:-180,z:8},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,10,20,60,60,85,100,180],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,10,10,5,5,10,10],height:[0,5,5,10,10,5,5,10,10],texture:[17,13,63,4,4,63,8,13],propeller:false,laser:{damage:[50,50],rate:2,type:2,speed:[150,150],recoil:150,number:1,error:0}},cannons1:{section_segments:8,offset:{x:25,y:-180,z:-8},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[5,0,10,20,60,60,85,100,180],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,5,5,10,10],height:[0,5,5,10,10,5,5,10,10],texture:[17,13,63,4,4,63,8,13],propeller:false,laser:{damage:[50,50],rate:2,type:2,speed:[150,150],recoil:150,number:1,error:0}},cockpit:{section_segments:12,offset:{x:0,y:100,z:37},position:{x:[0,0,0,0],y:[-25,-20,20,25],z:[5,0,0,-7]},width:[0,35,35,0],height:[0,10,10,5],texture:[4,9,4],angle:90},shield:{section_segments:12,offset:{x:45,y:80,z:0},position:{x:[0,0,0,0,0,0,0,0],y:[0,-30,-20,15,25,30,35,35],z:[0,0,0,0,0,0,0,0]},width:[0,60,65,65,65,65,50,0],height:[0,2,20,20,20,20,10,0],texture:[4,4,18,16,4,2,13],propeller:0,angle:90},wing:{section_segments:12,offset:{x:80,y:80,z:-6},position:{x:[0,0,0,-20,-40,-70,-130,0],y:[0,-30,-20,15,60,80,120,0],z:[0,0,0,0,0,0,0,0]},width:[0,50,50,55,55,55,40,0],height:[0,2,15,15,15,15,5,0],texture:[4,4,4,4,63,2,13],propeller:0,angle:90},wing_detail:{section_segments:8,offset:{x:80,y:80,z:0},position:{x:[0,0,0,-20,-40,-70,-120,0],y:[0,-30,-20,15,60,80,110,0],z:[0,0,0,0,0,0,0,0]},width:[0,20,20,20,20,20,10,0],height:[0,2,15,15,15,15,5,0],texture:[63],propeller:0,angle:90},reactors:{section_segments:8,offset:{x:70,y:50,z:-30},position:{x:[0,0,0,0,0,0,0,0],y:[-65,-70,-65,-50,100,120,140,0],z:[0,0,0,0,0,0,0,0]},width:[0,10,15,20,20,20,10,0],height:[0,10,15,20,20,20,10,0],texture:[17,13,18,63,13,4,17],propeller:true,angle:0}},wings:{winglets:{doubleside:true,offset:{x:25,y:-152,z:-5},length:[10,15,0],width:[25,30,20],angle:[0,-10,-10],position:[0,0,20,20],texture:[8,63],bump:{position:20,size:10}},winglets1:{doubleside:true,offset:{x:20,y:-142,z:11},length:[10,15,0],width:[25,30,20],angle:[0,-10,-10],position:[0,0,20,20],texture:[8,63],bump:{position:20,size:10}},wing_detail:{doubleside:true,offset:{x:80,y:30,z:-30},length:[20,30,0],width:[60,60,30],angle:[-20,-20,-10],position:[0,20,50,30],texture:[63,63],bump:{position:20,size:5}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.812,5.474,5.305,4.599,2.445,1.941,1.631,1.439,1.287,1.198,2.413,2.611,2.699,2.743,3.182,3.695,5.215,6.613,8.231,9.412,9.605,5.976,6.185,5.993,4.886,4.809,4.886,5.993,6.185,5.976,9.605,9.412,8.231,6.613,5.215,3.695,3.182,2.743,2.7,2.611,2.413,1.198,1.287,1.439,1.631,1.941,2.445,4.599,5.305,5.474],"lasers":[{"x":0.6,"y":-5.4,"z":0.24,"angle":0,"damage":[50,50],"rate":2,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":150},{"x":-0.6,"y":-5.4,"z":0.24,"angle":0,"damage":[50,50],"rate":2,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":150},{"x":0.75,"y":-5.4,"z":-0.24,"angle":0,"damage":[50,50],"rate":2,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":150},{"x":-0.75,"y":-5.4,"z":-0.24,"angle":0,"damage":[50,50],"rate":2,"type":2,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":150}],"radius":9.605}')),JSON.stringify(r)})();
var Shadow_X_3_703 = (function(){var r=Function('return(function(){var model;return model={name:\'Shadow X-3\',level:7,model:3,size:3,specs:{shield:{capacity:[400,400],reload:[10,10]},generator:{capacity:[250,250],reload:[45,45]},ship:{mass:350,speed:[140,140],rotation:[35,35],acceleration:[35,35]}},bodies:{main:{section_segments:20,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-130,-128,-115,-70,-40,0,40,70,80,90,100],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,20,20,20,20,30,30,30,20,0],height:[0,5,10,30,20,10,10,15,15,15,10,10],texture:[12,3,15,4,63,63,4,4,5],laser:{damage:[225,225],rate:1,type:1,speed:[200,200],number:1,error:0,recoil:500}},air:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[0,-80,-30,-10,10,30,50],z:[0,0,0,0,0,0,0]},width:[0,25,35,30,30,32,20],height:[0,15,10,10,10,10,10,15,15,15,10,10],texture:[4,3,2,2,2,3]},back:{section_segments:10,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0],y:[90,95,100,105,90],z:[0,0,0,0,0]},width:[10,15,18,22,2],height:[3,5,7,8,2],texture:[63],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-30,z:18},position:{x:[0,0,0,0,0,0,0,0],y:[-65,-25,0,25,60,90,100],z:[0,0,0,0,-10,-8,-10]},width:[0,10,15,10,20,15,10],height:[0,15,20,10,10,10,10],texture:[9,9,9,10,63,3]},laser:{section_segments:10,offset:{x:90,y:10,z:-19},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-25,0,10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,10,0],height:[0,10,15,15,15,10,10,15,5,0],texture:[6,4,10,3,4,3,2],propeller:true,laser:{damage:[4,4],rate:3,type:1,speed:[150,150],number:1}},laser2:{section_segments:10,offset:{x:50,y:-20,z:-20},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-30,-25,0,10,20,25,30,40,70,60],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,10,15,15,15,10,10,15,12,0],height:[0,10,15,15,15,10,10,15,5,0],texture:[6,4,10,3,4,3,2],propeller:true,laser:{damage:[4,4],rate:4,type:1,speed:[150,150],number:1}}},wings:{wings:{offset:{x:10,y:0,z:0},length:[35,15,30,25],width:[100,50,60,30,45],angle:[-10,20,0,0],position:[0,0,10,30,-10],texture:[4],bump:{position:-20,size:15}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[7.8,7.281,5.239,4.765,3.913,3.347,4.285,4.477,4.43,4.217,7.087,7.031,6.866,6.852,6.779,6.51,7.063,7.453,7.661,7.011,3.892,3.21,5.711,6.424,6.413,6.312,6.413,6.424,5.711,3.21,3.892,7.011,7.661,7.453,7.063,6.51,6.779,6.852,6.866,7.031,7.087,4.217,4.43,4.477,4.285,3.347,3.913,4.765,5.239,7.281],"lasers":[{"x":0,"y":-7.8,"z":0,"angle":0,"damage":[225,225],"rate":1,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":500},{"x":5.4,"y":-1.2,"z":-1.14,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.4,"y":-1.2,"z":-1.14,"angle":0,"damage":[4,4],"rate":3,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":3,"y":-3,"z":-1.2,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3,"y":-3,"z":-1.2,"angle":0,"damage":[4,4],"rate":4,"type":1,"speed":[150,150],"number":1,"spread":0,"error":0,"recoil":0}],"radius":7.8}')),JSON.stringify(r)})();
var Bastion_704 = (function(){var r=Function('return(function(){var model;return model={name:\'Bastion\',level:7,model:4,size:4,specs:{shield:{capacity:[400,400],reload:[20,20]},generator:{capacity:[500,500],reload:[100,100]},ship:{mass:350,speed:[80,80],rotation:[15,15],acceleration:[125,125]}},bodies:{main:{section_segments:8,offset:{x:0,y:50,z:10},position:{x:[0,0,0,0,0,0,0],y:[-40,-50,-20,0,20,40,25],z:[0,0,0,0,0,0,0]},width:[0,5,22,18,16,15,0],height:[0,2,12,16,16,15,0],texture:[10,1,1,10,8,17],propeller:true},thrusters:{section_segments:8,offset:{x:40,y:43,z:-24},position:{x:[0,0,0,0,0,0],y:[-25,-20,0,20,40,30],z:[0,0,0,0,0,0]},width:[0,8,12,8,8,0],height:[0,12,12,8,8,0],texture:[63,2,2,2,17],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:30,z:20},position:{x:[0,0,0,0,0,0,0],y:[-15,-10,0,11,35],z:[-5,-3,-1,0,0]},width:[0,5,10,10,0],height:[0,3,5,7,0],texture:[9]},cannon1:{section_segments:4,offset:{x:10,y:-80,z:1},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,2,4,7,3],height:[0,1,3,6,0],texture:[17,4],laser:{damage:[6,6],rate:5,type:1,speed:[200,200],number:1}},cannon2:{section_segments:4,offset:{x:42,y:-129,z:8},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,2,4,7,3],height:[0,1,3,6,0],texture:[17,4],angle:3,laser:{damage:[8,8],rate:4,type:1,speed:[180,180],number:1}},cannon3:{section_segments:4,offset:{x:75,y:-105,z:-8},position:{x:[0,0,0,0,0,0,0],y:[-10,0,20,30,40],z:[0,0,0,0,0]},width:[0,2,4,7,3],height:[0,1,3,6,0],texture:[17,4],angle:5,laser:{damage:[20,20],rate:1.5,type:1,speed:[160,160],number:1}}},wings:{main1:{doubleside:true,offset:{x:9,y:15,z:0},length:[0,15,0,7],width:[0,160,70,30,30],angle:[0,20,0,-10],position:[30,-20,30,30,30],texture:[13,63,13,8],bump:{position:35,size:5}},main2:{doubleside:true,offset:{x:30,y:15,z:0},length:[0,15,0,20],width:[0,80,90,200,30],angle:[30,30,30,30],position:[30,30,10,-45,30],texture:[13,3,13,4],bump:{position:35,size:7}},main3:{doubleside:true,offset:{x:0,y:25,z:-7},length:[45,35,0,20],width:[40,40,40,200,40],angle:[-20,20,-20,-5],position:[20,30,0,-30,10],texture:[0,8,13,63],bump:{position:35,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[4.056,7.244,11.603,11.152,9.19,10.943,9.896,9.163,8.149,7.735,7.473,7.332,7.401,7.615,7.85,8.175,8.679,8.889,9.155,9.588,9.692,7.67,7.338,6.661,7.299,7.214,7.299,6.661,7.338,7.67,9.692,9.588,9.155,8.889,8.679,8.175,7.85,7.615,7.401,7.332,7.473,7.735,8.149,9.163,9.896,10.943,9.19,11.152,11.603,7.244],"lasers":[{"x":0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.8,"y":-7.2,"z":0.08,"angle":0,"damage":[6,6],"rate":5,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":3.318,"y":-11.119,"z":0.64,"angle":3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":-3.318,"y":-11.119,"z":0.64,"angle":-3,"damage":[8,8],"rate":4,"type":1,"speed":[180,180],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.93,"y":-9.197,"z":-0.64,"angle":5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.93,"y":-9.197,"z":-0.64,"angle":-5,"damage":[20,20],"rate":1.5,"type":1,"speed":[160,160],"number":1,"spread":0,"error":0,"recoil":0}],"radius":11.603}')),JSON.stringify(r)})();
var Aries_705 = (function(){var r=Function('return(function(){var model;return model={name:\'Aries\',level:7,model:5,size:4.5,specs:{shield:{capacity:[800,800],reload:[17,17]},generator:{capacity:[350,350],reload:[175,175]},ship:{mass:800,speed:[40,40],rotation:[20,20],acceleration:[150,150]}},bodies:{arm:{section_segments:6,angle:0,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-10,10,60,70,85,90,85],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,20,25,10,12,12,15,20,20,15,0],height:[0,10,12,8,12,12,8,12,10,5,0],texture:[4,63,4,4,4,4,4,63,3],propeller:true},arm45:{section_segments:6,angle:45,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-10,10,60,70,85,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,20,25,10,12,12,10,25,20,0],height:[0,10,12,8,12,12,8,12,10,0],texture:[4,63,4,4,4,4,4,63,4]},arm90:{section_segments:6,angle:90,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-10,10,60,70,85,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,20,25,10,12,12,10,25,20,0],height:[0,10,12,8,12,12,8,12,10,0],texture:[4,63,4,4,4,4,4,63,4]},arm135:{section_segments:6,angle:-45,offset:{x:0,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0],y:[-90,-85,-70,-60,-10,10,60,70,85,90],z:[0,0,0,0,0,0,0,0,0,0]},width:[0,20,25,10,12,12,10,25,20,0],height:[0,10,12,8,12,12,8,12,10,0],texture:[4,63,4,4,4,4,4,63,4]},cockpit:{section_segments:20,offset:{x:0,y:-10,z:8},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-50,-35,-25,-15,0,15,25,35,70],z:[0,0,0,0,0,0,0,0,0]},width:[0,15,20,25,20,10,15,15,0],height:[0,10,13,15,15,15,12,10,0],texture:[6,15,15,1,4,3,3,15]},topcockpit:{section_segments:16,offset:{x:0,y:-23,z:7},position:{x:[0,0,0,0,0,0,0],y:[-30,-10,0,10,30],z:[0,0,0,0,0]},width:[0,12,15,10,0],height:[0,20,22,18,0],texture:[9]},cannon:{section_segments:6,offset:{x:0,y:-63,z:0},position:{x:[0,0,0,0,0,0],y:[-25,-30,-20,0,10,12],z:[0,0,0,0,0,0]},width:[0,10,8,7,6,0],height:[0,5,5,7,6,0],texture:[6,6,6,10,12],laser:{damage:[150,150],rate:0.7,type:1,speed:[110,110],number:1,error:0}},sidecannons:{section_segments:6,offset:{x:45,y:-45,z:7},position:{x:[0,0,0,0,0,0],y:[0,-30,-20,0,10,12],z:[0,0,0,0,-5,-10]},width:[0,3,5,7,6,0],height:[0,3,5,7,6,0],texture:[6,6,15,4,4],angle:-45,laser:{damage:[15,15],rate:4,type:1,speed:[200,200],number:1,error:0}},backsidecannons:{section_segments:6,offset:{x:45,y:45,z:7},position:{x:[0,0,0,0,0,0],y:[0,-30,-20,0,10,12],z:[0,0,0,0,-5,-10]},width:[0,3,5,7,6,0],height:[0,3,5,7,6,0],texture:[6,6,15,4,4],angle:225,laser:{damage:[15,15],rate:4,type:1,speed:[200,200],number:1,error:0}}},wings:{side_joins:{offset:{x:0,y:0,z:5},length:[40,30],width:[50,30,0],angle:[30,-10],position:[0,0,50],texture:[1,11],bump:{position:10,size:20}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[8.386,8.406,7.816,4.278,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,3.408,7.88,8.184,8.116,8.184,7.88,3.408,7.535,7.919,8.431,8.279,7.842,6.772,7.119,7.875,8.096,8.1,7.875,7.119,6.772,7.842,8.279,8.431,7.919,7.535,4.278,7.816,8.406],"lasers":[{"x":0,"y":-8.37,"z":0,"angle":0,"damage":[150,150],"rate":0.7,"type":1,"speed":[110,110],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":-5.959,"z":0.63,"angle":-45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":-5.959,"z":0.63,"angle":45,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":5.959,"y":5.959,"z":0.63,"angle":225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0},{"x":-5.959,"y":5.959,"z":0.63,"angle":-225,"damage":[15,15],"rate":4,"type":1,"speed":[200,200],"number":1,"spread":0,"error":0,"recoil":0}],"radius":8.431}')),JSON.stringify(r)})();
var Thenpale_801 = (function(){var r=Function('return(function(){var model;return model={name:\'Thenpale\',level:8,model:1,size:1.85,specs:{shield:{capacity:[200,275],reload:[2,6]},generator:{capacity:[80,120],reload:[50,65]},ship:{mass:250,speed:[90,110],rotation:[65,80],acceleration:[60,65]}},bodies:{main:{section_segments:8,offset:{x:0,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-130,-100,-70,-50,-10,30,50,80,90,90],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,10,16,20,20,20,20,20,15,0],height:[0,5,10,10,10,10,10,10,10,0],texture:[63,3,3,3,3,2,18,4,16.9],propeller:true},cockpit:{section_segments:8,offset:{x:0,y:-20,z:2},position:{x:[0,0,0,0,0,0,0],y:[-70,-50,0,30,40],z:[0,0,0,0,0]},width:[10,15,15,15,10],height:[10,15,15,15,10],texture:[9,9,18,13,10],propeller:false},reactors:{section_segments:8,offset:{x:65,y:50,z:-12},position:{x:[-10,-10,-6,-2,-1,-0.5,0,0,0,0,0,0],y:[-70,-70,-50,-25,-5,10,30,40,50,50],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7,9,10,10,10,10,10,10,0],height:[0,7,9,10,10,10,10,10,10,0],texture:[16.5,63,4,63,13,18,4,3],angle:0,propeller:false,laser:{damage:[25,35],rate:1,type:1,speed:[170,190],number:1,angle:-10,recoil:50}},reactors1:{section_segments:12,offset:{x:65,y:100,z:-12},position:{x:[0,0,0,0,0,0,0,0,0,0,0,0],y:[-5,-5,-5,-5,-5,5,5,5,5,5],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,7,9,7,7,7,7,7,7,0],height:[0,2,5,7,7,7,7,7,7,0],texture:[17,63,63,4,63,18,17,17],angle:0,propeller:true},cannons:{section_segments:8,offset:{x:20,y:-25,z:-10},position:{x:[-3,-3,-2,-1,0,0,0,0,0,0,0,0],y:[-60,-60,-45,-30,-5,40,80,100,100,0],z:[0,0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,10,10,10,10,10,5,4,10],height:[0,5,10,10,10,10,10,5,4,10],texture:[17.5,4,13,4,18,4,15.9,17],propeller:true,laser:{damage:[15,25],rate:1,type:1,speed:[150,170],number:1,angle:0,recoil:50}},details:{section_segments:8,offset:{x:15,y:-25,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details1:{section_segments:8,offset:{x:15,y:-20,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details2:{section_segments:8,offset:{x:15,y:-15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details3:{section_segments:8,offset:{x:15,y:-10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details4:{section_segments:8,offset:{x:15,y:-5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details5:{section_segments:8,offset:{x:15,y:0,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details6:{section_segments:8,offset:{x:15,y:5,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details7:{section_segments:8,offset:{x:15,y:10,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false},details8:{section_segments:8,offset:{x:15,y:15,z:0},position:{x:[0,0,0,0,0,0,0,0,0,0,0],y:[-1,-1,-1,-1,-1,1,1,1,1,1],z:[0,0,0,0,0,0,0,0,0,0,0]},width:[0,5,5,5,5,5,5,5,5,0],height:[0,5,5,5,5,5,5,5,5,0],texture:[17],propeller:false}},wings:{font:{length:[70,0],width:[70,50],angle:[0,0],position:[0,30],texture:[18],bump:{position:30,size:15},offset:{x:0,y:20,z:-10}},wings:{length:[10,20,0],width:[70,70,20],angle:[0,0,0],position:[0,5,40],texture:[4,63],bump:{position:30,size:0},offset:{x:70,y:60,z:-10}},main:{doubleside:true,offset:{x:0,y:-31,z:17},length:[0,1,1],width:[0,79,79],angle:[0,0,0],position:[0,0,0,0],texture:63,bump:{position:20,size:1}}}}}).call(this);')();return r.typespec=Object.assign({name:r.name,level:r.level,model:r.model,code:r.level*100+r.model,specs:r.specs,next:null!=r.next?r.next:void 0},JSON.parse('{"shape":[5.55,4.671,3.277,3.004,2.483,2.019,1.721,1.512,1.365,2.01,2.412,2.443,2.514,2.601,2.736,3.206,3.61,4.208,5.073,5.495,4.912,4.601,2.925,2.918,2.637,2.595,2.637,2.918,2.925,4.601,4.912,5.495,5.073,4.208,3.61,3.206,2.736,2.601,2.516,2.443,2.412,2.01,1.365,1.512,1.721,2.019,2.483,3.004,3.277,4.671],"lasers":[{"x":2.035,"y":-0.74,"z":-0.444,"angle":0,"damage":[25,35],"rate":1,"type":1,"speed":[170,190],"number":1,"spread":-10,"error":0,"recoil":50},{"x":-2.035,"y":-0.74,"z":-0.444,"angle":0,"damage":[25,35],"rate":1,"type":1,"speed":[170,190],"number":1,"spread":-10,"error":0,"recoil":50},{"x":0.629,"y":-3.145,"z":-0.37,"angle":0,"damage":[15,25],"rate":1,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":50},{"x":-0.629,"y":-3.145,"z":-0.37,"angle":0,"damage":[15,25],"rate":1,"type":1,"speed":[150,170],"number":1,"spread":0,"error":0,"recoil":50}],"radius":5.55}')),JSON.stringify(r)})();

const ship2test = 610;

var game_ships = [
  Fly_101,
  Delta_Fighter_201,
  Trident_202,
  Pulse_Fighter_301,
  Side_Fighter_302,
  Aternaki_303,
  Y_Defender_304,
  Vanguard_401,
  Penery_402,
  Mercury_403,
  X_Warrior_404,
  Leviathan_405,
  Side_Interceptor_406,
  Pioneer_407,
  Crusader_408,
  U_Sniper_501,
  FuryStar_502,
  T_Warrior_503,
  Thenpale_504,
  Shadow_X_2_505,
  Aetos_506,
  Howler_507,
  React_Gunner_508,
  Bat_Defender_509,
  Advanced_Fighter_601,
  Negator_602,
  Scorpion_603,
  Marauder_604,
  Condor_605,
  A_Speedster_606,
  Rock_Tower_607,
  Barracuda_608,
  O_Defender_609,
  Regatura_610,
  Odyssey_701,
  Pseudo_Vanguard_702,
  Shadow_X_3_703,
  Bastion_704,
  Aries_705,
  Thenpale_801
];








var taupe = {
  team: 1,
};


var Continent = 
"   257   366                                                                                                  \n"+
"  817463 1738                                42513 5      14     7759                                         \n"+
"  232662 6476                              624828 4 94 583283 393 294                                         \n"+
" 811 68   4 9                              93313673 9256155 68 984666                                         \n"+
" 2 679879726                               4514 868 9685497 24387 79                                          \n"+
" 4674 77 536                                    758925922 597233482                                           \n"+
" 5 9173152 6                                        5426812 91892                                             \n"+
"57169879338                                          29655 83                                                 \n"+
" 1812277 95                                           2 46382                                                 \n"+
"11922  6981             3147695                        7796783              96781 96                          \n"+
" 3787911              152458922                         62  6              2 717 583145                       \n"+
" 3486838             1 89799463                 187                       3 61547815688477                    \n"+
"2    333            122 4556737441  31116   87 33 558                     7154 929335729 293                  \n"+
"2452                1  45398799137 841798 31637346628                    47 8   6 91 773 784                  \n"+
"2195                416555883359277778934892  8 197964                   733    1236233653837                 \n"+
"7282                 663769547741226 4 8 2515896611822                   9312  51 28371947413319974           \n"+
"                  223669178312125241659657 33172275 11                   61721784 31635 31391622 852          \n"+
"                 5569 97348723112446543 65575655936964                59159 7724911688 23 28951942847         \n"+
"                 5853 35499229 977815922283245275527                  6899431926  6 6 44148666  6 768         \n"+
"                 994912546871 31654438883789467947 82                 621239 4 848963262496231 957384         \n"+
"                545237674788 9364 146137258529461676        15741     733623 78376139784955 97  63981         \n"+
"                951446325738534643748164774379 6576351      645791    4513563414326 83779  9964761861         \n"+
"               514174 3479892557799 796742 4425 511881      5521596     56321491 3737 3658751567342 3         \n"+
"               218826742832881 493 27235926626  598983      3761785     53843233945326676744754322364         \n"+
"               16 8 4 777853397675861 3748453528964751       929956     49   282 7 6268 584719489896          \n"+
"                4544  7859727 4745228 2366 278 7363794      7349584     983  371278176 99 3865162148          \n"+
"               67 678 16  7 89 3 255746691351 39356835      3 41699     26124144998313134 84373398 7          \n"+
"               37  524367 1482565 74996 116686 7346379      599 418     575 4562319261274 6 92191129          \n"+
"                34694   683 2128912682716784948 825661      1 7726       747 81447 95 96 46556121495          \n"+
"                6585825 838493363419 832 824377729754       618266        15731621398214191 7734376           \n"+
"               188  71191349282582563 579 2111 2 23285      925789       636 9591  428916 9977 2641           \n"+
"               918  1455176261522 3528855  14131682336       334         21427     2 72175993538849           \n"+
"               68331 86112918228  91753    13397427716                             769   3939465              \n"+
"                95 489449428554 37 535435  43 12974598                             598487238 6                \n"+
"                2 6824923 44 6 46612397929 561 187843                                1623487                  \n"+
"                997119473 131545 888 28 46 374 8 61812                               17  696                  \n"+
"                 87678 54887 2356534864155768 42163411                               92939                    \n"+
"                  582319 69991177428 1  9598749 373187                                 845                    \n"+
"                  978 98795435  586985217 2 7534181596                                                        \n"+
"                   63774 8 329 18482567 74219792 66676                                                        \n"+
"                  355292564 829 35795843255   4 96781                                                         \n"+
"     823          42747 1714 495228426 252 88 16352                                                 181       \n"+
"     98813         166265298 5772573 43 4842271 75                                                  8499 4    \n"+
"    4624961        117 9657 38431332854277958494                                                    433542    \n"+
"    647682992      638454181825922159843 18                781882                                   794  13   \n"+
"   1311 281289      24948919443719 734731                  879456                                   1314215   \n"+
"   4145488 4814      1 77  55622 4 15238               8 5745994                                     731937   \n"+
"   976  7465675      59322  92547 6335                26725219174                                   773924    \n"+
"   7 5287392672       7329677 429995 2              589 185243346                                   624 119   \n"+
"     93 1421293        888719 4978357             8435198 7569 97               737                38417277   \n"+
"   397294955577          46716 84636             3733 372 833 7                6833 7 22778       23229145    \n"+
"     728 384 44             69 9947             68837572953                  63 35136 688533      22263221    \n"+
"   42185 478413              1 42              11287794485                    4397126339 4297     17442579    \n"+
"    48725649364                                6741152                     25781  2 6981 7195      182356     \n"+
"    4 8421891 5                                8958939                     777992912 173 19 32     996798     \n"+
"   29998629847                                 1 6534                  183197628 4 423 3297774     792 22     \n"+
"    31928183                                                         7 9618 646937726339441  3      6678      \n"+
"   373558 82                                                  487 82 46175 534693833 3586983                  \n"+
"   796918846                                            12332 51649835526586666992329875 643952               \n"+
"   235578 5338                                         96872339897622433 11224776 4665 3424 4688              \n"+
"   46275167 825                                        5 485841356 6518 28534542 966944778544545              \n"+
"  811777 88918 8 9                                    59323 73624 34521392925748  49943261 933428             \n"+
"  5257969334 1 7448 563 66                          4 528366 629398636579379 414  9122642 2169413             \n"+
"  79865157516921971735394535                        764 29897725 7 9736586971628    4755545556474             \n"+
"  955919651233862919438965 6                        9753 14666775471319794179729612511798918831171            \n"+
" 3  3953451858 997882894 289                         39   3851486982 5825 6143822 834 261468383749            \n"+
" 11 9786   1814693936 783 481                       4 6 76947832668 9619 95 277272421734 9 9561268            \n"+
" 83517625 947927618649166 4942                      538353944 535 282487997593  779 7528528 1913 5            \n"+
" 833364 8 7874 641 966 2115325                      65164666334 8629164374  56 533581324785937767             \n"+
" 8 7855 616451963 7747786966243                      9373792355 134885  2 831997429154 6  9  269725           \n"+
" 6652844164 34881144 11 6 737162                     5237719693187473    4938876672215  98351698422           \n"+
" 1 24935  91583158884  31  19641                     81814922299 9267 187713 8552522593 85652488121           \n"+
"  32  982 579 9 1  6 8616436 2637                    711667549 2813999879433596713562244381533546788          \n"+
"  5 94 6441736385747 15517 731889                     146 91 63794 476  88676926776 99324 591 6 1962          \n"+
" 596  1 393893 4887 862163671631 4                    4462 348997598147437765 6749  6737 6251 735 323         \n"+
" 665  88183519469 27339 19515 7179                     37647979668318842 4793581768756 4773958627 5 5         \n"+
" 8 82 3 5 216545882 13941673 15264                   7954185 9674 3842929176144347345166 366297871628         \n"+
" 2472 643 5569 8 67 2 622582864546                 191851995962794 26887 61177 489278833479 27  2 843         \n"+
" 262  62697 48916  698 4 453751791               1 3 7971345117 57853479678895 188 32235437379628 978         \n"+
" 848971827135134 341114  1229186 1                15898728 88468 624525171399   4864 17 9969446765743         \n"+
" 55 4 81679 2 64 31892 7764 213966              19826 2 158  561 9971497538 9477523528188423738788977         \n"+
"  962218681764   883  555918754 1                84646 43838573133272444916 8517 26176732129 5648 729         \n"+
"  95 3 5 896899   225 13766  8295               992 25362199 4  778295898344267477 2745222437786  534         \n"+
" 72 967  378846 7  1  31141534669               212 4386839779 4183646475586632 284793329199495662469         \n"+
" 2583893 483555327416624721593364                52232475 15  42414 45  261892733252 6723 29778937813         \n"+
" 1995  675794617219345 4468629424               566489 62795   6459299  238 665 772461 632  34332 17          \n"+
" 9 3331324  99   4169232915 9711                23 7 1 7468631 91492786   753913 97549 5 52 57619778          \n"+
" 4513812785924 35  627898 4 95393                 49431928691278861615768 5378337 665583943655494 13          \n"+
" 8  3815781466 34316296325673387                     588144749474532584936213 9434796985343 6   8266          \n"+
" 7869613 133831416466 47 25563488                             51111527196426935 157839811 2161976976          \n"+
" 5583543573 725349882 1164235 436                              7447369924755496332878961814 85 8 969          \n"+
" 2728  26762833 3663 893523246562                               42369187  33812  6342946 743456 6896          \n"+
" 913593814319 65515 3  559 221923                              152991  9 719 735 186   379494147 818          \n"+
"  7456975449821798 634756 72113446                             64787938528755816726  34336658537 494          \n"+
"  91733956 9131 93 81816 4537 62146                            5594  21438 386 625321 567418947 23 5          \n"+
" 2949567349759662 991 5685555 293348          97                7 537496           5529192 16 6  5 5         7\n"+
" 64553 645111 11  12287419922 1 94491        7 34                422314241598764  7269 3  791 9565         573\n"+
" 93  1418 4558122 42883134 7716781115        96 98                 7985734398885  71515527181449616        573\n"+
" 83654 6159291    41562739575483 3184         43913 6                94 473737 6  357  28734757752         859\n"+
" 1 11 1763894124  1  18 75998361 2476        5332 12567                                 42224288          663 \n"+
"  3411978   9373  7 637 6369339117 75        2352876258 1482                                              5645\n"+
"   111491   21842 6363 1851 67166946        8266 77 621394548                                            97 38\n"+
"   355381   754  5 2 3326398 743951         77  993943 1 32732                                           42 68\n"+
"   8587566   963452834   2675965945          5789458  854269                                            122769\n"+
"    559948   349914    4244 439             2425 87227139483 4                                         7475145\n"+
"    143772 9 46892752144 2299               3975682311714 85222                                        8559243\n"+
"       54173185571545441 28                 641128314 4298932695                                      2626265 \n"+
"         1 51441 3941 662                    5635738623959767441                                      82829932\n"+
"                                             2557491755258228618                                     4999755 8\n"+
"                                               4826764 13385224                                      145989192";

var Islands =
"                                                         589258  357 71178  85111 624                         \n"+
"                                                         124667659733168199 26488 7186                        \n"+
"                                                         42186 47  88753 887549 181774                        \n"+
"                                                         287 1634934 2583446716652719                         \n"+
"                                                            7297 36129925882835518238                         \n"+
"               163                                            852725194 3449478594                            \n"+
"               49994                                             28171353  8222                               \n"+
"               782445                                                                                         \n"+
"              24168628                                                                                        \n"+
"             4354482662                                                                                       \n"+
"             87 77 46891                                                                                      \n"+
"            387117571837                                                                                      \n"+
"            69247 4467 9                                                                                      \n"+
"           8486 59727555                                                                                      \n"+
"           631465233 7 5                                                                                      \n"+
"           7452489753447                                                                                      \n"+
"           879 38 748 55                                                                                      \n"+
"            66 169 4253                                                                                       \n"+
"            328 4547442                                                                                       \n"+
"            192 9747463                                                                                       \n"+
"             39148 882                                                                                        \n"+
"             74281                                                                                            \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                            597  49 8136 92                                                   \n"+
"                                     66897966149484328128234125                                               \n"+
"                                 566 93187 252728544786815933 91                                              \n"+
"                             49676129649183294779  512   25 3 156 212785                                      \n"+
"                       834938 859853624 757 315335946 5141942 836 9414264 43                                  \n"+
"                    14154356 59854  541 85 61865953418 225371516 63721722534  883                             \n"+
"                6  2943548  91469 5  58 1654472927749811193521 6286169 58723  867 79                          \n"+
"               793835892554 7711647267  129 12799 24184146596  562659663487   72  455                         \n"+
"               7723389726495  29 387673 7377136966 76158953888 5585685886832595   987 174                     \n"+
"              2 91416 39 31936816997  56339828347946    3668 7   14385 315491 84259411962                     \n"+
"              9629212   97889 9575392 17 138 6787567852   1892   445993 6341343851855747 3212                 \n"+
"         593 39761 811  4 14392733 743627 1259267931128   5 494 855 71 3367 2    956648 7 9 37                \n"+
"       4 68532 85371729 526668276757257839 79943  4639432 515 67 4514825377563   95  18 868565                \n"+
"       144786135 28337484219649738142199358872157 741823776683394611327518967  4447 8556469696134             \n"+
"       48956189853176867324984419898188695388456578  43564167348416946611379  715472167148 41267 8            \n"+
"       78734959248961742 35943   271 62188254 53619 236467686318268 15339668745882448961 7 31855              \n"+
"        13114  43644125 429255 45564241194     954337791988161974465616  478196986164 975 59 1  54 8          \n"+
"          8945  5224786967794537554343 427649  35312124  81654948 12362 392491173661837 811469983 2558        \n"+
"          568672 94884372221451279366  37291      1 577    773327595  552161314 51243712647 7314675282        \n"+
"         1775 36643 4962219549285 912   67262    2543     687 8  64812288449285 8 7978248616891969712         \n"+
"         1194372 29474232  16575 44583 92 68327   841 8977318 88778323 5248836737314 41443591 654282 9        \n"+
"         61  53 38674918 5197362369298656518835975146 615887 6 576 5452696 9131419569 6149989628331525        \n"+
"         68583226645572322 9 628642813738638211 1 7634882435785571461  67588 42948713838972988533597 1        \n"+
"         4137557556376875461564331 61994  826 384837556177 9463195284  83175995  271327 649 989459642         \n"+
"         5964118617832624 3   9126 64267  8642   738857872776713 71243132 7 94135581797271948186221 6         \n"+
"         138699957573528 8424182 4    6 89245 4 4 5676137491619 1 6 39294  82  35633657879 974  7386          \n"+
"         251 38626   54344255841246  734423496 484 64379 4961   745 9586326718865314347 2 957 8 6 36          \n"+
"          419384 6   9 25 922  528 8549843 49859581439472 5779743676255 654428439 5131889  44619284           \n"+
"           2399367 241813235 341254231868937125 76541964736 2643       32 42995917225368    2 95194           \n"+
"            9 4619  43764857274742291786 24773895675247 1 13 885    4999517 7955863394       748278           \n"+
"              878585981 54 2351129174  99817378 15 397916595256678592558823942899468         11723            \n"+
"              353963415637554 8552484 59745454369935662271698  16492782249 5228597                            \n"+
"              936873317919571 53 26 511757139946426388421183985319 6 7247924                                  \n"+
"              9671955686 157615948 927559842326 36418462777651872778525  322                                  \n"+
"            6585831342332536247344 75383532  14 237698268318422756 98845 598                                  \n"+
"            412489875 64266689512613416 691  2 87 91414    4945 62 35189  68                                  \n"+
"            7 63 878547776654139558 95625571151 86473148 836 77 3 31959776 1                                  \n"+
"         237 1 45478162 9523748954 9735 19843551614652217551429546961743 893                                  \n"+
"         4723425319461  5345582 174  47  39718894962 5612123 259 52779643841                                  \n"+
"         6497356839291  486327 534 2611      3 429  89           421185 2577                                  \n"+
"         727868 298859768 127 567815223                                94 6                                   \n"+
"         47292161 94687825939 4333694                                                                         \n"+
"         445641389633195744   275  4                                                                          \n"+
"         526 2795185465 25 874 9                                                                              \n"+
"            94952 256787373568                                                                                \n"+
"           7477 699362794  5 1                                                                                \n"+
"          12 49765 332 548                                                                                    \n"+
"          869193598444 4 7                                                                                    \n"+
"           428548215 6                                                                                        \n"+
"           757 73847                                                                                          \n"+
"              1741                                                                                            \n"+
"                                                                                                              \n"+
"                                                                                             73195 471617     \n"+
"                                                                                         466 66635 73419971683\n"+
"                                                                                       86731 81942817547549251\n"+
"                                                                                    466911 364582857   9198164\n"+
"                                                                                6442228875 787 2492836 7189 3 \n"+
"                                                                               77 9991136116817385915122189 16\n"+
"                     674 6                                                   571478839 2345 1  239298146 379 5\n"+
"                  541112792                                               13944626 988 7 8133 1486776944393177\n"+
"                 16521493992                                             8675848 2 8 627313227 78 79 8577 1958\n"+
"                49816473 61134                                       599848356    87943935843 1144189931317 55\n"+
"                3 7948447967 5                                    956 3465318856622118328754 61182452 56168918\n"+
"             34  1291311193266                               68818 86115761 53 242193624145957622747 3412378  \n"+
"             17262291923421 25                              6 3174419876   48 1885 35 3676941686997581895759  \n"+
"            94714573385 49991 8                          954172 55 54926  7655625498884286 9468 645 968921 1  \n"+
"            5 52626 1751321 71                          39299 6 143261497786152866 54484 6168469282279343321  \n"+
"            7273616261925796191                       4565 3 2325873 714 53815 457429 9877 93 4325963 2 57    \n"+
"            4814717115 7 517141                      6256336364 41783914 26439775489782787 36 825834 7 938    \n"+
"             444713573226499 1                      46744 454292617 34 73 38614247666 35 183876197963749      \n"+
"            493395 4982866 3  4                   153 21 33  9 569 186531 789795976867792812316651865 98      \n"+
"            7834  616234875 45                    94611253113 26342 7 77 9 84192751 63 743262535     315      \n"+
"             13695228 7811 276                  67559 7 1175742 7297 21861 4148646886  94449 95               \n"+
"             56223538488171872                 366387914362931 8352 5694349 3  357915  3 1572 1  379          \n"+
"              66836788259275                  382  796  44241762 7 19173 6228 4379593987 77875 29366          \n"+
"              5 381311596753                  1155623     4   7189716424471 2128 554481693  95962269          \n"+
"               5 6 28399536                   174897 492762 6  765 37297181978821578499   22795 618           \n"+
"                 642  467                     87 22  66  97142     18684751832115 4232573 7236781             \n"+
"                                                8665  31585523    3871 273551776343779391 374                 \n"+
"                                                5633  737 34345655597481668   65457 35 81                     \n"+
"                                                 987 8684966638178 317 9983444432                             \n"+
"                                                 4637   542718 986166 69 793                                  \n"+
"                                                 739817713 766733261831 5                                     \n"+
"                                                 51136882467 965 8523213                                      \n"+
"                                                  7  74 539592  8512849                                       ";

var Planets =
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"                                 6244                    182 81199392                                         \n"+
"                         484  13 9633 53                1 872113687276                                        \n"+
"                       11544  76134811 2879             52338394461927             9985  867532               \n"+
"                    61599939  7685427738 8 7            6 68 511 99347         42925315211391548387 745       \n"+
"                    7387848831 2 1256447223396          3 88 172539181     621784283845284 35 21836 74 2      \n"+
"                  54875 9135318999255728 2779787        291791216643974   2 9 2 9966  67581 484 41845627      \n"+
"                  3 8      746761428 7439192181         288869623461748  35 18952263 64596363729243 774       \n"+
"   51831347       632   4161 2713 18 895936731 399         5212  453269  6 1195229277  29935197698698237      \n"+
"   32376141525     87   43 77868727488415728869193        4  3857 35 9   2789923424694  228786315253 363      \n"+
"   1 84783 643    277  9153 1862 63782 4861   3158          3849743685   744 768912 6377559687 287267784      \n"+
"   148  7693586   966  6579 3627  649823747599 91277          83769      948835355 584128375385355762 82      \n"+
"   5 2924791172   23    2759 791 898 95398134 8728237                     34  27343 6731661725148624483       \n"+
"   666 22749  4       5772349  394724755 1971 61 63965                   57472141332857318164391 5958 4       \n"+
"   647697989 78   789 1886439311597577835813171 542777                   6142 51641 67 983358996859 668       \n"+
"   664 22852997   981  46199422526 584  153795754346537                   7451396 9728 9 49463 19 17538       \n"+
"   8 3781936886   4292975829878316516   9 6 74985823768                   3771   5859745 649668671185 6       \n"+
"    46 8 76386    336 85149 5993459641  24 6344  452462                    2 83  9 151746934 7 5343956        \n"+
"     4517  87     2 3323 2855942  146   17 6172995668237                   71436 462633 4536542 727115        \n"+
"       9 8        76829   3981488819 297 34427 698488511                   61612 55794751  832436 3 92        \n"+
"                     2 4854865589612 4263 32533 88831271                   843 9 728 44183357    5569         \n"+
"                      6125848553 214323787384245772939956                   2834233738269555572  537          \n"+
"                   3163449793762422389744149519 61934 512                    2965 9785249545648 6844          \n"+
"                   712 91421 724419827  542 61 66 6819769                    9165843 282 87427788             \n"+
"                    664 238 7 244582265198 56473 2696 1                       28247 729245551295945           \n"+
"                    96865 476 375643 3192 54 999886856432                      76 5341778925819154            \n"+
"                      385      737   575   94342427329  76                      129 197   99447               \n"+
"                     9885833533153   443849649592575   887                       44117 824623 3               \n"+
"                        336883     97 5 8941239329  5  319                        884334252 9                 \n"+
"                         7268 78999728  1143 366  37  513                             93715 9                 \n"+
"                           9988344724      33 864812133346                            24134                   \n"+
"                            865444 166549 41232291 396 6                                                      \n"+
"                              8178 396399   82869 15 76                                                       \n"+
"                                      997 613 815999 9                                                        \n"+
"                                                                                                              \n"+
"                                                                                                              \n"+
"               1 98                                                                                           \n"+
"         3 6559735968                                                                                         \n"+
"         2159474395499                                                                                        \n"+
"        9885911365 427                                                                                        \n"+
"        41685149621557                                                                                        \n"+
"       671321624317681                                                                                        \n"+
"       356787 93916631                                                                  1737 94               \n"+
"       88124245 298269                429                                            5 84344766               \n"+
"       63515855383  62            67429422                                          179963615349              \n"+
"       1332112194 257           54821576157 68929                                  2877 84 133546             \n"+
"         63369 4 169           36586269916686137772                                562243689137 9             \n"+
"          74935285429         6  86 1288273997 9 57                                943644 37718 9             \n"+
"          9255521341          65367214624764752492694                              44844182549493             \n"+
"                             86353376247289596249797429                            632216853624249            \n"+
"                             617 316 8946 998  371836153                            6532348784 96             \n"+
"                             748 696179 168778845342697732                          3 685162724 53            \n"+
"                             685  826 89836746445443 47844                           8892 173 164             \n"+
"                              967712182137821154661 8171864                          72427956  11             \n"+
"                              3551835776996 6337223167597773                          775844499               \n"+
"                              9541521 9958 928639147226692                              3291259               \n"+
"                               98 318916279 886537784687172                               135                 \n"+
"                              3549792 76459 9 7729 279561672                                                  \n"+
"                               936 8438797353973788346653982                                                  \n"+
"                                79  542595722373154474427924                                                  \n"+
"                               1295 885 964578789 74 6475 53                                                  \n"+
"            794                8975  6  927 2967215642 7 526                                                  \n"+
"           234919               6 28  1419328598154135979 25                                                  \n"+
"           9448467               7 8 5 944  93198 42562211 3                    8638649392 9                  \n"+
"           9851232               76487988 87116 7342538639                577299989968516681544               \n"+
"           445 469                47227271 9116788627359                 2 589664482 42886559 2               \n"+
"           7194773                32183     557253222 69                  896377 7578745393317142             \n"+
"            3 7372                 15793361   6253943435                 84 99179566723254 2963869            \n"+
"            661656                  1748929813775293                  7921589924117 6 46833 1829855           \n"+
"                                     6238257 57 2                     463 32571888465241452 21 3717           \n"+
"                                         19951                      5 5 1 7181346  92 41958147 7883           \n"+
"                                                                   22326 8336 71585962 746 346 71995          \n"+
"                                                                   66426 352576625  694767783323 621          \n"+
"                     7 94121641538 57                              756845175418239334947714527658827          \n"+
"                     2461196522576159127                           6 6 65361821318838825622199615827          \n"+
"               294  1378627238353291 68594                         182 857  5445327874318 9673661713          \n"+
"             2567785 9385797755255833 5385                         686 4884227149263 28787284 342614          \n"+
"             332982269995518 91734 564328366                       1 6 27778795 25 33 8284458815794           \n"+
"             647326 56 3681429 2223498549989                       338 25332231253 25933 8178 48959           \n"+
"            518 93519179377963 2947782662256                       775 54165 422     28578 884745962          \n"+
"             1623 2875824337 412599 558 135831                     658  35361819196 9 29186431  521           \n"+
"            745812  67459322 19981 698 38659692                     61 4423 91  429355 69 67394725            \n"+
"           2595943982 311839179814 315 766 4251                    581 789151149  414719843 7 2822            \n"+
"           414129149585168378183928736 2 3 34 74                   248 9292452 8 9924 252826 9415             \n"+
"          681 6 49963716695389555972159467 8232                    4627622929 49823   59979 23566             \n"+
"          391732636151613844486617522587815725 91                    46168193 2347872913655 14292             \n"+
"           97 9548  83391589499712838961266171187                    922865595339652  9265 17586              \n"+
"          414  5985146 39177593438743587373852282                     19581954357 6684222 8986                \n"+
"          455 349787 5664946 7 31 53329 6 879 845                     11235  322   75717921221                \n"+
"          319 833217732412825936269 28117166913436                       54532171691961911863                 \n"+
"          928 277921199644425 67 248549 5 37838278                         139   29754886         424 979     \n"+
"          6764 566844826331 35    54228448 938 695                            87 58 287          44358 69     \n"+
"           7 2 2429231   31 528749618191 531 2 159                                             165725 74 9    \n"+
"           762 8533135319945859367  159548829 5 3                                             926 49694688    \n"+
"           94 8148  2323 3989567753 566 1314535569           33 97                            36396743 792    \n"+
"           5667  7 8886593 32572135132285635962 4           287 5 7666                         8884 572969    \n"+
"            9826 4892 17255448852723 613244962743          24941 346572                       4 3 4393 248    \n"+
"             199  52353837 6 4173779225177265745           17715263892443                     98881 128586    \n"+
"             68 4836912976 38273527152688522 65            24684 66333211                     33116522434     \n"+
"               13875 54146  3151796846  3965857             399  9 973477                     26931339 46     \n"+
"               863126187 951514771717652949392              27 92 9198582                      7743154 4      \n"+
"                 2 59689 519 93371 581654832                 38187534419                                      \n"+
"                  917333 471 3877588  23                      2918766721                                      \n"+
"                                                               65262995                                       \n"+
"                                                                65533                                         \n"+
"                                                                                                              ";
var Rainforest =
"       44    44   4                9                  7                              8            9           \n"+
"444 4  447777477 74                775558 58 777   777   799              9555 8 8 8 558666 66666 9           \n"+
"4  477477 744447449                9 5 8   7 5 5577 555 755               9 55868    85 866585858855          \n"+
"447777447444777 9                  77     5585555  5555 79                555658886  58 56558 6658 5          \n"+
"444744444747449                  777 77 8 7 35 33555 5557                59586  855 5 56 585588 6559          \n"+
"44474747477 4                    795   75733855537 555 7                 9   56 3623856 66555856  55          \n"+
" 774747447944                    7577  7753883 338  557                  98555  85263328 26266666689          \n"+
"4774777744                      9555353333 7877 88555 7                    9 5 3 8 366 88 838 366 85          \n"+
"7774479444                     9557357 7787 357 533997                     5 5855 3666625268 8666 85          \n"+
"777774 44                     555575738    555585539                       558666666 668886666663355          \n"+
"77444                         5 55  85 3735 55  553                        55883668668666868 622385           \n"+
"47 9                         59  7 8575533  55555777                      8888 8 2286666 82622633359          \n"+
"77 44                        555   73  377755755855                       5586266 6 2236652858366559          \n"+
" 744                       7777  5 737 335 873557559                      55 6688 62868268836638596           \n"+
" 94                         997  58  35 335  3 535 9                     9   868566668282562863 9             \n"+
"99                          9977  85575 8 3733335375                    98 886 6366662262658 8299             \n"+
"                             99975578585 73 5 335 55                    9   8866 8366 6633336859              \n"+
"                               95  57573 577778553559                    858 8 568 5 5 6632 3  8             9\n"+
"                                55559 575   535  5 5 79                  588 5 6  58333 5 538565            44\n"+
"                                7 555 557  7558 8855579                   595 8 8 6 8855556 8889          9477\n"+
"                                 777755555755 5  3  579                     99885666866566365659          447 \n"+
"                                    97 5 55 38 83 75599                          59 53868  8 559         9447 \n"+
"                                     75      855557 9                             9   5883855            94477\n"+
"                                     979    5   99                                55  553555  9           4557\n"+
"                                       57577  77 7                                595 555    5           49477\n"+
"                                           9999                                    9555995559             4575\n"+
" 339                                                                                999   99              4577\n"+
"3333                                                        3555539                                      97757\n"+
"3  39                                                       558555339                                  99 7  5\n"+
"55883                                                      858888553                                  44 7  77\n"+
" 588888                                                  98899555 5539   3339                         44474447\n"+
"55 8 3833                                               33353555958883993  33333                     944777455\n"+
"  5355  339                                             3555953559889 9839838899                     94  54575\n"+
"85558855553                                             9359553873 7777 8 8  3338                    477557755\n"+
"5 5555885 3                      339                    939958533339    388883333                   44 7757 5 \n"+
"55 588555 5                      858                     3933355538338883 883 393                   4445757 77\n"+
"555588885 39                    85383                 99 336 5886 333 888 83389 8                   474 757777\n"+
"855555585559                  83338383 88             9 988 55585563663673833833                   4777475575 \n"+
"855885555539                   35853388883833 9      9 683888  885877335556 8338                    445 77477 \n"+
"53585555558                   853 338  8 8  3 99      88678 53885778 358858 3 833                   47577557 4\n"+
"88355555   8                  8385 53338 88883      9 7353 87788658 5355538863 3                   49 77775474\n"+
"5 58835885883                  395  8 8   38 3 9    93353377776 566 553555833833                   77774 5 477\n"+
"55585358588 39                89  555533838 5839    3383 5 786535 65 5555383838 9                 47774555  7 \n"+
"835583585358 9                39 8835853588 58 3    3 77  5687  5855763 3 7779 3 9               74475757577  \n"+
"8 83585 858589                3   335 8858 55855    9387 558  556  5563856636 3889               74 7547757777\n"+
" 85385855858899               3  853833883855885    9937 53 88668 66 5 85835573333              9777757577 574\n"+
"55 883555555599              958555 388533 888 3      33583 8876 533 663855557669833           994474774475774\n"+
"555888588555333             993 5853888 5 588  8       8333  66658 875575563676658389            9444475575757\n"+
"355558558555339            9 535838 8 8 55888  8        3355 55365 66367677 885759389            4474 44774757\n"+
"5858858 855 9             33355888355 3885338 33        9355 5553  3 3586878586653689              779777 7 57\n"+
"588585 559555                  885355 5833553338        8385 38578  88   66633637883                 474455777\n"+
"588555553333             398 88 8855585888 8 9          3388883886888378585565588833                    445557\n"+
"3555583858                9  8883 85555 8 58 8          333333555 75775 68853597366                    7 75557\n"+
"355583559               33 83858838855588 333           39 778737  38368555588933                        74 77\n"+
"338855559               39383 838 85583  3553            399 3333537655 58  8993                           447\n"+
"588 5559               9385 383333355555 559               33777755578  388 933                3          7777\n"+
"55555939              93  5553588 85883555 93               333337885575333 33              9999             9\n"+
" 555 93             3 353885385355538855888                    939375737 3333            3 333 93             \n"+
"533933               3  885333385 5335 8 838                      93333333             9399339                \n"+
"559                93  88333 88535535588858                         33         333  3333933333  9             \n"+
"9                 9    858388588855833 33589                                  9399339383833339 33             \n"+
"                93338 8388 385533 83538885 3                                  9333338   8  5355 3  3          \n"+
"               9 3  3583358555355833355888 3                                3 383 3 3    355555 93            \n"+
"               9388 558583355885555 8888 3 9                              99398  8388888  8883 9933           \n"+
"               333388 8 8 5588885835 558 833                            3   988   3  35855 888855399          \n"+
"               93   8   5 58583353388335 93                              393988 883 555855 5553335339         \n"+
"               83 58 8888888  5833 88 358 3                       9393933999  3 8 585535 5  355585333         \n"+
"               338558   533 338855 33888 3                     99933333938933338333 835355538 35533 39        \n"+
"                3 3 5 5 8   33555 83  889                     9333333333985355555 8388383 33553553953 9       \n"+
"               33 85355888 5888 8558 5333                   9 3 33383 8 85 8838 855 8838  88 558889533        \n"+
"               3883  5583 383833553833333               99993939 83 8583 3 88   3585533 555 5885 35 53        \n"+
"              33  8 8355855 38833885388338         99933333 333   388 533835 3  8885855858883535558 539       \n"+
"              93853 35838 55 5558 85533338         9  3553533 8 355 8888388 8 38835838 3 335338833353 9       \n"+
"              3383383388 5538 838 3 883888         9  885555 83 8 8  8 85 8888 838588855 85588855833899       \n"+
"              3385 58  855883883338 553583         9 55 35385   5  88 85 55833 5355 83 8 53885585585333       \n"+
"              935833 583 58 3     8 385533           585358885  55 5 8588338585533555883883535555 3533939     \n"+
"               355   3      338 833 3 388          33 85555 88533 855 585 3 585 555838353555885358588 9       \n"+
"                3998 85358 39883333339              9 58335833333 55558855355 3855358858335535553 5 88333     \n"+
"                3 333 3 8 833                       99 58835 383 38 8383585 883538 3855558 55585858 3 9 3     \n"+
"                   333 888 83                      3  9 85885 835335 385538885888388555 83335558555859 99     \n"+
"                    3 3     39                       3 398 5955 835883 338858533883993553558553559389399      \n"+
"8                   33  3 3339                      3 9 3855533 8 5 5 8  8888338  3388953338555583833333      \n"+
"                            9                         38 358 8 88 858 3 855 388888385  355 58588 39  9        \n"+
"8                    99 3  9                          3333 83588 558338538353 388 5383 8853 358 3             \n"+
"3833                  339                              8335855595 55558383  538 8385   85 85588 9             \n"+
"98 988                                                9 98555555 8855888835885888888883855538   3             \n"+
"8   9  99                                             999  8 3838555533838333958353858833339 333             9\n"+
"88 8833399                                              933883333 888 38838885 55 55888398888               38\n"+
"5 3888 8333                                              9333 393 33355353333 33 88833333 8                388\n"+
"533558 8 39 33                                           9399333333333333  888888888 3 88 3               8855\n"+
"5888 88 8893 3                                                 99   333993333 89 38888                    8 58\n"+
"3 85385888 339                                                    9 939  93  9                            3555\n"+
"8885585555553959                                                          93                             88555\n"+
"588 8885858 8833                                                            33                           88855\n"+
"588385 55553553333                                                                                      889555\n"+
"585355858 58555993                                                                                       33555\n"+
"3 8888555  8535353                          999                                                       83588535\n"+
"55858555888555585399                     9955333333                                                   38585335\n"+
"58355858585 85 38859                   3 933553359 559                                           333 8  585838\n"+
"5888 8555855833858339333               398 55  55555555                                          3998888388555\n"+
"55855855583885585333833                3 3555555338855533                                       989 8838888535\n"+
"5888555553888555558338933              383535885353553599                                 883   88 88855538358\n"+
"88888 5555888358555588889              3388555558 3385  3                                 83339938535355555353\n"+
"8888855 55588555555553888553           9 35835553853588 83                              5358333 58888555533558\n"+
"88 8 5855555555  555555888588          3 53535555885358583                            5  333343855558333558583\n"+
"3888 855588585853588558883333         883385585553385858589   333                   333388484435555883358555 3\n"+
"88888588 535553355585588588 39       838335585555853353333359359399                9958834835455 35583555 3385\n"+
"8   8888585585588558558555888        38 55555358535858535855588855539             333885348545535 558555355388\n"+
"88  855555  55555558 55 8358       3 35358588555535583385535388558539             3833344334838358558555855853\n"+
"538  88   558 555885 8853598       3 9335585555 8 83 8 35855858555539            33333334488835 55 5553555  33";


var mod_vocabulary = [
  { text: "You", icon:"\u004e", key:"O" },
  { text: "Me", icon:"\u004f", key:"E" },
  { text: "Yes", icon:"\u004c", key:"Y" },
  { text: "No", icon:"\u002a", key:"N" },
 
  { text: "Heal", icon:"\u0036", key:"H" },
  { text: "Follow", icon:"\u0050", key:"F" },
  { text: "Gems", icon:"\u0044", key:"M" },
  { text: "Defend", icon:"\u0025", key:"D" },
 
  { text: "Wait", icon:"\u0048", key:"T" },
  { text: "Attack", icon:"\u0068", key:"K" },
  { text: "Base", icon:"\u0034", key:"B" },
  { text: "Hmm", icon:"\u004b", key:"Q" },
 
  { text: "Good Game", icon:"GG", key:"G" },
  { text: "No Prob", icon:"\u0047", key:"P" },
  { text: "Thanks", icon:"\u0041", key:"X" },
  { text: "Sorry", icon:"\u00a1", key:"S" }
];


 
var mod_map_names = [
  "Amerkati", 
  "Arekaba 18", 
  "Verist 5", 
  "Acharteglo", 
  "Aragor 2", 
  "Hulgoa", 
  "Koluiya"
];
var songs = [
  "procedurality.mp3", 
  "argon.mp3", 
  "red_mist.mp3",
  "warp_drive.mp3", 
  "crystals.mp3" 
];
var crystals_value =  [
  1,1.2,1.5,1.7,1.8,
  2,2.2,2.5,3
];
var mod_map = [ 
  Continent, 
  Islands, 
  Planets,
  Rainforest
];

//Huge thanks to Koderyori for making the RainForest map

var asteroids_strength = [
  0.85,0.90,0.95,1,1.25,1.50
]

var lives = [
  2,3,4
];
var teams = {
  hues: [120,180,360],
  number: 3,
  stuff_time: 1,
};
var starting_name = mod_map_names[~~(Math.random()*mod_map_names.length)];
var starting_map = mod_map[~~(Math.random()*mod_map.length)];

this.options = {
  root_mode: " ",
  weapons_store: false,
  starting_ship: 800,
  friendly_colors: teams.number,
  hues: teams.hues,
  map_player: 12,
  crystal_value: 50, //crystals_value[~~(Math.random()*crystals_value.length)]
  map_size: 110,
  reset_tree: true,
  ships:game_ships,
  map_name: starting_name,
  soundtrack: songs[~~(Math.random()*songs.length)],
  vocabulary: mod_vocabulary,
  custom_map: starting_map,
  asteroids_strength: asteroids_strength[~~(Math.random()*asteroids_strength.length)],
  starting_ship_maxed: true,
  lives: lives[~~(Math.random()*lives.length)],
  release_crystal: true,
  radar_zoom: 1.2,
  projectile_speed: 0.8,
};










var keep_your_ship = function(ship) {
  if (ship.custom.t7_reached !== true) {
    ship.set({
      type: ship.custom.type, 
      stats: ship.custom.stats, 
      crystals: 720
    });
  }
};
var set_less_crystals = function(ship) {
  if (ship.crystals > 10) {
    ship.set({
    crystals: ship.crystals - Math.trunc(ship.type/100), 
    score: ship.score + Math.trunc(ship.type/100) - 1
    });
    ship.custom.credits+= Math.trunc(ship.type/100);
    ship.custom.total_gems+= Math.trunc(ship.type/100);
    ship.custom.needed_gems -= Math.trunc(ship.type/100);
  }
  else {
    ship.set({crystals:  ship.crystals - 1});
    ship.custom.total_gems+= 1;
    ship.custom.credits+=1;
    ship.custom.needed_gems-=1;
  }
};


var stop_idle = function(ship) {
  ship.set({
    idle: false,
  });
};


var start_new_team = function(ship) {
  ship.set({team:1});
  echo(ship.name + ' has been assignated to a new team (1).');
};


var died_finish = function(ship) {
   ship.gameover({
     "You died": "",
     "Score":ship.score,
   });
};
var general_composition = {
  id: "general_composition",
  position: [30,0,45,80],
  visible: true,
  components: [
    { type: "text",position:[0,0,0,0],value:"",color:""},
    { type: "text",position:[25,2,40,50],value:"",color:""}
  ]
};

var put_general_composition = function(ship, quotes, quote_pos, complete_text, color) {
  general_composition.components[0].value = quotes;
  general_composition.components[0].position = quote_pos;
  general_composition.components[1].value = complete_text;
  general_composition.components[0].color = color;
  general_composition.components[1].color = color;
  ship.setUIComponent(general_composition);
};


var set_hue = function(ship) {
  if (ship.team == 0) {
    ship.set({hue: 0});
  }  
  if (ship.team == 1) {
    ship.set({hue: 60});
  }  
  if (ship.team == 2) {
    ship.set({hue: 120});
  }  
};

var heal_button = {
  id: "heal_button",
  position: [5,70,10,20],
  clickable: true,
  shortcut: "H",
  visible: true,
  components: [
    { type: "box",position:[0,0,100,100],stroke:"#CDE",width:10},
    { type: "text",position:[10,10,80,30],value:"HEAL",color:"#CDE"},
    { type: "text",position:[10,35,80,30],value:"320 gems or +",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[H]",color:"#CDE"}
    ]
};

var heal_detail = {
  id: "heal_detail",
  position: [3,49,15,30],
  visible: true,
  components: [
    { type: "text",position:[10,35,80,50],value:"For tier 4 or more",color:"#CDE"},
    ]
};

var times = {
  //Numbers in ticks:
  taupe_start: 3600, //20 minuts
  attack_phase: 3600,
  purge_phase: 3600,
  taupe_total_reveal: 38000 + 6000
};


var yeet = function(ship) {
  ship.gameover({
     "Game closed": "Disconnected",
     "Try to join more faster":"",
  });
};


var set_idle = function(ship) {
  ship.set({idle: true})
}
        var minuts_purge = 4;
        var minuts_attack = 9;
        var minuts_mining = 1;
        const t7 = 1110 ; 
        

this.tick = function(game) {
  if (game.step === 0) {
    game.custom.team_1 = 6;
    game.custom.team_2 = 6;
    game.custom.team_3 = 0;
    game.current_minuts;
    game.custom.seconds = 60;
    game.custom.start_attack = false;
  }
  if (game.step % 60 == 0) {
    for (let ship of game.ships) {
      var timer = {
        id: "timer",
        position: [82,27,17,40],
        visible: true,
        components: [{ 
          type: "text",position:[0,0,100,100],
          value: game.custom.current_minuts + ":" + game.custom.seconds,
          color:"#CDE"
          }]
      };
      ship.setUIComponent(timer);
      stop_idle(ship);
    }
      game.custom.seconds--;
      if (game.custom.seconds == 0) {
        game.custom.current_minuts--;
        game.custom.seconds+=60;
      }
      if (game.custom.seconds == 0 && game.custom.current_minuts == 0) {
        if (game.custom.phase == "mining_phase") {
          game.custom.current_minuts = 0 + minuts_attack;
          game.custom.start_attack = true;
        }
        if (game.custom.phase == "attack_phase") {
          game.custom.current_minuts = minuts_purge;
        }
      }
  }
  if (game.step % 15 === 0) {
    for (let ship of game.ships) {      
      var upgrade = {
        id: "upgrade",
        position: [5,30,8,14],
        clickable: true,
        shortcut: "W",
        visible: true,
        components: [
          { type: "box",position:[0,0,100,100],stroke:"#CDE",width:2},
          { type: "text",position:[10,15,80,30],value:"Needed gems", color:"#CDE"},
          { type: "text",position:[10,40,80,30],value:ship.custom.needed_gems, color:"#CDE"},
          { type: "text",position:[20,70,60,20],value:"[W]",color:"#CDE"}
          ]
      };
      ship.setUIComponent(upgrade);
      if (ship.custom.needed_gems <= 0) {
        ship.custom.needed_gems = "DONE";
      }
      if (ship.custom.start !== true && game.custom.close !== true) {
        ship.custom.start = true;
        ship.custom.team = "none";
        ship.custom.tier = 0;
        ship.custom.stats = 0;
        ship.custom.crystals = 0;
        game.custom.taupe_start = false;
        game.custom.purge_phase = false;
        game.custom.phase = "waiting_";
        ship.custom.t8 = false;
        ship.custom.total_gems = 0;
        ship.custom.credits = 0;
        ship.custom.start_giving_gems = false;
        ship.custom.needed_gems = t7;
        ship.setUIComponent(heal_button);
        ship.setUIComponent(heal_detail);
        ship.setUIComponent(game_infos);
        if (ship.team !== 1) {
          start_new_team(ship);
        }
      }
      if (ship.custom.start !== true && game.custom.close == true) {
        yeet(ship);
      }
      if (game.custom.phase == "waiting_") {
        game.custom.start_mining_phase = true;
        game.custom.phase = "mining_phase";
        ship.custom.team = "none";
        put_general_composition(ship, "Mining phase", [22,-2,45,40], "PVP disabled", "#FFFF55");
        echo('\nMining stade started.\n');
        game.custom.current_minuts = minuts_mining;
      }
      if (ship.alive !== true) {
        died_finish(ship);
      }
      if ( ship.type < 700 && ship.crystals === 720) {
        ship.custom.stats = ship.stats;
        ship.custom.type = ship.type;
      }
      if (ship.custom.needed_gems > 0 && ship.type > 700) {
        keep_your_ship(ship);
      }
      if (ship.custom.needed_gems <= 0 && ship.type > 700) {
        ship.custom.t7_reached = true;
      }
      if (ship.type > 700) {
        set_idle(ship);
      }
    }
  }
  if ( game.custom.start_attack = true && game.custom.phase == "mining_phase") {
    for (let ship of game.ships) {
      set_hue(ship);
      game.custom.close = true;
      game.custom.taupe_start = true;
      game.custom.phase = "attack_phase";
      echo("Attack phase started")
      var game_ships_1 = game.ships.filter(ship => ship.team == 0);
      ship_taupe_1 = game_ships_1[Math.floor(Math.random() * game_ships_1.length)];
      //echo(ship_taupe_1.name);
      var game_ships_2 = game.ships.filter(ship => ship.team == 1);
      ship_taupe_2 = game_ships_2[Math.floor(Math.random() * game_ships_2.length)];
      //echo(ship_taupe_2.name);
      var game_ships_3 = game.ships.filter(ship =>  ship_taupe_2, ship_taupe_1);
      ship_taupe_3 = game_ships_3[Math.floor(Math.random() * game_ships_3.length)];
      put_general_composition(ship, "Attack phase", [22,-2,45,40], "PVP enabled", "#FF6161");
      if (ship.custom.team !== true) {
        set_new_team_no_taupe(ship);
      }
    }
  }
  if (game.step % times.purge_start + 1 == 0 && game.custom.purge_phase !== true ) {
    game.custom.purge_phase = true;
    set_survival_mode(ship);
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

var set_new_team_no_taupe = function(ship) {
  var team_id = [0,2,3,4,5];
    if (ship.custom.team !== true) {
      if (game.custom.team_1 !== 0) {
        ship.set({team: 0, hue: 120 })
        ship.custom.current_team = 1;
        ship.custom.team = true;
        echo(ship.name + " has been assignated to team 1.\n");
        game.custom.team_1--;
      }
    }
    if (ship.custom.team !== true) {
      if (game.custom.team_2 !== 0) {
        ship.set({team: 1, hue: 180})
        ship.custom.current_team = 2;
        ship.custom.team = true;
        echo(ship.name + " has been assignated to team 2.\n")
        game.custom.team_2--;
      }
    }
};


// [0,60,120,180,240]
var set_taupe = function() {
  var teame = [1,2];
  taupe_1.set({
    team: 1, 
    hue: 0
  });
  echo(taupe_1.name + "is a taupe.")
  taupe_2.set({
    team: 2, 
    hue: 60
  });
  echo(taupe_2.name + "is a taupe.")
  taupe_3.set({
    team:  teame[Math.floor(Math.random() * teame.length)], 
    hue: 120
  });
  echo(taupe_3.name + "is a taupe.")
  game.custom.team_1 = game.custom.team_1 + 2;
  game.custom.team_2 = game.custom.team_2 + 1;
  ship.custom.curent_team = "taupe";
  ship.custom.team = true;
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





var heal = function(ship) {
  if (ship.type > 400 && ship.crystals >= 320) {
    ship.set({healing: !ship.healing, crystals: ship.crystals - 320});
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
        case "heal_button":
          heal(ship);
          break;
    }
    break;
  }
};



game.modding.editor.renderer.setDisplayIndentGuides(false);
game.modding.editor.renderer.setShowPrintMargin(false);
game.modding.commands.test_ship = function(req) {
  game.ships[0].set({type: ship2test, crystals: 720})
};


