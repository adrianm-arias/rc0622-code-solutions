// access and identify open modal button & no button
// listening for click events on each respective button
// when open modal button clicked modal should open
// when no button is clicked modal should close

var $openModalButton = document.querySelector('.open-modal-button');
var $closeModalButton = document.querySelector('.close-modal-button');
var $displayOption = document.querySelector('.hide-modal');

$openModalButton.addEventListener('click', function () {
  $displayOption.className = 'row pos-relative show-modal';
});

$closeModalButton.addEventListener('click', function () {
  $displayOption.className = 'row pos-relative hide-modal';
});
