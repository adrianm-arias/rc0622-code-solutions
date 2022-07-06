var numbers = [15, 25, 35];

var maximumValue = Math.max(...numbers);

console.log('maximumValue:', maximumValue);

var heroes = ['Spider-man', 'Iron-Man', 'Thor', 'Groot'];

var randomNumber = Math.random() * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust'
  },
  {
    title: 'Ulysses',
    author: 'James Joyce'
  },
  {
    title: 'Don Quixote',
    author: 'Miguel De Cervantes'
  }
];

var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('Library:', library);

var fullName = 'Adrian Arias';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var sayMyName = firstAndLastName[0].toUpperCase();

console.log('sayMyName:', sayMyName);
