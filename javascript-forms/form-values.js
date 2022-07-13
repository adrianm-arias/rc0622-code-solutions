var $contactForm = document.getElementById('contact-form');

var messageData = {};

$contactForm.addEventListener('submit', event => {
  event.preventDefault();
  messageData.name = $contactForm.elements.name.value;
  messageData.email = $contactForm.elements.email.value;
  messageData.message = $contactForm.elements.message.value;
  console.log('Message Data:', messageData);
  $contactForm.reset();
});
