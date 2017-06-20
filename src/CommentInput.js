import React, { Component } from 'react'

import style from './CommentInput.scss';

class CommentInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    handleContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSubmit) {
            const { username, content } = this.state;
            this.props.onSubmit({
                username,
                content
            });
        }
        this.setState({
            content: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <div className={style.fieldset}>
                    <label> 用户名: </label>
                    <input onChange={this.handleNameChange} />
                </div>
                <div className={style.fieldset}>
                    <label> 评论内容: </label>
                    <textarea value={this.state.content} onChange={this.handleContentChange} />
                </div>
                <button type="submit">发布</button>
            </form>
        )
    }
}

export default CommentInput;
