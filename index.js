import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss'

const Button = ({ type, text }) => {
    const className = type === 'alert' ? style.alertButton : style.mainButton
    return (
        <button className={`${className} ${style.button}`}>{text}</button>
    );
}

const MainButton = () => <Button type="submit" text="Submit" />
const AlertButton = () => <Button type="alert" text="Alert" />

class App extends React.Component {
    render() {
        return (
            <div>
                <MainButton />
                <AlertButton />
            </div> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
