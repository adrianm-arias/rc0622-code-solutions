var $tabContainer = document.querySelector('.tab-container');

var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target && event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].setAttribute('class', 'tab active');
      } else {
        $tab[i].setAttribute('class', 'tab');
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var y = 0; y < $view.length; y++) {
      if (dataView === $view[y].getAttribute('data-view')) {
        $view[y].setAttribute('class', 'view');
      } else {
        $view[y].setAttribute('class', 'view hidden');
      }
    }
  }
});
