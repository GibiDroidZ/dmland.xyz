var elems = document.querySelectorAll('select');
var instances = M.FormSelect.init(elems, {});

var cardContainer = document.getElementById('cardsList');
var race;
var cardType;
for (var i = 0; i < partsList.length; i++) {
  if (partsList[i].skillId != 0) {
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

    cardContainer.innerHTML += '<div class="col l3 m4 s6"><div class="card dragon_card"><div class="card-image"><img class="dragon_skill-image" src="../Skills/Skill_' + partsList[i].dnaNameEn + '.png" /><button class="btn-floating waves-effect waves-light yellow skill_stats skill_stats-energy"><p class="dragon_skill-energy">' + partsList[i].energy + ' </p></button><button class="btn-floating waves-effect waves-light red skill_stats skill_stats-damage"><p class="dragon_skill-damage">' + partsList[i].damage + ' </p></button><button class="btn-floating waves-effect waves-light red skill_stats skill_stats-damage-bg"></button><button class="btn-floating waves-effect waves-light blue skill_stats skill_stats-shield"><p class="dragon_skill-shield">' + partsList[i].shield + ' </p></button><button class="btn-floating waves-effect waves-light blue skill_stats skill_stats-shield-bg"></button></div><div class="card-content dragon_card-content dragon_card-content' + cardType + '"><p class="dragon_skill-title dragon_skill">' + partsList[i].skillName + ' </p><p class="dragon_skill-part">' + partsList[i].dnaNameEn + ' </p><p class="dragon_skill-description">' + partsList[i].skillDesc + ' </p></div><button class="btn-floating waves-effect waves-light white skill_stats skill_stats-type z-depth-0"><div class="dragon_skill-type dragon_skill-type' + cardType + '"></div></button></div></div>';
  }
}
