import React, { Component } from 'react'
import PropTypes from 'prop-types';

import style from './Comment.scss';

class Comment extends Component {
    static propTypes = {
        username: PropTypes.string,
        content: PropTypes.string
    }
    
    render() {
        const { username, content } = this.props
        return (
            <div className={style.comment}>
                <p className={style.username}>{username}</p>:
                <p className={style.content}>{content}</p>
            </div>
        )
    }
}

export default Comment;
