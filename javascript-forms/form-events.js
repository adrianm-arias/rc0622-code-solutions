function handleFocus(event) {
  console.log('focus event fired');
  console.log('event target name:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('event target name:', event.target.name);
}

function handleInput(event) {
  console.log('event target name:', event.target.name);
  console.log('event target value:', event.target.value);
}

var $inputName = document.getElementById('user-name');
var $inputEmail = document.getElementById('user-email');
var $inputTextArea = document.getElementById('user-message');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$inputTextArea.addEventListener('focus', handleFocus);
$inputTextArea.addEventListener('blur', handleBlur);
$inputTextArea.addEventListener('input', handleInput);
