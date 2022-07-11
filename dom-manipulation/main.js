var $button = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

var counter = 0;
$button.addEventListener('click', function () {
  counter++;
  $clicks.textContent = 'Clicks: ' + counter;
});

$button.addEventListener('click', function () {
  if (counter < 4) {
    $button.className = 'hot-button cold';
  }
  if (counter >= 4 && counter < 7) {
    $button.className = 'hot-button cool';
  }
  if (counter >= 7 && counter < 10) {
    $button.className = 'hot-button tepid';
  }
  if (counter >= 10 && counter < 13) {
    $button.className = 'hot-button warm';
  }
  if (counter >= 13 && counter < 16) {
    $button.className = 'hot-button hot';
  }
  if (counter >= 16) {
    $button.className = 'hot-button nuclear';
  }
});
