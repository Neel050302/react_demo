import React from "react";

const date = new Date().toLocaleDateString();
const time = new Date().getHours();
let greeting = '';
const cssStyle = {};

if (time >= 1 && time < 12) {
    greeting = 'good morning';
    cssStyle.color = 'green';
} else if (time >= 12 && time < 20) {
    greeting = 'good afternoon';
    cssStyle.color = 'purple';
} else {
    greeting = 'good evening';
    cssStyle.color = 'black';
}
function Heading() {
    return (
        <>
            <div className='main'>

                <div className='header'>
                    <h1>Hello sir,<span style={cssStyle}> {greeting}</span></h1>
                </div>
            </div>
        </>


    );
}

export default Heading;