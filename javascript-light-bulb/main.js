// access and identify the button in the DOM
// listening for a click event on the button
// once clicked change colors
// repeat to change colors on second click
var $background = document.querySelector('.bg-color-day');

var $button = document.querySelector('.button-light');

function lightOrDark() {
  if ($button.className === 'button-light') {
    $button.className = 'button-dark';
    $background.className = 'column-full flex-row bg-color-night';
  } else if ($button.className === 'button-dark') {
    $button.className = 'button-light';
    $background.className = 'column-full flex-row bg-color-day';
  }
}

$button.addEventListener('click', lightOrDark);
