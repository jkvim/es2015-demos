import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text }) => <button>{text}</button>

ReactDOM.render(
    <Button text="Submit"/>,
    document.getElementById('root')
);
