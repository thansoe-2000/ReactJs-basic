import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
  return (
    <div>

    <h1>This is me, Nice to meet You React </h1>
      <p>This is paragraph</p>
      <a href="">Read More</a>
  </div>
  ); // JSX
}


ReactDOM.render(<Greeting />, document.getElementById('root'));