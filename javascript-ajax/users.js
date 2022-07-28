var $userList = document.querySelector('#user-list');
console.log($userList);

function getUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    var response = xhr.response;
    for (var i = 0; i < response.length; i++) {
      var createLi = document.createElement('li');
      createLi.textContent = response[i].name;
      $userList.appendChild(createLi);
    }
  });
  xhr.send();
}

getUserData();
