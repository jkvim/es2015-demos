import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

import style from './CommentApp.scss';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('Parent constructor');
    }

    componentWillMount() {
        console.log('Parent componentWillMount');
    }

    componentWillReceiveProps() {
        console.log(componentWillReceiveProps);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Parent componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Parent componentDidUpdate');
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Parent shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        console.log('Parent componentDidMount')
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    comments
                });
            });
    }

    handleSubmit(comment) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        };

        fetch('http://localhost:3000/comments', options)
            .then(() => {
                this.setState({
                    comments: [comment, ...this.state.comments]
                });
            });
    }

    render() {
        console.log('Parent render');
        return (
            <div className={style.wrapper}>
                <CommentInput onSubmit={this.handleSubmit} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
