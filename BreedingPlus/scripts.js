$(".getFather").click(function() {
  var dragonFather = '{"no":"' + $(".dragonNoFather").val() + '"}';
  retrieveDragon(dragonFather, 'Father');
});

$(".getMother").click(function() {
  var dragonMother = '{"no":"' + $(".dragonNoMother").val() + '"}';
  retrieveDragon(dragonMother, 'Mother');
});

var father;
var mother;

var breedCostDMPFather;
var breedCostDMSFather;
var breedCostDMPMother;
var breedCostDMSMother;
var totalBreedingCostDMP;
var totalBreedingCostDMS;

var totalBreedingCostDMPUSD;
var totalBreedingCostDMSUSD;
var totalBreedingCostUSD;

function retrieveDragon(dragonData, bloodRelation) {
  $.ajax({
    type: "POST",
    url: 'https://dragonmainland.io/api/game/hero/getHeroDetailByNo',
    dataType: "json",
    data: dragonData,
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function(data) {

      var checkerLink = '../CheckerPlus/index.html?dragon=';

      if (bloodRelation == 'Father') {
        father = data.data;

        $(".dragonFather .dragon_number").html('#' + father.no);
        $(".dragonFather .link-out").attr('href', checkerLink + father.no);

        switch (father.clazz) {
          case 1:
            $(".dragonFather .dragon_number").removeClass().addClass('dragonFather dragon_number dragon_type-water');
            break;

          case 2:
            $(".dragonFather .dragon_number").removeClass().addClass('dragonFather dragon_number dragon_type-fire');
            break;

          case 3:
            $(".dragonFather .dragon_number").removeClass().addClass('dragonFather dragon_number dragon_type-rock');
            break;

          case 4:
            $(".dragonFather .dragon_number").removeClass().addClass('dragonFather dragon_number dragon_type-storm');
            break;

          case 5:
            $(".dragonFather .dragon_number").removeClass().addClass('dragonFather dragon_number dragon_type-thunder');
            break;
          default:

        }

        $(".dragonFather .dragon_breedCount").html(father.breedCount);
        $(".dragonFather .dragon_boneCount").html(father.boneCount);
        $(".dragonFather .dragon_level").html(father.level);
        $(".dragonFather .dragon_ce").html(father.ce);

        $(".dragonFather .dragon_body-eyes").attr("class", 'activator dragon_body-eyes dragon-' + father.parts[0].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-totem").attr("class", 'activator dragon_body-totem dragon-' + father.parts[1].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-horn").attr("class", 'activator dragon_body-horn dragon-' + father.parts[2].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-ear").attr("class", 'activator dragon_body-ear dragon-' + father.parts[3].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-wing").attr("class", 'activator dragon_body-wing dragon-' + father.parts[4].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-tail").attr("class", 'activator dragon_body-tail dragon-' + father.parts[5].dnaNameEn.replace(/\s/g, ''));
        $(".dragonFather .dragon_body-body").attr("class", 'activator dragon_body-body dragon-' + father.parts[6].dnaNameEn.replace(/\s/g, ''));

        switch (father.breedCount) {
          case 0:
            breedCostDMPFather = 200;
            breedCostDMSFather = .2;

            break;

          case 1:
            breedCostDMPFather = 300;
            breedCostDMSFather = .4;
            break;

          case 2:
            breedCostDMPFather = 600;
            breedCostDMSFather = .5;
            break;

          case 3:
            breedCostDMPFather = 1000
            breedCostDMSFather = 1;
            break;

          case 4:
            breedCostDMPFather = 1600
            breedCostDMSFather = 1.5;
            break;

          case 5:
            breedCostDMPFather = 2400
            breedCostDMSFather = 2;
            break;

          case 6:
            breedCostDMPFather = 3400
            breedCostDMSFather = 2.5;
            break;
          default:

        }
      }

      if (bloodRelation == 'Mother') {
        mother = data.data;

        $(".dragonMother .dragon_number").html('#' + mother.no);
        $(".dragonMother .link-out").attr('href', checkerLink + mother.no);

        switch (mother.clazz) {
          case 1:
            $(".dragonMother .dragon_number").removeClass().addClass('dragonMother dragon_number dragon_type-water');
            break;

          case 2:
            $(".dragonMother .dragon_number").removeClass().addClass('dragonMother dragon_number dragon_type-fire');
            break;

          case 3:
            $(".dragonMother .dragon_number").removeClass().addClass('dragonMother dragon_number dragon_type-rock');
            break;

          case 4:
            $(".dragonMother .dragon_number").removeClass().addClass('dragonMother dragon_number dragon_type-storm');
            break;

          case 5:
            $(".dragonMother .dragon_number").removeClass().addClass('dragonMother dragon_number dragon_type-thunder');
            break;
          default:

        }

        $(".dragonMother .dragon_breedCount").html(mother.breedCount);
        $(".dragonMother .dragon_boneCount").html(mother.boneCount);
        $(".dragonMother .dragon_level").html(mother.level);
        $(".dragonMother .dragon_ce").html(mother.ce);

        $(".dragonMother .dragon_body-eyes").attr("class", 'activator dragon_body-eyes dragon-' + mother.parts[0].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-totem").attr("class", 'activator dragon_body-totem dragon-' + mother.parts[1].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-horn").attr("class", 'activator dragon_body-horn dragon-' + mother.parts[2].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-ear").attr("class", 'activator dragon_body-ear dragon-' + mother.parts[3].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-wing").attr("class", 'activator dragon_body-wing dragon-' + mother.parts[4].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-tail").attr("class", 'activator dragon_body-tail dragon-' + mother.parts[5].dnaNameEn.replace(/\s/g, ''));
        $(".dragonMother .dragon_body-body").attr("class", 'activator dragon_body-body dragon-' + mother.parts[6].dnaNameEn.replace(/\s/g, ''));

        switch (mother.breedCount) {
          case 0:
            breedCostDMPMother = 200;
            breedCostDMSMother = .2;

            break;

          case 1:
            breedCostDMPMother = 300;
            breedCostDMSMother = .4;
            break;

          case 2:
            breedCostDMPMother = 600;
            breedCostDMSMother = .5;
            break;

          case 3:
            breedCostDMPMother = 1000
            breedCostDMSMother = 1;
            break;

          case 4:
            breedCostDMPMother = 1600
            breedCostDMSMother = 1.5;
            break;

          case 5:
            breedCostDMPMother = 2400
            breedCostDMSMother = 2;
            break;

          case 6:
            breedCostDMPMother = 3400
            breedCostDMSMother = 2.5;
            break;
          default:
        }
      }

      if (father != undefined && mother != undefined) {
        totalBreedingCostDMP = breedCostDMPFather + breedCostDMPMother;
        totalBreedingCostDMS = breedCostDMSFather + breedCostDMSMother;

        $('.breedCost-DMP').html(Math.round(totalBreedingCostDMP * 100) / 100);
        $('.breedCost-DMS').html(Math.round(totalBreedingCostDMS * 100) / 100);

        totalBreedingCostDMPUSD = Math.round((totalBreedingCostDMP * price_DMP) * 100) / 100;
        totalBreedingCostDMSUSD = Math.round((totalBreedingCostDMS * price_DMS) * 100) / 100;
        totalBreedingCostUSD = Math.round((totalBreedingCostDMPUSD + totalBreedingCostDMSUSD) * 100) / 100;
        $('.total_DMSCost').html('~ $' + totalBreedingCostDMSUSD);
        $('.total_DMPCost').html('~ $' + totalBreedingCostDMPUSD);
        $('.total_breedingCost').html(totalBreedingCostUSD);
      }


      //totalBreedingCostDMP + totalBreedingCostDMS;
    }
  });
}
