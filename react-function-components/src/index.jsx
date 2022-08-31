import React from 'react';
import ReactDOM from 'react-dom/client';

function customButton() {
  return <button>Click Me</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const button = customButton();
root.render(button);
