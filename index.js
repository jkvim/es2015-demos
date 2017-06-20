import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss'

const Button = ({ text }) => {
    return (
        <button className={style.button}>{text}</button>
    );
}

ReactDOM.render(
    <Button text="Submit"/>,
    document.getElementById('root')
);
