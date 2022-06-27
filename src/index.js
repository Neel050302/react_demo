import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "neel";
const lname= "lodhiya";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
/* only use expression not use statement */

ReactDOM.render(<>
  <h1 contentEditable="true">{`My name is ${fname}  ${lname}`} </h1>
  <p>{`Today's Date: ${date} `}</p>
  <p>{`Time: ${time}`}</p>
  <img src="https://picsum.photos/210/300"  alt="img"/>
  <img src="https://picsum.photos/220/300"  alt="img"/>
  <img src="https://picsum.photos/230/300"  alt="img"/>
</>

, document.getElementById("root"));