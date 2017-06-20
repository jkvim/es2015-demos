import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    handleIncrease() {
        console.log('increase')
        this.setState({
            count: this.state.count + 1
        })
    }
    handleDecrease() {
        console.log('descrease')
        this.setState({
            count: this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleIncrease.bind(this)}>+</button>
                <button onClick={this.handleDecrease.bind(this)}>-</button>
            </div>
        );
    }
}

export default Counter;