import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return <h1>This is me</h1>; // JSX
}

ReactDOM.render(<Greeting />, document.getElementById('root'));