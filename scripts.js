$('.app_Picker').click(function() {
  $('.app_PickerContent').toggleClass('hide');
  $(this).toggleClass('active');
});

$('.changeLogs').click(function() {
  $('.changeLogsContent').toggleClass('hide');
  $(this).toggleClass('active');
});

$('.notice').click(function() {
  $('.noticeContent').toggleClass('hide');
  $(this).toggleClass('active');
});

document.addEventListener('DOMContentLoaded', function() {
    var carousel_items = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(carousel_items, {
      fullWidth: true
    });
  });

carouselLinks = [
  {
    'img_url': 'https://media.discordapp.net/attachments/947897397802070098/947897865068482580/030422._Skills_Update_c.png',
    'link': ''
  },
  {
    'img_url': 'https://media.discordapp.net/attachments/947897397802070098/947903629732499466/022322._DMS_Consumption_c.png',
    'link': 'https://docs.google.com/forms/d/e/1FAIpQLSeUG2ogh6guIGG5DeP-huGqXgHJil9c2l4iNlX7RWj8X12Rng/viewform'
  },
  {
    'img_url': 'https://media.discordapp.net/attachments/947897397802070098/947905137047908352/021822._DAO_Voting.png',
    'link': ''
  }
];

for (var d=0; d<carouselLinks.length; d++) {
  $('.carousel').append('<a class="carousel-item" target="_blank" href="' + carouselLinks[d].link + '"><img src="' + carouselLinks[d].img_url + '" /></a>');
}

$.ajax({
  type: "GET",
  url: 'https://deep-index.moralis.io/api/v2/erc20/0x9a26e6d24df036b0b015016d1b55011c19e76c87/price?chain=bsc',
  dataType: "json",
  data: {},
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  headers: {"X-API-Key": "26AT5nyIs5DElZC5K96liLa40jsdK2df4PnfPPL9dFbgtu9sCPReEogEW13cZOQs"},
  success: function(data) {
    price_DMS = data.usdPrice;
    $('.DMS_Price').html('<span class="DMS_icon"></span>' +  Math.round(price_DMS * 10000) / 10000);
  }
});

$.ajax({
  type: "GET",
  url: 'https://deep-index.moralis.io/api/v2/erc20/0x599107669322b0e72be939331f35a693ba71ebe2/price?chain=bsc',
  dataType: "json",
  data: {},
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  headers: {"X-API-Key": "26AT5nyIs5DElZC5K96liLa40jsdK2df4PnfPPL9dFbgtu9sCPReEogEW13cZOQs"},
  success: function(data) {
    price_DMP = data.usdPrice;
    $('.DMP_Price').html('<span class="DMP_icon"></span>' +  Math.round(price_DMP * 10000) / 10000);
  }
});

// Materialize Initialization
var toolTip = document.querySelectorAll('.tooltipped');
var toolTipInstance = M.Tooltip.init(toolTip, {});

function copyWallet() {
  /* Get the text field */
  var copyText = document.getElementById("wallet");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
}

$('.tabs .tab').click(function() {
  $('.tab-panel').addClass('hide');
  $('.' + $(this).attr('data-tab')).removeClass('hide');
});

var currentYear = new Date().getFullYear();

$('.currentYear').html(currentYear);

//Get the button
var scrollToTop = document.getElementById("goToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
