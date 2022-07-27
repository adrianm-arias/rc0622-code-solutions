
var $heading = document.querySelector('.countdown-display');

function countdown() {
  var countdown = $heading.textContent--;
  if (countdown === 1) {
    clearInterval(1);
    $heading.textContent = '~Earth Beeeelooowww Us~';
  }
}

setInterval(countdown, 1000);
