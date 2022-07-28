var $rightArrow = document.getElementById('right-icon');
var $leftArrow = document.getElementById('left-icon');

var $image = document.getElementById('img');

var imageArray = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var counter = 0;

function setImg() {
  return $image.setAttribute('src', imageArray[counter]);
}

$rightArrow.addEventListener('click', function (event) {
  if (counter < 4) {
    counter++;
  } else {
    counter = 0;
  }
  dots();
  timerReset();
  return setImg();
});

$leftArrow.addEventListener('click', function (event) {
  if (counter > 0) {
    counter--;
  } else {
    counter = 4;
  }
  dots();
  timerReset();
  return setImg();
});

function carousel() {
  if (counter < 4) {
    counter++;
  } else {
    counter = 0;
  }
  dots();
  return setImg();
}
var timer = setInterval(carousel, 3000);

function timerReset() {
  clearInterval(timer);
  timer = setInterval(carousel, 3000);
}

document.addEventListener('click', function (event) {
  if (event.target.matches('.fa-circle')) {
    if (event.target.id === 'dot-one') {
      counter = 0;
      dots();
      timerReset();
      return setImg();
    } else if (event.target.id === 'dot-two') {
      counter = 1;
      dots();
      timerReset();
      return setImg();
    } else if (event.target.id === 'dot-three') {
      counter = 2;
      dots();
      timerReset();
      return setImg();
    } else if (event.target.id === 'dot-four') {
      counter = 3;
      dots();
      timerReset();
      return setImg();
    } else if (event.target.id === 'dot-five') {
      counter = 4;
      dots();
      timerReset();
      return setImg();
    }
  }
});

var $allDots = document.querySelectorAll('.dot');

function dots() {
  for (var i = 0; i < $allDots.length; i++) {
    if (counter === i) {
      $allDots[i].className = 'dot fa-solid fa-circle';
    } else {
      $allDots[i].className = 'dot fa-regular fa-circle';
    }
  }
}
