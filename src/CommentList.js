import React, { Component } from 'react'

import Comment from './Comment';

class CommentList extends Component {
    render() {
        const { comments } = this.props
        return (
            <div>
                {comments.map((comment, i) =>
                    <Comment key={i} {...comment} />
                )}
            </div>
        )
    }
}

export default CommentList;
