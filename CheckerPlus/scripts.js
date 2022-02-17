var dragonNo;
var dragonId;

// Process input
$(".getInput").click(function() {
  var dragonData2 = '{"no":"' + $(".dragonNo").val() + '"}';
  //var inputData = '{"no":"21887"}';
  retrieveDragon(dragonData2);
  //
  var newURL = 'index.html?dragon=' + $(".dragonNo").val();
  window.history.replaceState(null, null, newURL);

  //Reset previous values
  $('.dragon_upgradeToggle').show();
  $('.dragon_updateTable tbody').empty();
  $('.dragon_upgradeToggle.noData').removeClass().addClass('hide dragon_hiddenSection dragon_upgradeToggle noData');

  $('.dragon_bloodLineToggle').show();
  $('.dragon_parent').addClass('hide');
  $('.dragon_children').empty();
  $('.dragon_bloodLineToggle.noData').removeClass().addClass('hide dragon_hiddenSection dragon_bloodLineToggle noData');
  $('.dragon_updateTable').addClass('hide');
});

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dragon = urlParams.get('dragon') || '';

var dragonData = '{"no":"' + dragon + '"}';
//var upgradeData = '{"no":"' + dragon + '", limit: 20}';
retrieveDragon(dragonData);

$('.dragon_upgradeToggle').click(function() {
  var upgradeData = '{"no":"' + dragonNo + '", limit: 20}';
  getDragonUpgrades(upgradeData);
  $(this).hide();
});

$('.dragon_bloodLineToggle').click(function() {
  var bloodLineData = '{"heroId":"' + dragonId + '"}';
  getDragonBloodline(bloodLineData);
  $(this).hide();
});

function retrieveDragon(dragonData) {
  $.ajax({
    type: "POST",
    url: 'https://dragonmainland.io/api/game/hero/getHeroDetailByNo',
    dataType: "json",
    data: dragonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {

      var dragons = data.data;
      dragonNo = dragons.no;
      dragonId = dragons.id;
      var marketLink = 'https://dragonmainland.io/#/myMainland/myDragonDetail/';

      //var bloodlineData = '{"heroId":' + dragons.id + '}';
      //getDragonBloodline(bloodlineData);

      $(".dragon_number").html('#' + dragonNo);
      $(".link-out").attr('href', marketLink + dragons.id);

      switch (dragons.clazz) {
        case 1:
          $(".dragon_number").removeClass().addClass('dragon_number dragon_type-water');
          $(".dragonIndividual.dragon_body").removeClass().addClass('dragonIndividual dragon_body dragon_card-contentWater');
          break;

        case 2:
          $(".dragon_number").removeClass().addClass('dragon_number dragon_type-fire');
          $(".dragonIndividual.dragon_body").removeClass().addClass('dragonIndividual dragon_body dragon_card-contentFire');
          break;

        case 3:
          $(".dragon_number").removeClass().addClass('dragon_number dragon_type-rock');
          $(".dragonIndividual.dragon_body").removeClass().addClass('dragonIndividual dragon_body dragon_card-contentRock');
          break;

        case 4:
          $(".dragon_number").removeClass().addClass('dragon_number dragon_type-storm');
          $(".dragonIndividual.dragon_body").removeClass().addClass('dragonIndividual dragon_body dragon_card-contentStorm');
          break;

        case 5:
          $(".dragon_number").removeClass().addClass('dragon_number dragon_type-thunder');
          $(".dragonIndividual.dragon_body").removeClass().addClass('dragonIndividual dragon_body dragon_card-contentThunder');
          break;
        default:

      }

      /*
      switch (dragons.mutation) {
        case 0:
          $(".dragon_tag").removeClass().addClass('dragon_tag hide');
          break;

        case -2:
          $(".dragon_tag").html('Negative');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-negative');
          break;

        case 2:
          $(".dragon_tag").html('Rare');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-rare');
          break;

        case 4:
          $(".dragon_tag").html('Mystic');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-mystic');
          break;
        default:

      }
      */

      switch (true) {
        case (dragons.mutation == 0):
          $(".dragon_tag").removeClass().addClass('dragon_tag hide');
          break;

        case  (dragons.mutation < 0):
          $(".dragon_tag").html('Negative');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-negative');
          break;

        case (dragons.mutation == 2):
          $(".dragon_tag").html('Rare');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-rare');
          break;

        case (dragons.mutation <= 4):
          $(".dragon_tag").html('Mystic');
          $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-mystic');
          break;
        default:

      }

      if (dragons.mother == 0 && dragons.father == 0) {
        $(".dragon_tag").html('Genesis');
        $(".dragon_tag").removeClass().addClass('dragon_tag dragon_tab-genesis');
      }

      if (dragons.status == 1) {
        switch (dragons.clazz) {
          case 1:
            $(".dragon_body-egg").removeClass().addClass('dragon_body-egg dragon-WaterDragonEgg');
            break;

          case 2:
            $(".dragon_body-egg").removeClass().addClass('dragon_body-egg dragon-FireDragonEgg');
            break;

          case 3:
            $(".dragon_body-egg").removeClass().addClass('dragon_body-egg dragon-RockDragonEgg');
            break;

          case 4:
            $(".dragon_body-egg").removeClass().addClass('dragon_body-egg dragon-StormDragonEgg');
            break;

          case 5:
            $(".dragon_body-egg").removeClass().addClass('dragon_body-egg dragon-ThunderDragonEgg');
            break;
          default:

        }
      }

      if (dragons.status != 1) {
        $(".dragon_body-egg").addClass('hide');
      }

      $(".dragon_breedCount").html(dragons.breedCount);
      $(".dragon_boneCount").html(dragons.boneCount);
      $(".dragon_level").html(dragons.level);
      $(".dragon_ce").html(dragons.ce);

      $(".dragon_health").html(dragons.health);
      $(".dragon_attack").html(dragons.attack);
      $(".dragon_defense").html(dragons.defend);
      $(".dragon_speed").html(dragons.speed);
      $(".dragon_lifeForce").html(dragons.intellect);

      var part1Mutation;
      var part2Mutation;
      var part3Mutation;
      var part4Mutation;
      var part5Mutation;
      var part6Mutation;

      /*
      switch (dragons.parts[0].mutation) {
        case 1:
          part1Mutation = '(Negative)';
          break;

        case 0:
          part1Mutation = '';
          break;

        case 1:
          part1Mutation = '(Rare)';
          break;

        case 2:
          part1Mutation = '(Mystic)';
          break;

        default:
      }

      switch (dragons.parts[1].mutation) {
        case -1:
          part2Mutation = '(Negative)';
          break;

        case 0:
          part2Mutation = '';
          break;

        case 1:
          part2Mutation = '(Rare)';
          break;

        case 2:
          part2Mutation = '(Mystic)';
          break;

        default:
      }

      switch (dragons.parts[2].mutation) {
        case -1:
          part3Mutation = '(Negative)';
          break;

        case 0:
          part3Mutation = '';
          break;

        case 1:
          part3Mutation = '(Rare)';
          break;

        case 2:
          part3Mutation = '(Mystic)';
          break;

        default:
      }

      switch (dragons.parts[3].mutation) {
        case -1:
          part4Mutation = '(Negative)';
          break;

        case 0:
          part4Mutation = '';
          break;

        case 1:
          part4Mutation = '(Rare)';
          break;

        case 2:
          part4Mutation = '(Mystic)';
          break;

        default:
      }

      switch (dragons.parts[4].mutation) {
        case -1:
          part5Mutation = '(Negative)';
          break;

        case 0:
          part5Mutation = '';
          break;

        case 1:
          part5Mutation = '(Rare)';
          break;

        case 2:
          part5Mutation = '(Mystic)';
          break;

        default:
      }

      switch (dragons.parts[5].mutation) {
        case -1:
          part6Mutation = '(Negative)';
          break;

        case 0:
          part6Mutation = '';
          break;

        case 1:
          part6Mutation = '(Rare)';
          break;

        case 2:
          part6Mutation = '(Mystic)';
          break;

        default:
      }
      */

      switch (true) {
        case (dragons.parts[0].mutation < 0):
          part1Mutation = '(Negative)';
          break;

        case (dragons.parts[0].mutation == 0):
          part1Mutation = '';
          break;

        case (dragons.parts[0].mutation == 1):
          part1Mutation = '(Rare)';
          break;

        case (dragons.parts[0].mutation == 2):
          part1Mutation = '(Mystic)';
          break;

        default:
      }

      switch (true) {
        case (dragons.parts[1].mutation < 0):
          part2Mutation = '(Negative)';
          break;

        case (dragons.parts[1].mutation == 0):
          part2Mutation = '';
          break;

        case (dragons.parts[1].mutation == 1):
          part2Mutation = '(Rare)';
          break;

        case (dragons.parts[1].mutation == 2):
          part2Mutation = '(Mystic)';
          break;

        default:
      }

      switch (true) {
        case (dragons.parts[2].mutation < 0):
          part3Mutation = '(Negative)';
          break;

        case (dragons.parts[2].mutation == 0):
          part3Mutation = '';
          break;

        case (dragons.parts[2].mutation == 1):
          part3Mutation = '(Rare)';
          break;

        case (dragons.parts[2].mutation == 2):
          part3Mutation = '(Mystic)';
          break;

        default:
      }

      switch (true) {
        case (dragons.parts[3].mutation < 0):
          part4Mutation = '(Negative)';
          break;

        case (dragons.parts[3].mutation == 0):
          part4Mutation = '';
          break;

        case (dragons.parts[3].mutation == 1):
          part4Mutation = '(Rare)';
          break;

        case (dragons.parts[3].mutation == 2):
          part4Mutation = '(Mystic)';
          break;

        default:
      }

      switch (true) {
        case (dragons.parts[4].mutation < 0):
          part5Mutation = '(Negative)';
          break;

        case (dragons.parts[4].mutation == 0):
          part5Mutation = '';
          break;

        case (dragons.parts[4].mutation == 1):
          part5Mutation = '(Rare)';
          break;

        case (dragons.parts[4].mutation == 2):
          part5Mutation = '(Mystic)';
          break;

        default:
      }

      switch (true) {
        case (dragons.parts[5].mutation < 0):
          part6Mutation = '(Negative)';
          break;

        case (dragons.parts[5].mutation == 0):
          part6Mutation = '';
          break;

        case (dragons.parts[5].mutation == 1):
          part6Mutation = '(Rare)';
          break;

        case (dragons.parts[5].mutation == 2):
          part6Mutation = '(Mystic)';
          break;

        default:
      }

      $(".parts-eye").attr('class', 'parts-eye part-' + dragons.parts[0].dnaNameEn.replace(/\s/g, ''));
      $(".parts-totem").attr('class', 'parts-totem part-' + dragons.parts[1].dnaNameEn.replace(/\s/g, ''));
      $(".parts-horn").attr('class', 'parts-horn part-' + dragons.parts[2].dnaNameEn.replace(/\s/g, ''));
      $(".parts-ear").attr('class', 'parts-ear part-' + dragons.parts[3].dnaNameEn.replace(/\s/g, ''));
      $(".parts-wing").attr('class', 'parts-wing part-' + dragons.parts[4].dnaNameEn.replace(/\s/g, ''));
      $(".parts-tail").attr('class', 'parts-tail part-' + dragons.parts[5].dnaNameEn.replace(/\s/g, ''));

      $(".dragon_parts-eye").html(dragons.parts[0].dnaNameEn + '<i class="partMutation"> ' + part1Mutation + '</i>');
      $(".dragon_parts-totem").html(dragons.parts[1].dnaNameEn + '<i class="partMutation"> ' + part2Mutation + '</i>');
      $(".dragon_parts-horn").html(dragons.parts[2].dnaNameEn + '<i class="partMutation"> ' + part3Mutation + '</i>');
      $(".dragon_parts-ear").html(dragons.parts[3].dnaNameEn + '<i class="partMutation"> ' + part4Mutation + '</i>');
      $(".dragon_parts-wing").html(dragons.parts[4].dnaNameEn + '<i class="partMutation"> ' + part5Mutation + '</i>');
      $(".dragon_parts-tail").html(dragons.parts[5].dnaNameEn + '<i class="partMutation"> ' + part6Mutation + '</i>');

      $(".dragonIndividual .dragon_body-eyes").attr("class", 'activator dragon_body-eyes dragon-' + dragons.parts[0].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-totem").attr("class", 'activator dragon_body-totem dragon-' + dragons.parts[1].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-horn").attr("class", 'activator dragon_body-horn dragon-' + dragons.parts[2].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-ear").attr("class", 'activator dragon_body-ear dragon-' + dragons.parts[3].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-wing").attr("class", 'activator dragon_body-wing dragon-' + dragons.parts[4].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-tail").attr("class", 'activator dragon_body-tail dragon-' + dragons.parts[5].dnaNameEn.replace(/\s/g, ''));
      $(".dragonIndividual .dragon_body-body").attr("class", 'activator dragon_body-body dragon-' + dragons.parts[6].dnaNameEn.replace(/\s/g, ''));

      var star;
      $(".dragon_skill1").html(dragons.skillNo1.name);
      $(".dragon_skill1-energy").html(dragons.skillNo1.energy);
      $(".dragon_skill1-description").html(dragons.skillNo1.des);
      $(".dragon_skill1-damage").html(dragons.skillNo1.damage);
      $(".dragon_skill1-shield").html(dragons.skillNo1.shield);
      $(".dragon_skill1-level").text('');
      for (star = 0; star < dragons.skillNo1.level - 1; star++) {
        $(".dragon_skill1-level").append('⭐');
      }
      $(".dragon_skill-part1").html(dragons.parts[2].dnaNameEn);

      $(".dragon_skill2").html(dragons.skillNo2.name);
      $(".dragon_skill2-energy").html(dragons.skillNo2.energy);
      $(".dragon_skill2-description").html(dragons.skillNo2.des);
      $(".dragon_skill2-damage").html(dragons.skillNo2.damage);
      $(".dragon_skill2-shield").html(dragons.skillNo2.shield);
      $(".dragon_skill2-level").text('');
      for (star = 0; star < dragons.skillNo2.level - 1; star++) {
        $(".dragon_skill2-level").append('⭐');
      }
      $(".dragon_skill-part2").html(dragons.parts[3].dnaNameEn);

      $(".dragon_skill3").html(dragons.skillNo3.name);
      $(".dragon_skill3-energy").html(dragons.skillNo3.energy);
      $(".dragon_skill3-description").html(dragons.skillNo3.des);
      $(".dragon_skill3-damage").html(dragons.skillNo3.damage);
      $(".dragon_skill3-shield").html(dragons.skillNo3.shield);
      $(".dragon_skill3-level").text('');
      for (star = 0; star < dragons.skillNo3.level - 1; star++) {
        $(".dragon_skill3-level").append('⭐');
      }
      $(".dragon_skill-part3").html(dragons.parts[4].dnaNameEn);

      $(".dragon_skill4").html(dragons.skillNo4.name);
      $(".dragon_skill4-energy").html(dragons.skillNo4.energy);
      $(".dragon_skill4-description").html(dragons.skillNo4.des);
      $(".dragon_skill4-damage").html(dragons.skillNo4.damage);
      $(".dragon_skill4-shield").html(dragons.skillNo4.shield);
      $(".dragon_skill4-level").text('');
      for (star = 0; star < dragons.skillNo4.level - 1; star++) {
        $(".dragon_skill4-level").append('⭐');
      }
      $(".dragon_skill-part4").html(dragons.parts[5].dnaNameEn);


      switch (dragons.skillNo1.clazz) {
        case 1:
          $(".dragon_card-content1").removeClass().addClass('card-content dragon_card-content1 dragon_card-contentWater');
          $(".dragon_skill1-type").removeClass().addClass('dragon_skill1-type dragon_skill1-typeWater');
          break;

        case 2:
          $(".dragon_card-content1").removeClass().addClass('card-content dragon_card-content1 dragon_card-contentFire');
          $(".dragon_skill1-type").removeClass().addClass('dragon_skill1-type dragon_skill1-typeFire');
          break;

        case 4:
          $(".dragon_card-content1").removeClass().addClass('card-content dragon_card-content1 dragon_card-contentStorm');
          $(".dragon_skill1-type").removeClass().addClass('dragon_skill1-type dragon_skill1-typeStorm');
          break;

        case 3:
          $(".dragon_card-content1").removeClass().addClass('card-content dragon_card-content1 dragon_card-contentRock');
          $(".dragon_skill1-type").removeClass().addClass('dragon_skill1-type dragon_skill1-typeRock');
          break;

        case 5:
          $(".dragon_card-content1").removeClass().addClass('card-content dragon_card-content1 dragon_card-contentThunder');
          $(".dragon_skill1-type").removeClass().addClass('dragon_skill1-type dragon_skill1-typeThunder');
          break;

        default:
      }

      switch (dragons.skillNo2.clazz) {
        case 1:
          $(".dragon_card-content2").removeClass().addClass('card-content dragon_card-content2 dragon_card-contentWater');
          $(".dragon_skill2-type").removeClass().addClass('dragon_skill2-type dragon_skill2-typeWater');
          break;

        case 2:
          $(".dragon_card-content2").removeClass().addClass('card-content dragon_card-content2 dragon_card-contentFire');
          $(".dragon_skill2-type").removeClass().addClass('dragon_skill2-type dragon_skill2-typeFire');
          break;

        case 4:
          $(".dragon_card-content2").removeClass().addClass('card-content dragon_card-content2 dragon_card-contentStorm');
          $(".dragon_skill2-type").removeClass().addClass('dragon_skill2-type dragon_skill2-typeStorm');
          break;

        case 3:
          $(".dragon_card-content2").removeClass().addClass('card-content dragon_card-content2 dragon_card-contentRock');
          $(".dragon_skill2-type").removeClass().addClass('dragon_skill2-type dragon_skill2-typeRock');
          break;

        case 5:
          $(".dragon_card-content2").removeClass().addClass('card-content dragon_card-content2 dragon_card-contentThunder');
          $(".dragon_skill2-type").removeClass().addClass('dragon_skill2-type dragon_skill2-typeThunder');
          break;

        default:
      }

      switch (dragons.skillNo3.clazz) {
        case 1:
          $(".dragon_card-content3").removeClass().addClass('card-content dragon_card-content3 dragon_card-contentWater');
          $(".dragon_skill3-type").removeClass().addClass('dragon_skill3-type dragon_skill3-typeWater');
          break;

        case 2:
          $(".dragon_card-content3").removeClass().addClass('card-content dragon_card-content3 dragon_card-contentFire');
          $(".dragon_skill3-type").removeClass().addClass('dragon_skill3-type dragon_skill3-typeFire');
          break;

        case 4:
          $(".dragon_card-content3").removeClass().addClass('card-content dragon_card-content3 dragon_card-contentStorm');
          $(".dragon_skill3-type").removeClass().addClass('dragon_skill3-type dragon_skill3-typeStorm');
          break;

        case 3:
          $(".dragon_card-content3").removeClass().addClass('card-content dragon_card-content3 dragon_card-contentRock');
          $(".dragon_skill3-type").removeClass().addClass('dragon_skill3-type dragon_skill3-typeRock');
          break;

        case 5:
          $(".dragon_card-content3").removeClass().addClass('card-content dragon_card-content3 dragon_card-contentThunder');
          $(".dragon_skill3-type").removeClass().addClass('dragon_skill3-type dragon_skill3-typeThunder');
          break;

        default:
      }

      switch (dragons.skillNo4.clazz) {
        case 1:
          $(".dragon_card-content4").removeClass().addClass('card-content dragon_card-content4 dragon_card-contentWater');
          $(".dragon_skill4-type").removeClass().addClass('dragon_skill4-type dragon_skill4-typeWater');
          break;

        case 2:
          $(".dragon_card-content4").removeClass().addClass('card-content dragon_card-content4 dragon_card-contentFire');
          $(".dragon_skill4-type").removeClass().addClass('dragon_skill4-type dragon_skill4-typeFire');
          break;

        case 4:
          $(".dragon_card-content4").removeClass().addClass('card-content dragon_card-content4 dragon_card-contentStorm');
          $(".dragon_skill4-type").removeClass().addClass('dragon_skill4-type dragon_skill4-typeStorm');
          break;

        case 3:
          $(".dragon_card-content4").removeClass().addClass('card-content dragon_card-content4 dragon_card-contentRock');
          $(".dragon_skill4-type").removeClass().addClass('dragon_skill4-type dragon_skill4-typeRock');
          break;

        case 5:
          $(".dragon_card-content4").removeClass().addClass('card-content dragon_card-content4 dragon_card-contentThunder');
          $(".dragon_skill4-type").removeClass().addClass('dragon_skill4-type dragon_skill4-typeThunder');
          break;

        default:
      }
    }
  });
}

function getDragonUpgrades(upgradeData) {
  $.ajax({
    type: "POST",
    url: 'https://dragonmainland.io/api/game/hero/getHeroDevelopHistory',
    dataType: "json",
    data: upgradeData,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {

      var dragonUpgrade = data.data.list;

      if (dragonUpgrade.length == 0) {
        $('.dragon_upgradeToggle.noData').removeClass('hide');
      }

      else {
        $('.dragon_updateTable').removeClass('hide');
        var upgradeType;
        var attributeName;
        var attributeType;

        $('.dragon_updateTable tbody').empty();
        for (var z = 0; z < dragonUpgrade.length; z++) {
          upgradeType = '';
          switch (dragonUpgrade[z].type) {
            case 1:
              upgradeType = 'Skull Absorption';
              attributeName = '';
              break;

            case 3:
              upgradeType = 'Dragon Devour';
              attributeName = dragonUpgrade[z].attributeName;
              break;

            case 4:
              upgradeType = 'Dragon Devour';
              attributeName = dragonUpgrade[z].attributeName;
              break;

            case 5:
              upgradeType = 'Dragon Devour';
              attributeName = dragonUpgrade[z].attributeName;
              break;

            case 6:
              upgradeType = 'Dragon Devour';
              attributeName = dragonUpgrade[z].attributeName;
              break;

            case 7:
              upgradeType = 'Talent Upgrade';
              attributeName = '';
              break;
            default:
          }

          attributeType = '';

          switch (dragonUpgrade[z].attributeType) {
            case 1:
              attributeType = '<i class="fas fa-heart"></i> Health';
              break;

            case 2:
              attributeType = '<i class="fas fa-sword"></i> Attack';
              break;

            case 3:
              attributeType = '<i class="fas fa-shield"></i> Defense';
              break;

            case 4:
              attributeType = '<i class="fas fa-boot"></i> Speed';
              break;

            case 5:
              attributeType = '<i class="fas fa-fire"> Intellect';
              break;
            default:
          }

          $('.dragon_updateTable tbody').append('<tr><td>' + upgradeType + '</td><td><i class="fa-solid fa-arrow-trend-up"></i> ' + attributeName + attributeType + ' </td><td><span class="grey-text text-darken-2">' + (dragonUpgrade[z].oldAttributeVal - 1) + '</span> <i class="fa-solid fa-chevrons-right fa-2xs"></i> <span class="green-text text-darken-3"><b>' + (dragonUpgrade[z].newAttributeVal - 1) + '</b></span></td></tr>')
        }
      }
    }
  });
}

function getDragonBloodline(bloodlineData) {
  $.ajax({
    type: "POST",
    url: 'https://dragonmainland.io/api/game/hero/getHeroFamily',
    dataType: "json",
    data: bloodlineData,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {
      var bloodRelatives = data.data;
      var childSection = '<p class="detail_section">Children</p>';

      // Genesis
      if (bloodRelatives.fatherId == 0 || bloodRelatives.motherId == 0) {
        // If virgin Genesis
        if (bloodRelatives.childIds == undefined) {
          $('.dragon_bloodLineToggle.noData').removeClass('hide');
        }

        else {
          $('.dragon_children').append(childSection);
          var childId;
          for (var c = 0; c < bloodRelatives.childIds.length; c++) {
            childId = '{"id":"' + bloodRelatives.childIds[c] + '"}';
            getBloodlineParts(childId, 'Child');
          }
        }
      }

      // Non genesis
      else {
        $('.dragon_parent').removeClass('hide');

        var fatherId = '{"id":"' + bloodRelatives.fatherId + '"}';
        var motherId = '{"id":"' + bloodRelatives.motherId + '"}';

        getBloodlineParts(fatherId, 'Father');
        getBloodlineParts(motherId, 'Mother');

        if (bloodRelatives.childIds.length != 0) {
          $('.dragon_children').append(childSection);

          for (var c = 0; c < bloodRelatives.childIds.length; c++) {
            childId = '{"id":"' + bloodRelatives.childIds[c] + '"}';
            getBloodlineParts(childId, 'Child');
          }
        }
      }
    }
  });
}

function getBloodlineParts(dragonNo, bloodRelation) {
  $.ajax({
    type: "POST",
    url: 'https://dragonmainland.io/api/game/hero/detail',
    dataType: "json",
    data: dragonNo,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {

      var dragonInsert;
      var family;

      var relative = data.data;

      switch (bloodRelation) {
        case 'Father':
          family = 'Father';

          $('.dragon_Father').addClass('dragon-' + relative.no);
          break;

        case 'Mother':
          family = 'Mother';

          $('.dragon_Mother').addClass('dragon-' + relative.no);
          break;

        case 'Child':
          family = 'Child';
          break;
        default:

      }

      if (family == 'Child') {
        dragonInsert = '<div class="dragon_body dragon_' + family + ' dragon-' + relative.no + '"><p class="dragonNo"></p><a href="#" target="_blank" class="link-out right"><i class="fas fa-external-link-alt"></i></a><div class="dragon_body-tail"></div><div class="dragon_body-horn"></div><div class="dragon_body-ear"></div><div class="dragon_body-body"></div><div class="dragon_body-wing"></div><div class="dragon_body-totem"></div><div class="dragon_body-eyes"></div><div class="dragon_body-egg"></div></div>';
        $('.dragon_children').append(dragonInsert);
      }

      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-eyes").attr("class", ' activator dragon_body-eyes dragon-' + relative.parts[0].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-totem").attr("class", ' activator dragon_body-totem dragon-' + relative.parts[1].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-horn").attr("class", ' activator dragon_body-horn dragon-' + relative.parts[2].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-ear").attr("class", ' activator dragon_body-ear dragon-' + relative.parts[3].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-wing").attr("class", ' activator dragon_body-wing dragon-' + relative.parts[4].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-tail").attr("class", ' activator dragon_body-tail dragon-' + relative.parts[5].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .dragon_body-body").attr("class", ' activator dragon_body-body dragon-' + relative.parts[6].dnaNameEn.replace(/\s/g, ''));
      $(".dragon_" + bloodRelation + ".dragon-" + relative.no + " .link-out").attr('href', 'index.html?dragon=' + relative.no);

      switch (relative.clazz) {
        case 1:
          $(".dragon_" + bloodRelation + ".dragon-" + relative.no + "  .dragonNo").html('#' + relative.no).removeClass().addClass("dragon_" + bloodRelation + " dragonNo dragon_type-water");
          break;

        case 2:
          $(".dragon_" + bloodRelation + ".dragon-" + relative.no + "  .dragonNo").html('#' + relative.no).removeClass().addClass("dragon_" + bloodRelation + " dragonNo dragon_type-fire");

          break;

        case 3:
          $(".dragon_" + bloodRelation + ".dragon-" + relative.no + "  .dragonNo").html('#' + relative.no).removeClass().addClass("dragon_" + bloodRelation + " dragonNo dragon_type-rock");

          break;

        case 4:
          $(".dragon_" + bloodRelation + ".dragon-" + relative.no + "  .dragonNo").html('#' + relative.no).removeClass().addClass("dragon_" + bloodRelation + " dragonNo dragon_type-storm");

          break;

        case 5:
          $(".dragon_" + bloodRelation + ".dragon-" + relative.no + "  .dragonNo").html('#' + relative.no).removeClass().addClass("dragon_" + bloodRelation + " dragonNo dragon_type-thunder");

          break;
        default:
      }


    }
  });
}
