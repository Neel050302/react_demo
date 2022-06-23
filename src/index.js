import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "neel";
const lname= "lodhiya";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
/* only use expression not use statement */

ReactDOM.render(<>
  <h1>{`My name is ${fname}  ${lname}`} </h1>
  <p>{`Today's Date: ${date} `}</p>
  <p>{`Time: ${time}`}</p>
</>

, document.getElementById("root"));