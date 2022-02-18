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

//https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=0x9a26e6d24df036b0b015016d1b55011c19e76c87&vs_currencies=USD
