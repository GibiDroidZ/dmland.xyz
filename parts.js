var partsList = [
  {dna: 11001, skillId:0, label:"Obsidian", dnaNameEn:"Obsidian", partClass:"Obsidian", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 11002, skillId:0, label:"Amber", dnaNameEn:"Amber", partClass:"Amber", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 11003, skillId:0, label:"Pearl", dnaNameEn:"Pearl", partClass:"Pearl", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 11004, skillId:0, label:"Ocean tears", dnaNameEn:"Ocean tears", partClass:"Oceantears", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 11005, skillId:0, label:"Sapphire", dnaNameEn:"Sapphire", partClass:"Sapphire", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 12001, skillId:0, label:"Turtle", dnaNameEn:"Turtle", partClass:"Turtle", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 12002, skillId:0, label:"Poseidon medal", dnaNameEn:"Poseidon medal", partClass:"Poseidonmedal", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 12003, skillId:0, label:"Starfish", dnaNameEn:"Starfish", partClass:"Starfish", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 12004, skillId:0, label:"Frozen conch", dnaNameEn:"Frozen conch", partClass:"Frozenconch", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 12005, skillId:0, label:"Ocean gem", dnaNameEn:"Ocean gem", partClass:"Oceangem", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 13001, skillId:1301, label:"Ice gem~Recovery", dnaNameEn:"Ice gem", partClass:"Icegem", skillName:"Recovery", skillDesc:"Heal myself with 190 HP.", energy:1, damage:0, shield:100, partId:3},
  {dna: 13002, skillId:1302, label:"Ocean lights~Toxic Stinger", dnaNameEn:"Ocean lights", partClass:"Oceanlights", skillName:"Toxic Stinger", skillDesc:"Combine with any card & inflict 2 layers of poison.", energy:0, damage:30, shield:40, partId:3},
  {dna: 13003, skillId:1303, label:"Waves~Toxic Surface", dnaNameEn:"Waves", partClass:"Waves", skillName:"Toxic Surface", skillDesc:"If attacked, apply 1 level of poison.", energy:1, damage:100, shield:110, partId:3},
  {dna: 13004, skillId:1304, label:"Ocean horn~Vampire", dnaNameEn:"Ocean horn", partClass:"Oceanhorn", skillName:"Vampire", skillDesc:"If shield breaks, 50% of the damage dealt heals me.", energy:1, damage:120, shield:80, partId:3},
  {dna: 13005, skillId:1305, label:"Ice-blue coral~Banned Horns", dnaNameEn:"Ice-blue coral", partClass:"Ice-bluecoral", skillName:"Banned Horns", skillDesc:"Block enemy target from using 'horn' cards.", energy:1, damage:90, shield:105, partId:3},
  {dna: 14001, skillId:1401, label:"Actinia~Life Horn", dnaNameEn:"Actinia", partClass:"Actinia", skillName:"Life Horn", skillDesc:"Heal 160 HP for a teammate directly in front of me.", energy:1, damage:0, shield:105, partId:4},
  {dna: 14002, skillId:1402, label:"Ice claws~Healing Water", dnaNameEn:"Ice claws", partClass:"Iceclaws", skillName:"Healing Water", skillDesc:"Heal all teammates for 100 HP.", energy:1, damage:0, shield:100, partId:4},
  {dna: 14003, skillId:1403, label:"Tentacles~Water Blessing", dnaNameEn:"Tentacles", partClass:"Tentacles", skillName:"Water Blessing", skillDesc:"Heal myself for 30 HP for every Water part.", energy:1, damage:0, shield:65, partId:4},
  {dna: 14004, skillId:1404, label:"Magical shells~Therapist", dnaNameEn:"Magical shells", partClass:"Magicalshells", skillName:"Therapist", skillDesc:"Combine with any card & heal myself for 150 HP.", energy:1, damage:0, shield:135, partId:4},
  {dna: 14005, skillId:1405, label:"Flying feathers~Damage Tool", dnaNameEn:"Flying feathers", partClass:"Flyingfeathers", skillName:"Damage Tool", skillDesc:"If target is poisoned, increase attack by 10% for 2 turns.", energy:1, damage:110, shield:105, partId:4},
  {dna: 15001, skillId:1501, label:"Dream wings~Purifier", dnaNameEn:"Dream wings", partClass:"Dreamwings", skillName:"Purifier", skillDesc:"Dispel all negative effects for teammates.", energy:1, damage:60, shield:50, partId:5},
  {dna: 15002, skillId:1502, label:"Frozen wings~Water Power", dnaNameEn:"Frozen wings", partClass:"Frozenwings", skillName:"Water Power", skillDesc:"Combine with any water card to gain 1 energy.", energy:1, damage:50, shield:60, partId:5},
  {dna: 15003, skillId:1503, label:"Whale wings~Flame-sucker", dnaNameEn:"Whale wings", partClass:"Whalewings", skillName:"Flame-sucker", skillDesc:"If attacked by a fire card, regain 1 energy.", energy:1, damage:70, shield:40, partId:5},
  {dna: 15004, skillId:1504, label:"Seahorse wings~Firefighter", dnaNameEn:"Seahorse wings", partClass:"Seahorsewings", skillName:"Firefighter", skillDesc:"If my shield breaks, I attack the fire dragon target.", energy:1, damage:60, shield:50, partId:5},
  {dna: 15005, skillId:1505, label:"Ocean wings~Repell Shield", dnaNameEn:"Ocean wings", partClass:"Oceanwings", skillName:"Repell Shield", skillDesc:"Combine with any card to remove my own negative effect.", energy:0, damage:30, shield:30, partId:5},
  {dna: 16001, skillId:1601, label:"Sea snail~Life Fountain", dnaNameEn:"Sea snail", partClass:"Seasnail", skillName:"Life Fountain", skillDesc:"If attacked by a fire or thunder card, restore 30 HP.", energy:0, damage:40, shield:40, partId:6},
  {dna: 16002, skillId:1602, label:"Ice pick~Energy Tide", dnaNameEn:"Ice pick", partClass:"Icepick", skillName:"Energy Tide", skillDesc:"Combine with any thunder card and gain 1 energy.", energy:1, damage:70, shield:120, partId:6},
  {dna: 16003, skillId:1603, label:"Undersea music~Tail Strikes", dnaNameEn:"Undersea music", partClass:"Underseamusic", skillName:"Tail Strikes", skillDesc:"Prohibit enemy from using tail cards on their next turn.", energy:1, damage:120, shield:90, partId:6},
  {dna: 16004, skillId:1604, label:"Anchor~Chilly Condition", dnaNameEn:"Anchor", partClass:"Anchor", skillName:"Chilly Condition", skillDesc:"Slow target's speed 10% for 2 turns if attacked by a fire or thunder dragon.", energy:1, damage:70, shield:130, partId:6},
  {dna: 16005, skillId:1605, label:"Dream gem~Grace", dnaNameEn:"Dream gem", partClass:"Dreamgem", skillName:"Grace", skillDesc:"If shield intact, I can draw 1 card.", energy:1, damage:100, shield:100, partId:6},

  {dna: 21001, skillId:0, label:"Fire wheels", dnaNameEn:"Fire wheels", partClass:"Firewheels", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 21002, skillId:0, label:"Red pupils", dnaNameEn:"Red pupils", partClass:"Redpupils", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 21003, skillId:0, label:"Burning heart", dnaNameEn:"Burning heart", partClass:"Burningheart", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 21004, skillId:0, label:"Burning agate", dnaNameEn:"Burning agate", partClass:"Burningagate", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 21005, skillId:0, label:"Blazing pupils", dnaNameEn:"Blazing pupils", partClass:"Blazingpupils", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 22001, skillId:0, label:"Small volcanos", dnaNameEn:"Small volcanos", partClass:"Smallvolcanos", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 22002, skillId:0, label:"Flaming stones", dnaNameEn:"Flaming stones", partClass:"Flamingstones", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 22003, skillId:0, label:"Flaming slate", dnaNameEn:"Flaming slate", partClass:"Flamingslate", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 22004, skillId:0, label:"Vulcan totem", dnaNameEn:"Vulcan totem", partClass:"Vulcantotem", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 22005, skillId:0, label:"Blazing heart", dnaNameEn:"Blazing heart", partClass:"Blazingheart", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 23001, skillId:2301, label:"Flint~Spotlight", dnaNameEn:"Flint", partClass:"Flint", skillName:"Spotlight", skillDesc:"Increase my attack by 10% for 2 rounds.", energy:0, damage:0, shield:65, partId:3},
  {dna: 23002, skillId:2302, label:"Flame stone~Slam", dnaNameEn:"Flame stone", partClass:"Flamestone", skillName:"Slam", skillDesc:"Attack rock or thunder dragons to increase damage by 10%.", energy:1, damage:170, shield:70, partId:3},
  {dna: 23003, skillId:2303, label:"Lava~Inspiration", dnaNameEn:"Lava", partClass:"Lava", skillName:"Inspiration", skillDesc:"If your blood is not more than 50%, increase attack by 10%.", energy:1, damage:180, shield:40, partId:3},
  {dna: 23004, skillId:2304, label:"Flame crystal~Mr. Killer", dnaNameEn:"Flame crystal", partClass:"Flamecrystal", skillName:"Mr. Killer", skillDesc:"If attacking a thunder dragon, card deals 120% damage.", energy:1, damage:190, shield:20, partId:3},
  {dna: 23005, skillId:2305, label:"Burning-ax~Fury", dnaNameEn:"Burning-ax", partClass:"Burning-ax", skillName:"Fury", skillDesc:"If self-poisoned, inflicts 150% card damage.", energy:1, damage:160, shield:50, partId:3},
  {dna: 24001, skillId:2401, label:"Flaming wings~Flame Guard", dnaNameEn:"Flaming wings", partClass:"Flamingwings", skillName:"Flame Guard", skillDesc:"If attacked by a thunder card, it's damage is reduced by 10%.", energy:1, damage:170, shield:60, partId:4},
  {dna: 24002, skillId:2402, label:"Lava rock~Burning Fires", dnaNameEn:"Lava rock", partClass:"Lavarock", skillName:"Burning Fires", skillDesc:"Combine with the Flaming Blow card to deliver 120% damage.", energy:1, damage:190, shield:30, partId:4},
  {dna: 24003, skillId:2403, label:"Magma slate~Flame Power", dnaNameEn:"Magma slate", partClass:"Magmaslate", skillName:"Flame Power", skillDesc:"Combined with any card to gain 1 energy.", energy:1, damage:100, shield:20, partId:4},
  {dna: 24004, skillId:2404, label:"Watermelon~Fire Bullet", dnaNameEn:"Watermelon", partClass:"Watermelon", skillName:"Fire Bullet", skillDesc:"Attack a rock dragon to destroy an opponent's card.", energy:1, damage:150, shield:40, partId:4},
  {dna: 24005, skillId:2405, label:"Fire blade~Fatal Strike", dnaNameEn:"Fire blade", partClass:"Fireblade", skillName:"Fatal Strike", skillDesc:"If target is in a dying state, this card kills them.", energy:1, damage:190, shield:40, partId:4},
  {dna: 25001, skillId:2501, label:"Fire wings~Catcher", dnaNameEn:"Fire wings", partClass:"Firewings", skillName:"Catcher", skillDesc:"Combine with any 2 cards to attack the fastest target.", energy:1, damage:70, shield:40, partId:5},
  {dna: 25002, skillId:2502, label:"Blast wings~Fireball Art", dnaNameEn:"Blast wings", partClass:"Blastwings", skillName:"Fireball Art", skillDesc:"Combine with storm card to give priority to attack storm dragons.", energy:1, damage:90, shield:30, partId:5},
  {dna: 25003, skillId:2503, label:"Inferno soulwings~Insight", dnaNameEn:"Inferno soulwings", partClass:"Infernosoulwings", skillName:"Insight", skillDesc:"If target is slower than me, increase attack by 10% for 2 rounds.", energy:0, damage:70, shield:10, partId:5},
  {dna: 25004, skillId:2504, label:"Balefire wings~Acceleration", dnaNameEn:"Balefire wings", partClass:"Balefirewings", skillName:"Acceleration", skillDesc:"Speed is increased by 10% for 2 rounds.", energy:1, damage:180, shield:50, partId:5},
  {dna: 25005, skillId:2505, label:"Crimson wings~Intake", dnaNameEn:"Crimson wings", partClass:"Crimsonwings", skillName:"Intake", skillDesc:"Combine with one storm card to gain 1 energy.", energy:1, damage:60, shield:50, partId:5},
  {dna: 26001, skillId:2601, label:"Hot stone~Breaker", dnaNameEn:"Hot stone", partClass:"Hotstone", skillName:"Breaker", skillDesc:"Reduces target's defense by 10% for 2 rounds.", energy:1, damage:180, shield:50, partId:6},
  {dna: 26002, skillId:2602, label:"Meteorite~Flaming Blow", dnaNameEn:"Meteorite", partClass:"Meteorite", skillName:"Flaming Blow", skillDesc:"Combine with the Burning Fires card to deliver 120% damage.", energy:1, damage:190, shield:30, partId:6},
  {dna: 26003, skillId:2603, label:"Flaming grapes~Scorching", dnaNameEn:"Flaming grapes", partClass:"Flaminggrapes", skillName:"Scorching", skillDesc:"Combine any card to apply 1 level of burn to the enemy.", energy:1, damage:160, shield:70, partId:6},
  {dna: 26004, skillId:2604, label:"Red apple~Rage", dnaNameEn:"Red apple", partClass:"Redapple", skillName:"Rage", skillDesc:"If I'm in a dying state, my damage is +10%.", energy:1, damage:190, shield:30, partId:6},
  {dna: 26005, skillId:2605, label:"Pitaya~Aid Troop", dnaNameEn:"Pitaya", partClass:"Pitaya", skillName:"Aid Troop", skillDesc:"Draw 1 card at random.", energy:0, damage:50, shield:10, partId:6},

  {dna: 31001, skillId:0, label:"Black gem", dnaNameEn:"Black gem", partClass:"Blackgem", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 31002, skillId:0, label:"Shiitake", dnaNameEn:"Shiitake", partClass:"Shiitake", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 31003, skillId:0, label:"Flush", dnaNameEn:"Flush", partClass:"Flush", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 31004, skillId:0, label:"Diamond plaid", dnaNameEn:"Diamond plaid", partClass:"Diamondplaid", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 31005, skillId:0, label:"Joy", dnaNameEn:"Joy", partClass:"Joy", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 32001, skillId:0, label:"Pebbles", dnaNameEn:"Pebbles", partClass:"Pebbles", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 32002, skillId:0, label:"Gray rocks", dnaNameEn:"Gray rocks", partClass:"Grayrocks", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 32003, skillId:0, label:"Band-Aids", dnaNameEn:"Band-Aids", partClass:"Band-Aids", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 32004, skillId:0, label:"Entomolite", dnaNameEn:"Entomolite", partClass:"Entomolite", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 32005, skillId:0, label:"Black beans", dnaNameEn:"Black beans", partClass:"Blackbeans", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 33001, skillId:3301, label:"Earthen wall~Body Armor", dnaNameEn:"Earthen wall", partClass:"Earthenwall", skillName:"Body Armor", skillDesc:"Increases my defense by 10% for 2 rounds.", energy:0, damage:0, shield:60, partId:3},
  {dna: 33002, skillId:3302, label:"Ice cream~Guarding", dnaNameEn:"Ice cream", partClass:"Icecream", skillName:"Guarding", skillDesc:"If attacked by a thunder dragon, reduce chance of critical hit by 10%.", energy:1, damage:70, shield:130, partId:3},
  {dna: 33003, skillId:3303, label:"Chocolate ice cream~Ground Spikes", dnaNameEn:"Chocolate ice cream", partClass:"Chocolateicecream", skillName:"Ground Spikes", skillDesc:"If my shield is intact increase attack 10%.", energy:1, damage:125, shield:100, partId:3},
  {dna: 33004, skillId:3304, label:"Stone mushroom~Thorn Shield", dnaNameEn:"Stone mushroom", partClass:"Stonemushroom", skillName:"Thorn Shield", skillDesc:"If attacked by a melee card, restore 30% of damage taken.", energy:1, damage:60, shield:110, partId:3},
  {dna: 33005, skillId:3305, label:"Stone hammer~Shield Healer", dnaNameEn:"Stone hammer", partClass:"Stonehammer", skillName:"Shield Healer", skillDesc:"If my shield is intact at the end of the round, 120 HP increase.", energy:1, damage:70, shield:100, partId:3},
  {dna: 34001, skillId:3401, label:"Trefoil plate~High Power", dnaNameEn:"Trefoil plate", partClass:"Trefoilplate", skillName:"High Power", skillDesc:"If my blood is below 50%, damage received is reduced by 10%.", energy:1, damage:60, shield:130, partId:4},
  {dna: 34002, skillId:3402, label:"Fishbones~Hard Shield", dnaNameEn:"Fishbones", partClass:"Fishbones", skillName:"Hard Shield", skillDesc:"Recover 20 shield points per mini-turn during the round.", energy:1, damage:70, shield:100, partId:4},
  {dna: 34003, skillId:3403, label:"Stone hands~Taunt", dnaNameEn:"Stone hands", partClass:"Stonehands", skillName:"Taunt", skillDesc:"If you have 2+ Dragons, taunt to receive attack this turn.", energy:1, damage:50, shield:130, partId:4},
  {dna: 34004, skillId:3404, label:"Pizza~Fire Attractor", dnaNameEn:"Pizza", partClass:"Pizza", skillName:"Fire Attractor", skillDesc:"If attack last, taunt to make them attack me during this round.", energy:1, damage:60, shield:125, partId:4},
  {dna: 34005, skillId:3405, label:"Christmas trees~Coma Shield", dnaNameEn:"Christmas trees", partClass:"Christmastrees", skillName:"Coma Shield", skillDesc:"When my shield is broken, inflict coma on my enemy.", energy:1, damage:50, shield:130, partId:4},
  {dna: 35001, skillId:3501, label:"Rock wings~Mitigation", dnaNameEn:"Rock wings", partClass:"Rockwings", skillName:"Mitigation", skillDesc:"10% reduction in damage.", energy:1, damage:65, shield:125, partId:5},
  {dna: 35002, skillId:3502, label:"Bat wings~Doom", dnaNameEn:"Bat wings", partClass:"Batwings", skillName:"Doom", skillDesc:"Inflicts doom on the enemy for 2 rounds.", energy:1, damage:75, shield:110, partId:5},
  {dna: 35003, skillId:3503, label:"Gargoyle wings~Wind Power", dnaNameEn:"Gargoyle wings", partClass:"Gargoylewings", skillName:"Wind Power", skillDesc:"If attacked by a storm card, gain 1 energy.", energy:1, damage:50, shield:70, partId:5},
  {dna: 35004, skillId:3504, label:"Demon wings~Thorn Armor", dnaNameEn:"Demon wings", partClass:"Demonwings", skillName:"Thorn Armor", skillDesc:"If attacked by a remote card, restore 30% of damage taken.", energy:1, damage:70, shield:100, partId:5},
  {dna: 35005, skillId:3505, label:"Guardian wings~Tenacity", dnaNameEn:"Guardian wings", partClass:"Guardianwings", skillName:"Tenacity", skillDesc:"Increase shield value by 20 points for every 1 debuff I have.", energy:0, damage:50, shield:50, partId:5},
  {dna: 36001, skillId:3601, label:"Rock bomb~Daze Shield", dnaNameEn:"Rock bomb", partClass:"Rockbomb", skillName:"Daze Shield", skillDesc:"If my shield breaks, inflict a daze on the enemy for 1 round.", energy:1, damage:75, shield:120, partId:6},
  {dna: 36002, skillId:3602, label:"Pinecone~Fortification", dnaNameEn:"Pinecone", partClass:"Pinecone", skillName:"Fortification", skillDesc:"Combine with any rock or water card to increase defense by 10% for 2 turns.", energy:1, damage:100, shield:120, partId:6},
  {dna: 36003, skillId:3603, label:"Turtle shell~Protector", dnaNameEn:"Turtle shell", partClass:"Turtleshell", skillName:"Protector", skillDesc:"If I'm slower than the target, defense is increased by 10% for 2 rounds.", energy:1, damage:90, shield:125, partId:6},
  {dna: 36004, skillId:3604, label:"Seal~Shelter", dnaNameEn:"Seal", partClass:"Seal", skillName:"Shelter", skillDesc:"50% damage dealt by this card is converted into a shield.", energy:1, damage:130, shield:80, partId:6},
  {dna: 36005, skillId:3605, label:"Donut~Flak Jacket", dnaNameEn:"Donut", partClass:"Donut", skillName:"Flak Jacket", skillDesc:"Shield value is increased by 10%.", energy:0, damage:30, shield:50, partId:6},

  {dna: 41001, skillId:0, label:"Hawkeye", dnaNameEn:"Hawkeye", partClass:"Hawkeye", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 41002, skillId:0, label:"Vine", dnaNameEn:"Vine", partClass:"Vine", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 41003, skillId:0, label:"Iris", dnaNameEn:"Iris", partClass:"Iris", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 41004, skillId:0, label:"leaf", dnaNameEn:"leaf", partClass:"leaf", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 41005, skillId:0, label:"Kiwi", dnaNameEn:"Kiwi", partClass:"Kiwi", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 42001, skillId:0, label:"Bamboo leaf", dnaNameEn:"Bamboo leaf", partClass:"Bambooleaf", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 42002, skillId:0, label:"Periwinkle", dnaNameEn:"Periwinkle", partClass:"Periwinkle", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 42003, skillId:0, label:"Water lotus", dnaNameEn:"Water lotus", partClass:"Waterlotus", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 42004, skillId:0, label:"Ladybug", dnaNameEn:"Ladybug", partClass:"Ladybug", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 42005, skillId:0, label:"Petals", dnaNameEn:"Petals", partClass:"Petals", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 43001, skillId:4301, label:"Green apple~Lethal", dnaNameEn:"Green apple", partClass:"Greenapple", skillName:"Lethal", skillDesc:"Combine with any 2 cards to make enemy vulnerable.", energy:1, damage:140, shield:70, partId:3},
  {dna: 43002, skillId:4302, label:"Thorns~Noble Strike", dnaNameEn:"Thorns", partClass:"Thorns", skillName:"Noble Strike", skillDesc:"Deduct 20% of my life to inflict more damage.", energy:0, damage:160, shield:0, partId:3},
  {dna: 43003, skillId:4303, label:"Bud~Dispel", dnaNameEn:"Bud", partClass:"Bud", skillName:"Dispel", skillDesc:"Dispels all buffs from the target.", energy:1, damage:150, shield:50, partId:3},
  {dna: 43004, skillId:4304, label:"Cactus~Depression", dnaNameEn:"Cactus", partClass:"Cactus", skillName:"Depression", skillDesc:"Reduce the enemy's life force by 10% for 2 rounds.", energy:1, damage:180, shield:50, partId:3},
  {dna: 43005, skillId:4305, label:"Fatty mushroom~Shackle", dnaNameEn:"Fatty mushroom", partClass:"Fattymushroom", skillName:"Shackle", skillDesc:"Combine with a fire or thunder card to ban the target's remote card.", energy:1, damage:150, shield:30, partId:3},
  {dna: 44001, skillId:4401, label:"Evergreen leaves~Stun", dnaNameEn:"Evergreen leaves", partClass:"Evergreenleaves", skillName:"Stun", skillDesc:"Combine with any card to stun the enemy.", energy:1, damage:80, shield:60, partId:4},
  {dna: 44002, skillId:4402, label:"Green leaves~Breakdown", dnaNameEn:"Green leaves", partClass:"Greenleaves", skillName:"Breakdown", skillDesc:"Decreases a water dragon's defense by 10% for 2 rounds.", energy:1, damage:150, shield:70, partId:4},
  {dna: 44003, skillId:4403, label:"Pea~Chill Wind", dnaNameEn:"Pea", partClass:"Pea", skillName:"Chill Wind", skillDesc:"If attacking a rock, water, or fire dragon apply a chill for 2 rounds.", energy:1, damage:110, shield:50, partId:4},
  {dna: 44004, skillId:4404, label:"Lily~Noise", dnaNameEn:"Lily", partClass:"Lily", skillName:"Noise", skillDesc:"Inflicting fright on the enemy.", energy:1, damage:140, shield:20, partId:4},
  {dna: 44005, skillId:4405, label:"Thorny~Avoid War", dnaNameEn:"Thorny", partClass:"Thorny", skillName:"Avoid War", skillDesc:"Applying war avoidance to a target.", energy:1, damage:130, shield:50, partId:4},
  {dna: 45001, skillId:4501, label:"Dragonfly wings~Distant Attack", dnaNameEn:"Dragonfly wings", partClass:"Dragonflywings", skillName:"Distant Attack", skillDesc:"Attack the most distant target.", energy:1, damage:90, shield:30, partId:5},
  {dna: 45002, skillId:4502, label:"Colorful wings~Wind Blade", dnaNameEn:"Colorful wings", partClass:"Colorfulwings", skillName:"Wind Blade", skillDesc:"If enemy has 2+ monsters, skip the nearest target and attack.", energy:1, damage:80, shield:40, partId:5},
  {dna: 45003, skillId:4503, label:"Strangling wings~Hurricane", dnaNameEn:"Strangling wings", partClass:"Stranglingwings", skillName:"Hurricane", skillDesc:"Attack the target with the least amount of HP.", energy:1, damage:80, shield:40, partId:5},
  {dna: 45004, skillId:4504, label:"Green vines wings~Acceleration", dnaNameEn:"Green vines wings", partClass:"Greenvineswings", skillName:"Acceleration", skillDesc:"Increase speed by 10% for 2 rounds.", energy:0, damage:0, shield:60, partId:5},
  {dna: 45005, skillId:4505, label:"Spot wings~Therapy Ban", dnaNameEn:"Spot wings", partClass:"Spotwings", skillName:"Therapy Ban", skillDesc:"Prohibits the target from receiving any healing for 2 rounds.", energy:1, damage:160, shield:50, partId:5},
  {dna: 46001, skillId:4601, label:"Shoots~Destroy", dnaNameEn:"Shoots", partClass:"Shoots", skillName:"Destroy", skillDesc:"Destroy 1 card.", energy:1, damage:130, shield:50, partId:6},
  {dna: 46002, skillId:4602, label:"Venusaur~Defence", dnaNameEn:"Venusaur", partClass:"Venusaur", skillName:"Defence", skillDesc:"If attacked by a Rock Card reduce defense by 10% for 2 round.", energy:1, damage:140, shield:80, partId:6},
  {dna: 46003, skillId:4603, label:"Spring bud~Constraint", dnaNameEn:"Spring bud", partClass:"Springbud", skillName:"Constraint", skillDesc:"If blood is not more than 80%, reduce target's speed by 10% for 2 rounds.", energy:1, damage:160, shield:50, partId:6},
  {dna: 46004, skillId:4604, label:"Tasty mushroom~Stabbing", dnaNameEn:"Tasty mushroom", partClass:"Tastymushroom", skillName:"Stabbing", skillDesc:"Combine with any card to inflict 120% card damage.", energy:0, damage:80, shield:10, partId:6},
  {dna: 46005, skillId:4605, label:"Carambola~Perfection", dnaNameEn:"Carambola", partClass:"Carambola", skillName:"Perfection", skillDesc:"If blood is not less than 100%, then inflict 120% damage.", energy:1, damage:170, shield:55, partId:6},

  {dna: 51001, skillId:0, label:"Thunder stone", dnaNameEn:"Thunder stone", partClass:"Thunderstone", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 51002, skillId:0, label:"Vicious pupils", dnaNameEn:"Vicious pupils", partClass:"Viciouspupils", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 51003, skillId:0, label:"Pentagonal biscuit", dnaNameEn:"Pentagonal biscuit", partClass:"Pentagonalbiscuit", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 51004, skillId:0, label:"Sparkling pupils", dnaNameEn:"Sparkling pupils", partClass:"Sparklingpupils", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 51005, skillId:0, label:"Lightning pupils", dnaNameEn:"Lightning pupils", partClass:"Lightningpupils", skillName:"", energy:0, damage:0, shield:0, partId:1},
  {dna: 52001, skillId:0, label:"Stabs", dnaNameEn:"Stabs", partClass:"Stabs", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 52002, skillId:0, label:"Ancestral totems", dnaNameEn:"Ancestral totems", partClass:"Ancestraltotems", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 52003, skillId:0, label:"Ancient medal", dnaNameEn:"Ancient medal", partClass:"Ancientmedal", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 52004, skillId:0, label:"Star", dnaNameEn:"Star", partClass:"Star", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 52005, skillId:0, label:"Time totem", dnaNameEn:"Time totem", partClass:"Timetotem", skillName:"", energy:0, damage:0, shield:0, partId:2},
  {dna: 53001, skillId:5301, label:"Magical horn~Thunderstorm", dnaNameEn:"Magical horn", partClass:"Magicalhorn", skillName:"Thunderstorm", skillDesc:"Combine with 2 thunder cards for attack to be a critical hit.", energy:1, damage:180, shield:20, partId:3},
  {dna: 53002, skillId:5302, label:"Lemon~Flash Strike", dnaNameEn:"Lemon", partClass:"Lemon", skillName:"Flash Strike", skillDesc:"Combine with the 'Thunder Axe' card to deal 120% damage.", energy:1, damage:190, shield:20, partId:3},
  {dna: 53003, skillId:5303, label:"Golden horn~Fierce strike", dnaNameEn:"Golden horn", partClass:"Goldenhorn", skillName:"Fierce strike", skillDesc:"If target's shield is intact, increase critical damage by 20%.", energy:0, damage:80, shield:10, partId:3},
  {dna: 53004, skillId:5304, label:"Cheese~Slap", dnaNameEn:"Cheese", partClass:"Cheese", skillName:"Slap", skillDesc:"Combine with any card to inflict 120% damage.", energy:1, damage:200, shield:10, partId:3},
  {dna: 53005, skillId:5305, label:"Ophidian steel plate~Dark horse", dnaNameEn:"Ophidian steel plate", partClass:"Ophidiansteelplate", skillName:"Dark horse", skillDesc:"Attack last to inflict 130% card damage.", energy:1, damage:190, shield:20, partId:3},
  {dna: 54001, skillId:5401, label:"Golden fins~Allied", dnaNameEn:"Golden fins", partClass:"Goldenfins", skillName:"Allied", skillDesc:"Combine with rock cards to increase 10% shield point.", energy:1, damage:140, shield:100, partId:4},
  {dna: 54002, skillId:5402, label:"Feathers~Thunderbolt", dnaNameEn:"Feathers", partClass:"Feathers", skillName:"Thunderbolt", skillDesc:"All teamates have a +10% chance to deal a critical hit during the turn.", energy:1, damage:170, shield:50, partId:4},
  {dna: 54003, skillId:5403, label:"Plush ears~Thief", dnaNameEn:"Plush ears", partClass:"Plushears", skillName:"Thief", skillDesc:"Combine with any card to steal 1 energy.", energy:1, damage:110, shield:10, partId:4},
  {dna: 54004, skillId:5404, label:"Light feathers~Painkiller", dnaNameEn:"Light feathers", partClass:"Lightfeathers", skillName:"Painkiller", skillDesc:"If my shield is broken, recover 1 energy after attack.", energy:1, damage:100, shield:20, partId:4},
  {dna: 54005, skillId:5405, label:"Butterfly~Extract", dnaNameEn:"Butterfly", partClass:"Butterfly", skillName:"Extract", skillDesc:"Extract 1 card.", energy:1, damage:140, shield:40, partId:4},
  {dna: 55001, skillId:5501, label:"Fierce wings~Thunderstorm", dnaNameEn:"Fierce wings", partClass:"Fiercewings", skillName:"Thunderstorm", skillDesc:"A successful critical hit during the turn increases 1 energy.", energy:1, damage:100, shield:10, partId:5},
  {dna: 55002, skillId:5502, label:"Lightning wings~Agile", dnaNameEn:"Lightning wings", partClass:"Lightningwings", skillName:"Agile", skillDesc:"Combine with a water card to increase speed by 10% for 2 rounds.", energy:0, damage:40, shield:20, partId:5},
  {dna: 55003, skillId:5503, label:"Sharp wings~Destruction", dnaNameEn:"Sharp wings", partClass:"Sharpwings", skillName:"Destruction", skillDesc:"Destroy enemy's energy by 1 point.", energy:1, damage:90, shield:30, partId:5},
  {dna: 55004, skillId:5504, label:"Torch wings~Stealth Attack", dnaNameEn:"Torch wings", partClass:"Torchwings", skillName:"Stealth Attack", skillDesc:"Priority attack on the slowest target.", energy:1, damage:120, shield:20, partId:5},
  {dna: 55005, skillId:5505, label:"Death wings~Speed Killer", dnaNameEn:"Death wings", partClass:"Deathwings", skillName:"Speed Killer", skillDesc:"Priority attack on the fastest target.", energy:1, damage:100, shield:20, partId:5},
  {dna: 56001, skillId:5601, label:"Lightning tail~Inspiration", dnaNameEn:"Lightning tail", partClass:"Lightningtail", skillName:"Inspiration", skillDesc:"Increase life force by 10% for 2 rounds.", energy:0, damage:0, shield:70, partId:6},
  {dna: 56002, skillId:5602, label:"Bomb~Protector", dnaNameEn:"Bomb", partClass:"Bomb", skillName:"Protector", skillDesc:"If my shield breaks, increase my defense by 10% for 2 rounds.", energy:1, damage:170, shield:50, partId:6},
  {dna: 56003, skillId:5603, label:"Bell~Seal-Rock", dnaNameEn:"Bell", partClass:"Bell", skillName:"Seal-Rock", skillDesc:"Ban the target from using rock cards next turn.", energy:1, damage:160, shield:20, partId:6},
  {dna: 56004, skillId:5604, label:"Golden cheess~Thunder Axe", dnaNameEn:"Golden cheess", partClass:"Goldencheess", skillName:"Thunder Axe", skillDesc:"Combine with the 'Flash Strike' card to deal 120% damage.", energy:1, damage:190, shield:20, partId:6},
  {dna: 56005, skillId:5605, label:"Thunder bomb~Angry Strike", dnaNameEn:"Thunder bomb", partClass:"Thunderbomb", skillName:"Angry Strike", skillDesc:"If I'm in a dying state, this attack must be critical hit.", energy:1, damage:200, shield:30, partId:6}
];

var partsList_eye = [];
var partsList_totem = [];
var partsList_horn = [];
var partsList_ear = [];
var partsList_wing = [];
var partsList_tail = [];
var partsList_body = [
  {label:"Fire", partClass:"FireDragon", partId:7},
  {label:"Water", partClass:"WaterDragon", partId:7},
  {label:"Storm", partClass:"StormDragon", partId:7},
  {label:"Rock", partClass:"RockDragon", partId:7},
  {label:"Thunder", partClass:"ThunderDragon", partId:7}
];
var ctr;

for (ctr = 0; ctr < partsList.length; ctr++) {
  switch (partsList[ctr].partId) {
    case 1:
      partsList_eye.push(partsList[ctr])
    break;

    case 2:
      partsList_totem.push(partsList[ctr])
    break;

    case 3:
      partsList_horn.push(partsList[ctr])
    break;

    case 4:
      partsList_ear.push(partsList[ctr])
    break;

    case 5:
      partsList_wing.push(partsList[ctr])
    break;

    case 6:
      partsList_tail.push(partsList[ctr])
    break;
    default:

  }
}
