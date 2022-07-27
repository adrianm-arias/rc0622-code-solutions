var $heading = document.querySelector('.message');

function changeHeader() {
  $heading.textContent = 'Hello';
}

setTimeout(changeHeader, 2000);
