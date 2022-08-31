import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton() {
  return <button>Click Me</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const button = <CustomButton/>;
root.render(button);
