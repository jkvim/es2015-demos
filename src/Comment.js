import React, { Component } from 'react'

class Comment extends Component {
    render() {
        const { username, content } = this.props
        return (
            <div>{`${username}: ${content}`}</div>
        )
    }
}

export default Comment;
