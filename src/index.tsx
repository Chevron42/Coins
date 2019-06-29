// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = 'Hello webpack'

//     return element;
//   }

//   document.body.appendChild(component());

import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const CustomButton = styled.button`
  background-color: red;
  color: green;
`;

function Component() {
  const [name, setName] = useState("Bob");

  return (
    <div>
      <br />
      Hello {name}
      <CustomButton onClick={e => setName(name[0] === "A" ? "Bill" : "Alice")}>
        Click me!!
      </CustomButton>
    </div>
  );
}

ReactDom.render(<Component />, document.body);
