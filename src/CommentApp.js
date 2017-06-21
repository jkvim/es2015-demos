import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

     componentDidMount() {
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    comments
                });
            });
    }

    handleSubmit(comment) {
        this.setState({
            comments: [comment, ...this.state.comments]
        })
    }

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
