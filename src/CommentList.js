import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(Object)
    }
    
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
