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
  return setImg();
});

$leftArrow.addEventListener('click', function (event) {
  if (counter > 0) {
    counter--;
  } else {
    counter = 4;
  }
  dots();
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

setInterval(carousel, 3000);

var $dotOne = document.getElementById('dot-one');
var $dotTwo = document.getElementById('dot-two');
var $dotThree = document.getElementById('dot-three');
var $dotFour = document.getElementById('dot-four');
var $dotFive = document.getElementById('dot-five');

document.addEventListener('click', function (event) {
  if (event.target.matches('.fa-circle')) {
    if (event.target.id === 'dot-one') {
      counter = 0;
      dots();
      return setImg();
    } else if (event.target.id === 'dot-two') {
      counter = 1;
      dots();
      return setImg();
    } else if (event.target.id === 'dot-three') {
      counter = 2;
      dots();
      return setImg();
    } else if (event.target.id === 'dot-four') {
      counter = 3;
      dots();
      return setImg();
    } else if (event.target.id === 'dot-five') {
      counter = 4;
      dots();
      return setImg();
    }
  }
});

function dots() {
  if (counter === 0) {
    $dotOne.className = 'fa-solid fa-circle';
    $dotTwo.className = 'fa-regular fa-circle';
    $dotThree.className = 'fa-regular fa-circle';
    $dotFour.className = 'fa-regular fa-circle';
    $dotFive.className = 'fa-regular fa-circle';
  } else if (counter === 1) {
    $dotOne.className = 'fa-regular fa-circle';
    $dotTwo.className = 'fa-solid fa-circle';
    $dotThree.className = 'fa-regular fa-circle';
    $dotFour.className = 'fa-regular fa-circle';
    $dotFive.className = 'fa-regular fa-circle';
  } else if (counter === 2) {
    $dotOne.className = 'fa-regular fa-circle';
    $dotTwo.className = 'fa-regular fa-circle';
    $dotThree.className = 'fa-solid fa-circle';
    $dotFour.className = 'fa-regular fa-circle';
    $dotFive.className = 'fa-regular fa-circle';
  } else if (counter === 3) {
    $dotOne.className = 'fa-regular fa-circle';
    $dotTwo.className = 'fa-regular fa-circle';
    $dotThree.className = 'fa-regular fa-circle';
    $dotFour.className = 'fa-solid fa-circle';
    $dotFive.className = 'fa-regular fa-circle';
  } else if (counter === 4) {
    $dotOne.className = 'fa-regular fa-circle';
    $dotTwo.className = 'fa-regular fa-circle';
    $dotThree.className = 'fa-regular fa-circle';
    $dotFour.className = 'fa-regular fa-circle';
    $dotFive.className = 'fa-solid fa-circle';
  }
}
