
var $heading = document.querySelector('.countdown-display');

function countdown() {
  var countdown = $heading.textContent--;
  if (countdown === 1) {
    clearInterval(timer);
    $heading.textContent = '~Earth Beeeelooowww Us~';
  }
}

var timer = setInterval(countdown, 1000);
