import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "neel";
const lname= "lodhiya";
/* only use expression not use statement */

ReactDOM.render(<>
  <h1>{`My name is ${fname}  ${lname}`} </h1>
  <p> add of two number {2+3}</p> 
</>

, document.getElementById("root"));