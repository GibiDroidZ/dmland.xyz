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
