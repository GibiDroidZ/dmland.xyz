var dragons = {};
var parts = [];
var skillRace;
var similarSkills;
var similarDragons;
var marketPlusLink = '../MarketPlus/index.html?';

function getRandomPart(partsList) {
  var s = Math.floor(Math.random() * partsList.length);
  return partsList[s];
}

function generateDragon() {
  dragons = {parts:[
    getRandomPart(partsList_eye),
    getRandomPart(partsList_totem),
    getRandomPart(partsList_horn),
    getRandomPart(partsList_ear),
    getRandomPart(partsList_wing),
    getRandomPart(partsList_tail),
    getRandomPart(partsList_body)
  ]};

  $(".dragon_body .dragon_body-eyes").attr("class", 'activator dragon_body-eyes dragon-' + dragons.parts[0].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-totem").attr("class", 'activator dragon_body-totem dragon-' + dragons.parts[1].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-horn").attr("class", 'activator dragon_body-horn dragon-' + dragons.parts[2].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-ear").attr("class", 'activator dragon_body-ear dragon-' + dragons.parts[3].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-wing").attr("class", 'activator dragon_body-wing dragon-' + dragons.parts[4].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-tail").attr("class", 'activator dragon_body-tail dragon-' + dragons.parts[5].dnaNameEn.replace(/\s/g, ''));
  $(".dragon_body .dragon_body-body").attr("class", 'activator dragon_body-body dragon-' + dragons.parts[6].partClass.replace(/\s/g, ''));

  $(".dragon_skill1").html(dragons.parts[2].skillName);
  $(".dragon_skill1-energy").html(dragons.parts[2].energy);
  $(".dragon_skill1-description").html(dragons.parts[2].skillDesc);
  $(".dragon_skill1-damage").html(dragons.parts[2].damage);
  $(".dragon_skill1-shield").html(dragons.parts[2].shield);
  $(".dragon_skill-part1").html(dragons.parts[2].dnaNameEn);
  $(".dragon_skill1-image").attr('src', '../Skills/Skill_' + dragons.parts[2].dnaNameEn + '.png');
  addCardType(dragons.parts[2].dna, 1);

  $(".dragon_skill2").html(dragons.parts[3].skillName);
  $(".dragon_skill2-energy").html(dragons.parts[3].energy);
  $(".dragon_skill2-description").html(dragons.parts[3].skillDesc);
  $(".dragon_skill2-damage").html(dragons.parts[3].damage);
  $(".dragon_skill2-shield").html(dragons.parts[3].shield);
  $(".dragon_skill-part2").html(dragons.parts[3].dnaNameEn);
  $(".dragon_skill2-image").attr('src', '../Skills/Skill_' + dragons.parts[3].dnaNameEn + '.png');
  addCardType(dragons.parts[3].dna, 2);

  $(".dragon_skill3").html(dragons.parts[4].skillName);
  $(".dragon_skill3-energy").html(dragons.parts[4].energy);
  $(".dragon_skill3-description").html(dragons.parts[4].skillDesc);
  $(".dragon_skill3-damage").html(dragons.parts[4].damage);
  $(".dragon_skill3-shield").html(dragons.parts[4].shield);
  $(".dragon_skill-part3").html(dragons.parts[4].dnaNameEn);
  $(".dragon_skill3-image").attr('src', '../Skills/Skill_' + dragons.parts[4].dnaNameEn + '.png');
  addCardType(dragons.parts[4].dna, 3);

  $(".dragon_skill4").html(dragons.parts[5].skillName);
  $(".dragon_skill4-energy").html(dragons.parts[5].energy);
  $(".dragon_skill4-description").html(dragons.parts[5].skillDesc);
  $(".dragon_skill4-damage").html(dragons.parts[5].damage);
  $(".dragon_skill4-shield").html(dragons.parts[5].shield);
  $(".dragon_skill-part4").html(dragons.parts[5].dnaNameEn);
  $(".dragon_skill4-image").attr('src', '../Skills/Skill_' + dragons.parts[5].dnaNameEn + '.png');
  addCardType(dragons.parts[5].dna, 4);

  buildMarketLink();
}

function addCardType(dna, part) {
  skillRace = dna.toString();
  skillRace = skillRace.substr(0, 1);
  switch (Number(skillRace)) {
    case 1:
      $(".dragon_card-content" + part).removeClass().addClass('card-content dragon_card-content' + part + ' dragon_card-contentWater');
      $(".dragon_skill" + part + "-type").removeClass().addClass('dragon_skill' + part + '-type dragon_skill' + part + '-typeWater');
      break;

    case 2:
      $(".dragon_card-content" + part).removeClass().addClass('card-content dragon_card-content' + part + ' dragon_card-contentFire');
      $(".dragon_skill" + part + "-type").removeClass().addClass('dragon_skill' + part + '-type dragon_skill' + part + '-typeFire');
      break;

    case 4:
      $(".dragon_card-content" + part).removeClass().addClass('card-content dragon_card-content' + part + ' dragon_card-contentStorm');
      $(".dragon_skill" + part + "-type").removeClass().addClass('dragon_skill' + part + '-type dragon_skill' + part + '-typeStorm');
      break;

    case 3:
      $(".dragon_card-content" + part).removeClass().addClass('card-content dragon_card-content' + part + ' dragon_card-contentRock');
      $(".dragon_skill" + part + "-type").removeClass().addClass('dragon_skill' + part + '-type dragon_skill' + part + '-typeRock');
      break;

    case 5:
      $(".dragon_card-content" + part).removeClass().addClass('card-content dragon_card-content' + part + ' dragon_card-contentThunder');
      $(".dragon_skill" + part + "-type").removeClass().addClass('dragon_skill' + part + '-type dragon_skill' + part + '-typeThunder');
      break;
    default:

  }
}

function buildMarketLink() {
  similarDragons = 'dna='  + dragons.parts[0].dna + ',' + dragons.parts[1].dna + ',' + dragons.parts[2].dna + ',' + dragons.parts[3].dna + ',' + dragons.parts[4].dna + ',' + dragons.parts[5].dna + ',';
  similarSkills = 'dna='  + dragons.parts[2].dna + ',' + dragons.parts[3].dna + ',' + dragons.parts[4].dna + ',' + dragons.parts[5].dna + ',';

  $('.similarDragons').attr('href', marketPlusLink + similarDragons);
  $('.similarSkills').attr('href', marketPlusLink + similarSkills);
}

generateDragon();
buildMarketLink();

var selectedParts_eye = document.getElementById('selectedPartsList_eye');
var selectedParts_totem = document.getElementById('selectedPartsList_totem');
var selectedParts_horn = document.getElementById('selectedPartsList_horn');
var selectedParts_ear = document.getElementById('selectedPartsList_ear');
var selectedParts_wing = document.getElementById('selectedPartsList_wing');
var selectedParts_tail = document.getElementById('selectedPartsList_tail');
var selectedParts_body = document.getElementById('selectedPartsList_body');

var getDragonPartToSearch;
var dragonPartToSearch;
var partToUpdate;
var partToUpdateIndex;
var skillToUpdate;

$(".dragonSearch_eye.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_eye,
  select: function(event, ui) {
    selectedParts_eye.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-eyes").attr("class", 'activator dragon_body-eyes dragon-' + ui.item.partClass);
    dragons.parts[0] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_totem.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_totem,
  select: function(event, ui) {
    selectedParts_totem.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-totem").attr("class", 'activator dragon_body-totem dragon-' + ui.item.partClass);
    dragons.parts[1] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_horn.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_horn,
  select: function(event, ui) {
    selectedParts_horn.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-horn").attr("class", 'activator dragon_body-horn dragon-' + ui.item.partClass);
    $(".dragon_skill1").html(ui.item.skillName);
    $(".dragon_skill1-energy").html(ui.item.energy);
    $(".dragon_skill1-description").html(ui.item.skillDesc);
    $(".dragon_skill1-damage").html(ui.item.damage);
    $(".dragon_skill1-shield").html(ui.item.shield);
    $(".dragon_skill-part1").html(ui.item.dnaNameEn);
    $(".dragon_skill1-image").attr('src', '../Skills/Skill_' + ui.item.dnaNameEn + '.png');
    addCardType(ui.item.dna, 1);
    dragons.parts[2] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_ear.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_ear,
  select: function(event, ui) {
    selectedParts_ear.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-ear").attr("class", 'activator dragon_body-ear dragon-' + ui.item.partClass);
    $(".dragon_skill2").html(ui.item.skillName);
    $(".dragon_skill2-energy").html(ui.item.energy);
    $(".dragon_skill2-description").html(ui.item.skillDesc);
    $(".dragon_skill2-damage").html(ui.item.damage);
    $(".dragon_skill2-shield").html(ui.item.shield);
    $(".dragon_skill-part2").html(ui.item.dnaNameEn);
    $(".dragon_skill2-image").attr('src', '../Skills/Skill_' + ui.item.dnaNameEn + '.png');
    addCardType(ui.item.dna, 2);
    dragons.parts[3] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_wing.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_wing,
  select: function(event, ui) {
    selectedParts_wing.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-wing").attr("class", 'activator dragon_body-wing dragon-' + ui.item.partClass);
    $(".dragon_skill3").html(ui.item.skillName);
    $(".dragon_skill3-energy").html(ui.item.energy);
    $(".dragon_skill3-description").html(ui.item.skillDesc);
    $(".dragon_skill3-damage").html(ui.item.damage);
    $(".dragon_skill3-shield").html(ui.item.shield);
    $(".dragon_skill-part3").html(ui.item.dnaNameEn);
    $(".dragon_skill3-image").attr('src', '../Skills/Skill_' + ui.item.dnaNameEn + '.png');
    addCardType(ui.item.dna, 3);
    dragons.parts[5] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_tail.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_tail,
  select: function(event, ui) {
    selectedParts_tail.innerHTML += '<div class="selectedPart" data-dna="' + ui.item.dna + '"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.dnaNameEn + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-tail").attr("class", 'activator dragon_body-tail dragon-' + ui.item.partClass);
    $(".dragon_skill4").html(ui.item.skillName);
    $(".dragon_skill4-energy").html(ui.item.energy);
    $(".dragon_skill4-description").html(ui.item.skillDesc);
    $(".dragon_skill4-damage").html(ui.item.damage);
    $(".dragon_skill4-shield").html(ui.item.shield);
    $(".dragon_skill-part4").html(ui.item.dnaNameEn);
    $(".dragon_skill4-image").attr('src', '../Skills/Skill_' + ui.item.dnaNameEn + '.png');
    addCardType(ui.item.dna, 4);
    dragons.parts[4] = ui.item;
    buildMarketLink();
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart part-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.dnaNameEn + '</p><p class="dragon_skillName">' + item.skillName + '</p></span></div></div>').appendTo(ul);
};

$(".dragonSearch_body.textField")
  .autocomplete({
  maxLength: 5,
  source: partsList_body,
  select: function(event, ui) {
    selectedParts_body.innerHTML += '<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart dragon-' + ui.item.partClass + '"></div><span><p class="dragon_partName">' + ui.item.label + '</p></span><i class="fa-solid fa-xmark removeSelected" onclick="removeSelected(this)"></i></div></div>';
    $(".dragon_body .dragon_body-body").attr("class", 'activator dragon_body-body dragon-' + ui.item.partClass);
    $(this).hide();

    return false;
  }
}).data("ui-autocomplete")._renderItem = function(ul, item) {
  return $("<li>").data("ui-autocomplete-item", item).append('<div class="selectedPart"><div class="valign-wrapper selectedPartDetail"><div class="dragonPart dragon-' + item.partClass + '"></div><span><p class="dragon_partName">' + item.label + '</p></span></div></div>').appendTo(ul);
};

function removeSelected(elem) {
  var removedPart = $(elem).parent().parent().parent().attr('id');
  var fieldToShow;
  switch (removedPart) {
    case 'selectedPartsList_eye':
      fieldToShow = 'eye';
      break;
    case 'selectedPartsList_totem':
    fieldToShow = 'totem';
    break;

    case 'selectedPartsList_horn':
    fieldToShow = 'horn';
    break;

    case 'selectedPartsList_ear':
    fieldToShow = 'ear';
    break;

    case 'selectedPartsList_wing':
    fieldToShow = 'wing';
    break;

    case 'selectedPartsList_tail':
    fieldToShow = 'tail';
    break;

    case 'selectedPartsList_body':
    fieldToShow = 'body';
    break;
    default:

  }

  $('.dragonSearch_' + fieldToShow).show();
  elem.parentNode.parentNode.remove();
}
