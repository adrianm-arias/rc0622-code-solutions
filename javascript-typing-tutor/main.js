
var $text = document.querySelectorAll('span');

var i = 0;
$text[i].className = 'underline';
document.addEventListener('keydown', function (event) {
  if (event.key === $text[i].textContent) {
    $text[i].className = 'correct-letter';
    i++;
    $text[i].className = 'underline';
  } else {
    $text[i].className = 'wrong-letter';
  }
  if (i > 30) {
    alert('Well Done, Would you like to play again?');
    location.reload();
  }
});
