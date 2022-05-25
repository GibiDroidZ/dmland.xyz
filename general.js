$('.app_Picker').click(function() {
  $('.app_PickerContent').toggleClass('hide');
  $(this).toggleClass('active');
})

$('.changeLogs').click(function() {
  $('.changeLogsContent').toggleClass('hide');
  $(this).toggleClass('active');
})

$('.notice').click(function() {
  $('.noticeContent').toggleClass('hide');
  $(this).toggleClass('active');
})

$('.simpleMode').click(function() {
  $(this).toggleClass('active');
})

var price_DMS;
var price_DMP;

document.addEventListener('DOMContentLoaded', function() {
  loadTokenPrices();
});

function loadTokenPrices() {
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
      $('.DMS_Price').html('<span class="DMS_icon"></span>' + Math.round(price_DMS * 10000) / 10000);
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
      $('.DMP_Price').html('<span class="DMP_icon"></span>' + Math.round(price_DMP * 10000) / 10000);
    }
  });
}

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

// Parallax Settings
document.addEventListener("mousemove", parallax);
const elem = document.querySelector("#parallax");

function parallax(e) {
  let _w = window.innerWidth / 2;
  let _h = window.innerHeight / 2;
  let _mouseX = e.clientX;
  let _mouseY = e.clientY;
  let _depth1 = `${20 - (_mouseX - _w) * 0.002}% ${20 - (_mouseY - _h) * 0.002}%`;
  let _depth2 = `${20 - (_mouseX - _w) * 0.002}% ${20 - (_mouseY - _h) * 0.002}%`;
  let _depth3 = `${20 - (_mouseX - _w) * 0.002}% ${20 - (_mouseY - _h) * 0.002}%`;
  let x = `${_depth3}, ${_depth2}, ${_depth1}`;
  elem.style.backgroundPosition = x;
}
