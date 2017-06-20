import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss'

import ControlledForm from './components/ControlledForm';
import UnControlledForm from './components/UnControlledForm';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>受控组件</h1>
                <ControlledForm />
                <h1>非受控组件</h1>
                <UnControlledForm />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
