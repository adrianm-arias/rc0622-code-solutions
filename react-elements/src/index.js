import React from 'react';
import ReactDOM from 'react-dom';

const title = React.createElement(
  'h1',
  null,
  'Hello, React!'
);
console.log('React Element:', title);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(title);
