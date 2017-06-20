import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    handleSubmit(comment) {
        console.log(comment);
    }

    render() {
        return (
            <div>
                <CommentInput onSubmit={this.handleSubmit}/>
                <CommentList />
            </div>
        )
    }
}

export default CommentApp;
