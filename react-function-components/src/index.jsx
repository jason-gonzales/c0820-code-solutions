import React from 'react';
import ReactDom from 'react-dom';

function CustomButton(props) {
  return <button>Click Me!</button>;
}

const element = <CustomButton/>;

ReactDom.render(
  element,
  document.querySelector('#root')
);
