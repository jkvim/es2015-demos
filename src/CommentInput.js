import React, { Component } from 'react'

import style from './CommentInput.scss';

class CommentInput extends Component {
    render() {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <div className={style.fieldset}>
                    <label> 用户名: </label>
                    <input />
                </div>
                <div className={style.fieldset}>
                    <label> 评论内容: </label>
                    <textarea />
                </div>
                <button type="submit">发布</button>
            </form>
        )
    }
}

export default CommentInput;
