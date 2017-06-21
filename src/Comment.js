import React, { Component } from 'react'

import style from './Comment.scss';

class Comment extends Component {
    render() {
        const { username, content } = this.props
        return (
            <div className={style.comment}>
                <p className={style.username}>{username}</p>
                <p className={style.divider}>:</p>
                <p className={style.content}>{content}</p>
            </div>
        )
    }
}

export default Comment;
