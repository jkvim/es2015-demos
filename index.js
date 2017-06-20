import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text }) => {
    const style = {
        background: 'deepskyblue',
        fontSize: '24px',
        color: 'white',
        padding: '5px 10px'
    };
    return (
        <button style={style}>{text}</button>
    );
}

ReactDOM.render(
    <Button text="Submit"/>,
    document.getElementById('root')
);
