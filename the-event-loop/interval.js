let count = 3;
const countdownInt = setInterval(countdown, 1000);

function countdown() {
  // console.log(count);
  // count--;
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    clearInterval(countdownInt);
    console.log('Blast off!');
  }
}
