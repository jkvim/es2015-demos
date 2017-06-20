import React from 'react';
import ReactDOM from 'react-dom';
import style from './index.scss'

import Counter from './components/Counter';

class App extends React.Component {
    render() {
        return (
            <div>
                <Counter />
            </div> 
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
