import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(comment) {
        this.setState({
            comments: this.state.comments.concat(comment)
        });
    }

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
