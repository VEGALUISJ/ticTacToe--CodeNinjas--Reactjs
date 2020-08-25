import React from 'react';

function Square(props) {
    function renderImg() {
        if (props.value) {
            if (props.value === "X") {
                return <img src="./img/NinjaBoy.png" alt="NinjaBoy" />
            } else {
                return <img src="./img/NinjaGirl.png" alt="NinjaBoy" />
            }
        } else {
            return ""
        }
    }

    return (
        <button
            className='square'
            onClick={() => props.onClick()}
        >
            {renderImg()}
        </button>
    );
}


export default Square;