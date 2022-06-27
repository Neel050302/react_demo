import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const fname = "neel";
const lname= "lodhiya";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
/* only use expression not use statement */

ReactDOM.render(<>
<div className='name_header'>
  <h1>{`My name is ${fname}  ${lname}`} </h1>
</div>
  
<div className='image_div'>
<img src="https://picsum.photos/210/300" className='image_div'alt="img"/>
  <img src="https://picsum.photos/220/300" className='image_div' alt="img"/>
  <img src="https://picsum.photos/230/300" className='image_div' alt="img"/>
</div>

</>

, document.getElementById("root"));