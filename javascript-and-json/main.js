var bookArrays = [
  {
    isbn: '0547928211',
    title: 'The Fellowship Of The Ring',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '1514297272',
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '0547928211',
    title: 'The Return Of The King',
    author: 'J.R.R. Tolkien'
  }
];

console.log('Array of Books:', bookArrays);
console.log('typeof:', typeof bookArrays);

var bookJson = JSON.stringify(bookArrays);

console.log('JSON String:', bookJson);
console.log('typeof:', typeof bookJson);

var jsonString = '{"isbn": "0547928211", "title": "The Fellowship Of The Ring"}';

console.log('JSON String:', jsonString);
console.log('typeof:', typeof jsonString);

var jsObject = JSON.parse(jsonString);

console.log('JSON String:', jsObject);
console.log('typeof:', typeof jsObject);
