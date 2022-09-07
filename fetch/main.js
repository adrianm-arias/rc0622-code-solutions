fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'GET'
})
  .then(response => response.json())
  .then(users => {
    console.log('data:', users);
  })
  .catch(error => {
    console.error('error:', error);
  });

fetch('https://pokeapi.co/api/v2/pokemon/6', {
  method: 'GET'
})
  .then(response => response.json())
  .then(charizard => {
    console.log('pokemon:', charizard);
  })
  .catch(error => {
    console.error('error:', error);
  });
