var $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', function (event) {
  console.log('Event Target:', event.target);
  console.log('Event Target TagName:', event.target.tagName);
  if (event.target && event.target.matches('BUTTON')) {
    console.log('Closest:', event.target.closest('.task-list-item'));
    var $remove = event.target.closest('.task-list-item');
    $remove.remove();
  }
});
