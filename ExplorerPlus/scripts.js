var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems, {});

var partsList = [
  {dna: 13001, skillId:1301, label:"Ice gem~Recovery", dnaNameEn:"Ice gem", partClass:"Icegem", skillName:"Recovery", energy:1, damage:0, shield:100, partId:3},
  {dna: 13002, skillId:1302, label:"Ocean lights~Toxic Stinger", dnaNameEn:"Ocean lights", partClass:"Oceanlights", skillName:"Toxic Stinger", energy:0, damage:30, shield:40, partId:3},
  {dna: 13003, skillId:1303, label:"Waves~Toxic Surface", dnaNameEn:"Waves", partClass:"Waves", skillName:"Toxic Surface", energy:1, damage:100, shield:110, partId:3},
  {dna: 13004, skillId:1304, label:"Ocean horn~Vampire", dnaNameEn:"Ocean horn", partClass:"Oceanhorn", skillName:"Vampire", energy:1, damage:120, shield:80, partId:3},
  {dna: 13005, skillId:1305, label:"Ice-blue coral~Banned Horns", dnaNameEn:"Ice-blue coral", partClass:"Ice-bluecoral", skillName:"Banned Horns", energy:1, damage:90, shield:105, partId:3},
  {dna: 14001, skillId:1401, label:"Actinia~Life Horn", dnaNameEn:"Actinia", partClass:"Actinia", skillName:"Life Horn", energy:1, damage:0, shield:105, partId:4},
  {dna: 14002, skillId:1402, label:"Ice claws~Healing Water", dnaNameEn:"Ice claws", partClass:"Iceclaws", skillName:"Healing Water", energy:1, damage:0, shield:100, partId:4},
  {dna: 14003, skillId:1403, label:"Tentacles~Water Blessing", dnaNameEn:"Tentacles", partClass:"Tentacles", skillName:"Water Blessing", energy:1, damage:0, shield:65, partId:4},
  {dna: 14004, skillId:1404, label:"Magical shells~Therapist", dnaNameEn:"Magical shells", partClass:"Magicalshells", skillName:"Therapist", energy:1, damage:0, shield:135, partId:4},
  {dna: 14005, skillId:1405, label:"Flying feathers~Damage Tool", dnaNameEn:"Flying feathers", partClass:"Flyingfeathers", skillName:"Damage Tool", energy:1, damage:110, shield:105, partId:4},
  {dna: 15001, skillId:1501, label:"Dream wings~Purifier", dnaNameEn:"Dream wings", partClass:"Dreamwings", skillName:"Purifier", energy:1, damage:60, shield:50, partId:5},
  {dna: 15002, skillId:1502, label:"Frozen wings~Water Power", dnaNameEn:"Frozen wings", partClass:"Frozenwings", skillName:"Water Power", energy:1, damage:50, shield:60, partId:5},
  {dna: 15003, skillId:1503, label:"Whale wings~Flame-sucker", dnaNameEn:"Whale wings", partClass:"Whalewings", skillName:"Flame-sucker", energy:1, damage:70, shield:40, partId:5},
  {dna: 15004, skillId:1504, label:"Seahorse wings~Firefighter", dnaNameEn:"Seahorse wings", partClass:"Seahorsewings", skillName:"Firefighter", energy:1, damage:60, shield:50, partId:5},
  {dna: 15005, skillId:1505, label:"Ocean wings~Dispel", dnaNameEn:"Ocean wings", partClass:"Oceanwings", skillName:"Dispel", energy:0, damage:30, shield:30, partId:5},
  {dna: 16001, skillId:1601, label:"Sea snail~Life Fountain", dnaNameEn:"Sea snail", partClass:"Seasnail", skillName:"Life Fountain", energy:0, damage:40, shield:40, partId:6},
  {dna: 16002, skillId:1602, label:"Ice pick~Energy Tide", dnaNameEn:"Ice pick", partClass:"Icepick", skillName:"Energy Tide", energy:1, damage:70, shield:120, partId:6},
  {dna: 16003, skillId:1603, label:"Undersea music~Tail Strikes", dnaNameEn:"Undersea music", partClass:"Underseamusic", skillName:"Tail Strikes", energy:1, damage:120, shield:90, partId:6},
  {dna: 16004, skillId:1604, label:"Anchor~Chilly Condition", dnaNameEn:"Anchor", partClass:"Anchor", skillName:"Chilly Condition", energy:1, damage:70, shield:130, partId:6},
  {dna: 16005, skillId:1605, label:"Dream gem~Grace", dnaNameEn:"Dream gem", partClass:"Dreamgem", skillName:"Grace", energy:1, damage:100, shield:100, partId:6},

  {dna: 23001, skillId:2301, label:"Flint~Spotlight", dnaNameEn:"Flint", partClass:"Flint", skillName:"Spotlight", energy:0, damage:0, shield:65, partId:3},
  {dna: 23002, skillId:2302, label:"Flame stone~Slam", dnaNameEn:"Flame stone", partClass:"Flamestone", skillName:"Slam", energy:1, damage:170, shield:70, partId:3},
  {dna: 23003, skillId:2303, label:"Lava~Inspiration", dnaNameEn:"Lava", partClass:"Lava", skillName:"Inspiration", energy:1, damage:180, shield:40, partId:3},
  {dna: 23004, skillId:2304, label:"Flame crystal~Mr. Killer", dnaNameEn:"Flame crystal", partClass:"Flamecrystal", skillName:"Mr. Killer", energy:1, damage:190, shield:20, partId:3},
  {dna: 23005, skillId:2305, label:"Burning-ax~Fury", dnaNameEn:"Burning-ax", partClass:"Burning-ax", skillName:"Fury", energy:1, damage:160, shield:50, partId:3},
  {dna: 24001, skillId:2401, label:"Flaming wings~Flame Guard", dnaNameEn:"Flaming wings", partClass:"Flamingwings", skillName:"Flame Guard", energy:1, damage:170, shield:60, partId:4},
  {dna: 24002, skillId:2402, label:"Lava rock~Burning Fires", dnaNameEn:"Lava rock", partClass:"Lavarock", skillName:"Burning Fires", energy:1, damage:190, shield:30, partId:4},
  {dna: 24003, skillId:2403, label:"Magma slate~Flame Power", dnaNameEn:"Magma slate", partClass:"Magmaslate", skillName:"Flame Power", energy:1, damage:100, shield:20, partId:4},
  {dna: 24004, skillId:2404, label:"Watermelon~Fire Bullet", dnaNameEn:"Watermelon", partClass:"Watermelon", skillName:"Fire Bullet", energy:1, damage:150, shield:40, partId:4},
  {dna: 24005, skillId:2405, label:"Fire blade~Fatal Strike", dnaNameEn:"Fire blade", partClass:"Fireblade", skillName:"Fatal Strike", energy:1, damage:190, shield:40, partId:4},
  {dna: 25001, skillId:2501, label:"Fire wings~Catcher", dnaNameEn:"Fire wings", partClass:"Firewings", skillName:"Catcher", energy:1, damage:70, shield:40, partId:5},
  {dna: 25002, skillId:2502, label:"Blast wings~Fireball Art", dnaNameEn:"Blast wings", partClass:"Blastwings", skillName:"Fireball Art", energy:1, damage:90, shield:30, partId:5},
  {dna: 25003, skillId:2503, label:"Inferno soulwings~Insight", dnaNameEn:"Inferno soulwings", partClass:"Infernosoulwings", skillName:"Insight", energy:0, damage:70, shield:10, partId:5},
  {dna: 25004, skillId:2504, label:"Balefire wings~Acceleration", dnaNameEn:"Balefire wings", partClass:"Balefirewings", skillName:"Acceleration", energy:1, damage:180, shield:50, partId:5},
  {dna: 25005, skillId:2505, label:"Crimson wings~Intake", dnaNameEn:"Crimson wings", partClass:"Crimsonwings", skillName:"Intake", energy:1, damage:60, shield:50, partId:5},
  {dna: 26001, skillId:2601, label:"Hot stone~Breaker", dnaNameEn:"Hot stone", partClass:"Hotstone", skillName:"Breaker", energy:1, damage:180, shield:50, partId:6},
  {dna: 26002, skillId:2602, label:"Meteorite~Flaming Blow", dnaNameEn:"Meteorite", partClass:"Meteorite", skillName:"Flaming Blow", energy:1, damage:190, shield:30, partId:6},
  {dna: 26003, skillId:2603, label:"Flaming grapes~Scorching", dnaNameEn:"Flaming grapes", partClass:"Flaminggrapes", skillName:"Scorching", energy:1, damage:160, shield:70, partId:6},
  {dna: 26004, skillId:2604, label:"Red apple~Rage", dnaNameEn:"Red apple", partClass:"Redapple", skillName:"Rage", energy:1, damage:190, shield:30, partId:6},
  {dna: 26005, skillId:2605, label:"Pitaya~Aid Troop", dnaNameEn:"Pitaya", partClass:"Pitaya", skillName:"Aid Troop", energy:0, damage:50, shield:10, partId:6},

  {dna: 33001, skillId:3301, label:"Earthen wall~Body Armor", dnaNameEn:"Earthen wall", partClass:"Earthenwall", skillName:"Body Armor", energy:0, damage:0, shield:60, partId:3},
  {dna: 33002, skillId:3302, label:"Ice cream~Guarding", dnaNameEn:"Ice cream", partClass:"Icecream", skillName:"Guarding", energy:1, damage:70, shield:130, partId:3},
  {dna: 33003, skillId:3303, label:"Chocolate ice cream~Spikes", dnaNameEn:"Chocolate ice cream", partClass:"Chocolateicecream", skillName:"Spikes", energy:1, damage:125, shield:100, partId:3},
  {dna: 33004, skillId:3304, label:"Stone mushroom~Thorn Shield", dnaNameEn:"Stone mushroom", partClass:"Stonemushroom", skillName:"Thorn Shield", energy:1, damage:60, shield:110, partId:3},
  {dna: 33005, skillId:3305, label:"Stone hammer~Shield Healer", dnaNameEn:"Stone hammer", partClass:"Stonehammer", skillName:"Shield Healer", energy:1, damage:70, shield:100, partId:3},
  {dna: 34001, skillId:3401, label:"Trefoil plate~High Power", dnaNameEn:"Trefoil plate", partClass:"Trefoilplate", skillName:"High Power", energy:1, damage:60, shield:130, partId:4},
  {dna: 34002, skillId:3402, label:"Fishbones~Hard Shield", dnaNameEn:"Fishbones", partClass:"Fishbones", skillName:"Hard Shield", energy:1, damage:70, shield:100, partId:4},
  {dna: 34003, skillId:3403, label:"Stone hands~Taunt", dnaNameEn:"Stone hands", partClass:"Stonehands", skillName:"Taunt", energy:1, damage:50, shield:130, partId:4},
  {dna: 34004, skillId:3404, label:"Pizza~Fire Attractor", dnaNameEn:"Pizza", partClass:"Pizza", skillName:"Fire Attractor", energy:1, damage:60, shield:125, partId:4},
  {dna: 34005, skillId:3405, label:"Christmas trees~Coma Shield", dnaNameEn:"Christmas trees", partClass:"Christmastrees", skillName:"Coma Shield", energy:1, damage:50, shield:130, partId:4},
  {dna: 35001, skillId:3501, label:"Rock wings~Mitigation", dnaNameEn:"Rock wings", partClass:"Rockwings", skillName:"Mitigation", energy:1, damage:65, shield:125, partId:5},
  {dna: 35002, skillId:3502, label:"Bat wings~Doom", dnaNameEn:"Bat wings", partClass:"Batwings", skillName:"Doom", energy:1, damage:75, shield:110, partId:5},
  {dna: 35003, skillId:3503, label:"Gargoyle wings~Wind Power", dnaNameEn:"Gargoyle wings", partClass:"Gargoylewings", skillName:"Wind Power", energy:1, damage:50, shield:70, partId:5},
  {dna: 35004, skillId:3504, label:"Demon wings~Thorn Armor", dnaNameEn:"Demon wings", partClass:"Demonwings", skillName:"Thorn Armor", energy:1, damage:70, shield:100, partId:5},
  {dna: 35005, skillId:3505, label:"Guardian wings~Tenacity", dnaNameEn:"Guardian wings", partClass:"Guardianwings", skillName:"Tenacity", energy:0, damage:50, shield:50, partId:5},
  {dna: 36001, skillId:3601, label:"Rock bomb~Daze Shield", dnaNameEn:"Rock bomb", partClass:"Rockbomb", skillName:"Daze Shield", energy:1, damage:75, shield:120, partId:6},
  {dna: 36002, skillId:3602, label:"Pinecone~Fortification", dnaNameEn:"Pinecone", partClass:"Pinecone", skillName:"Fortification", energy:1, damage:100, shield:120, partId:6},
  {dna: 36003, skillId:3603, label:"Turtle shell~Protector", dnaNameEn:"Turtle shell", partClass:"Turtleshell", skillName:"Protector", energy:1, damage:90, shield:125, partId:6},
  {dna: 36004, skillId:3604, label:"Seal~Shelter", dnaNameEn:"Seal", partClass:"Seal", skillName:"Shelter", energy:1, damage:130, shield:80, partId:6},
  {dna: 36005, skillId:3605, label:"Donut~Flak Jacket", dnaNameEn:"Donut", partClass:"Donut", skillName:"Flak Jacket", energy:0, damage:30, shield:50, partId:6},

  {dna: 43001, skillId:4301, label:"Green apple~Lethal", dnaNameEn:"Green apple", partClass:"Greenapple", skillName:"Lethal", energy:1, damage:140, shield:70, partId:3},
  {dna: 43002, skillId:4302, label:"Thorns~Noble Strike", dnaNameEn:"Thorns", partClass:"Thorns", skillName:"Noble Strike", energy:0, damage:160, shield:0, partId:3},
  {dna: 43003, skillId:4303, label:"Bud~Dispel", dnaNameEn:"Bud", partClass:"Bud", skillName:"Dispel", energy:1, damage:150, shield:50, partId:3},
  {dna: 43004, skillId:4304, label:"Cactus~Depression", dnaNameEn:"Cactus", partClass:"Cactus", skillName:"Depression", energy:1, damage:180, shield:50, partId:3},
  {dna: 43005, skillId:4305, label:"Fatty mushroom~Shackle", dnaNameEn:"Fatty mushroom", partClass:"Fattymushroom", skillName:"Shackle", energy:1, damage:150, shield:30, partId:3},
  {dna: 44001, skillId:4401, label:"Evergreen leaves~Stun", dnaNameEn:"Evergreen leaves", partClass:"Evergreenleaves", skillName:"Stun", energy:1, damage:80, shield:60, partId:4},
  {dna: 44002, skillId:4402, label:"Green leaves~Breakdown", dnaNameEn:"Green leaves", partClass:"Greenleaves", skillName:"Breakdown", energy:1, damage:150, shield:70, partId:4},
  {dna: 44003, skillId:4403, label:"Pea~Chill Wind", dnaNameEn:"Pea", partClass:"Pea", skillName:"Chill Wind", energy:1, damage:110, shield:50, partId:4},
  {dna: 44004, skillId:4404, label:"Lily~Noise", dnaNameEn:"Lily", partClass:"Lily", skillName:"Noise", energy:1, damage:140, shield:20, partId:4},
  {dna: 44005, skillId:4405, label:"Thorny~Avoid War", dnaNameEn:"Thorny", partClass:"Thorny", skillName:"Avoid War", energy:1, damage:130, shield:50, partId:4},
  {dna: 45001, skillId:4501, label:"Dragonfly wings~Distant Attack", dnaNameEn:"Dragonfly wings", partClass:"Dragonflywings", skillName:"Distant Attack", energy:1, damage:90, shield:30, partId:5},
  {dna: 45002, skillId:4502, label:"Colorful wings~Wind Blade", dnaNameEn:"Colorful wings", partClass:"Colorfulwings", skillName:"Wind Blade", energy:1, damage:80, shield:40, partId:5},
  {dna: 45003, skillId:4503, label:"Strangling wings~Hurricane", dnaNameEn:"Strangling wings", partClass:"Stranglingwings", skillName:"Hurricane", energy:1, damage:80, shield:40, partId:5},
  {dna: 45004, skillId:4504, label:"Green vines wings~Acceleration", dnaNameEn:"Green vines wings", partClass:"Greenvineswings", skillName:"Acceleration", energy:0, damage:0, shield:60, partId:5},
  {dna: 45005, skillId:4505, label:"Spot wings~Therapy Ban", dnaNameEn:"Spot wings", partClass:"Spotwings", skillName:"Therapy Ban", energy:1, damage:160, shield:50, partId:5},
  {dna: 46001, skillId:4601, label:"Shoots~Destroy", dnaNameEn:"Shoots", partClass:"Shoots", skillName:"Destroy", energy:1, damage:130, shield:50, partId:6},
  {dna: 46002, skillId:4602, label:"Venusaur~Defence", dnaNameEn:"Venusaur", partClass:"Venusaur", skillName:"Defence", energy:1, damage:140, shield:80, partId:6},
  {dna: 46003, skillId:4603, label:"Spring bud~Constraint", dnaNameEn:"Spring bud", partClass:"Springbud", skillName:"Constraint", energy:1, damage:160, shield:50, partId:6},
  {dna: 46004, skillId:4604, label:"Tasty mushroom~Stabbing", dnaNameEn:"Tasty mushroom", partClass:"Tastymushroom", skillName:"Stabbing", energy:0, damage:80, shield:10, partId:6},
  {dna: 46005, skillId:4605, label:"Carambola~Perfection", dnaNameEn:"Carambola", partClass:"Carambola", skillName:"Perfection", energy:1, damage:170, shield:55, partId:6},

  {dna: 53001, skillId:5301, label:"Magical horn~Thunderstorm", dnaNameEn:"Magical horn", partClass:"Magicalhorn", skillName:"Thunderstorm", energy:1, damage:180, shield:20, partId:3},
  {dna: 53002, skillId:5302, label:"Lemon~Flash Strike", dnaNameEn:"Lemon", partClass:"Lemon", skillName:"Flash Strike", energy:1, damage:190, shield:20, partId:3},
  {dna: 53003, skillId:5303, label:"Golden horn~Fierce strike", dnaNameEn:"Golden horn", partClass:"Goldenhorn", skillName:"Fierce strike", energy:0, damage:80, shield:10, partId:3},
  {dna: 53004, skillId:5304, label:"Cheese~Slap", dnaNameEn:"Cheese", partClass:"Cheese", skillName:"Slap", energy:1, damage:200, shield:10, partId:3},
  {dna: 53005, skillId:5305, label:"Ophidian steel plate~Dark horse", dnaNameEn:"Ophidian steel plate", partClass:"Ophidiansteelplate", skillName:"Dark horse", energy:1, damage:190, shield:20, partId:3},
  {dna: 54001, skillId:5401, label:"Golden fins~Allied", dnaNameEn:"Golden fins", partClass:"Goldenfins", skillName:"Allied", energy:1, damage:140, shield:100, partId:4},
  {dna: 54002, skillId:5402, label:"Feathers~Thunderbolt", dnaNameEn:"Feathers", partClass:"Feathers", skillName:"Thunderbolt", energy:1, damage:170, shield:50, partId:4},
  {dna: 54003, skillId:5403, label:"Plush ears~Thief", dnaNameEn:"Plush ears", partClass:"Plushears", skillName:"Thief", energy:1, damage:110, shield:10, partId:4},
  {dna: 54004, skillId:5404, label:"Light feathers~Painkiller", dnaNameEn:"Light feathers", partClass:"Lightfeathers", skillName:"Painkiller", energy:1, damage:100, shield:20, partId:4},
  {dna: 54005, skillId:5405, label:"Butterfly~Extract", dnaNameEn:"Butterfly", partClass:"Butterfly", skillName:"Extract", energy:1, damage:140, shield:40, partId:4},
  {dna: 55001, skillId:5501, label:"Fierce wings~Thunderstorm", dnaNameEn:"Fierce wings", partClass:"Fiercewings", skillName:"Thunderstorm", energy:1, damage:100, shield:10, partId:5},
  {dna: 55002, skillId:5502, label:"Lightning wings~Agile", dnaNameEn:"Lightning wings", partClass:"Lightningwings", skillName:"Agile", energy:0, damage:40, shield:20, partId:5},
  {dna: 55003, skillId:5503, label:"Sharp wings~Destruction", dnaNameEn:"Sharp wings", partClass:"Sharpwings", skillName:"Destruction", energy:1, damage:90, shield:30, partId:5},
  {dna: 55004, skillId:5504, label:"Torch wings~Stealth Attack", dnaNameEn:"Torch wings", partClass:"Torchwings", skillName:"Stealth Attack", energy:1, damage:120, shield:20, partId:5},
  {dna: 55005, skillId:5505, label:"Death wings~Speed Killer", dnaNameEn:"Death wings", partClass:"Deathwings", skillName:"Speed Killer", energy:1, damage:100, shield:20, partId:5},
  {dna: 56001, skillId:5601, label:"Lightning tail~Inspiration", dnaNameEn:"Lightning tail", partClass:"Lightningtail", skillName:"Inspiration", energy:0, damage:0, shield:70, partId:6},
  {dna: 56002, skillId:5602, label:"Bomb~Protector", dnaNameEn:"Bomb", partClass:"Bomb", skillName:"Protector", energy:1, damage:170, shield:50, partId:6},
  {dna: 56003, skillId:5603, label:"Bell~Seal-Rock", dnaNameEn:"Bell", partClass:"Bell", skillName:"Seal-Rock", energy:1, damage:160, shield:20, partId:6},
  {dna: 56004, skillId:5604, label:"Golden cheess~Thunder Axe", dnaNameEn:"Golden cheess", partClass:"Goldencheess", skillName:"Thunder Axe", energy:1, damage:190, shield:20, partId:6},
  {dna: 56005, skillId:5605, label:"Thunder bomb~Angry Strike", dnaNameEn:"Thunder bomb", partClass:"Thunderbomb", skillName:"Angry Strike", energy:1, damage:200, shield:30, partId:6}
];

var cardContainer = document.getElementById('cardsList');
var race;
var cardType;
for (var i = 0; i < partsList.length; i++) {

  race = partsList[i].dna.toString();

  switch (race.substring(0, 1)) {
    case '1':
      cardType = 'Water';
      break;

    case '2':
      cardType = 'Fire';
      break;

    case '3':
      cardType = 'Rock';
      break;

    case '4':
      cardType = 'Storm';
      break;

    case '5':
      cardType = 'Thunder';
      break;
    default:

  }

  cardContainer.innerHTML += '<div class="col l3 m4 s6"><div class="card dragon_card"><div class="card-image"><img class="dragon_skill-image" src="../Skills/Skill_' + partsList[i].dnaNameEn + '.png" /><button class="btn-floating waves-effect waves-light yellow skill_stats skill_stats-energy"><p class="dragon_skill-energy">' + partsList[i].energy + ' </p></button><button class="btn-floating waves-effect waves-light red skill_stats skill_stats-damage"><p class="dragon_skill-damage">' + partsList[i].damage + ' </p></button><button class="btn-floating waves-effect waves-light red skill_stats skill_stats-damage-bg"></button><button class="btn-floating waves-effect waves-light blue skill_stats skill_stats-shield"><p class="dragon_skill-shield">' + partsList[i].shield + ' </p></button><button class="btn-floating waves-effect waves-light blue skill_stats skill_stats-shield-bg"></button></div><div class="card-content dragon_card-content dragon_card-content' + cardType + '"><p class="dragon_skill-title dragon_skill">' + partsList[i].skillName + ' </p><p class="dragon_skill-part">' + partsList[i].dnaNameEn + ' </p><p class="dragon_skill-description">' + 'Skill description is not available at the moment.' + ' </p></div><button class="btn-floating waves-effect waves-light white skill_stats skill_stats-type z-depth-0"><div class="dragon_skill-type dragon_skill-type' + cardType + '"></div></button></div></div>';
}
