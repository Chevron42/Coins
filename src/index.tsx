// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = 'Hello webpack'

//     return element;
//   }

//   document.body.appendChild(component());

import React from "react";
import ReactDom from "react-dom";

function component() {
  return (
    <div>
      <br />Hello react
    </div>
  );
}

ReactDom.render(component(), document.body);
