import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const date = new Date().toLocaleDateString();
const time = new Date().getHours();
let greeting = '';
const cssStyle = { };

if(time >=1 && time<12){
  greeting ='good morning';
  cssStyle.color = 'green';
}else if(time>=12 && time<20){
  greeting ='good afternoon';
}else{
  greeting ='good evening';
}
ReactDOM.render(<>
<div className='main'>
  <div className='header'>
   <h1>Hello sir,<span style={cssStyle}> {greeting}</span></h1>
  </div>
</div>


</>

, document.getElementById("root"));