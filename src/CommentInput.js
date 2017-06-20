import React, { Component } from 'react'
import PropTypes from 'prop-types';

import style from './CommentInput.scss';

class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            content: ''
        };
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameInputBlur = this.handleNameInputBlur.bind(this);
    }

    componentWillMount() {
        this.getUserName();
    }

    componentDidMount() {
        if (this.textarea) {
            this.textarea.focus();
        }
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

    handleNameInputBlur() {
        this.saveUserName();
    }

    saveUserName() {
        localStorage.setItem('username', this.state.username);
    }

    getUserName() {
        const username = localStorage.getItem('username');
        this.setState({
            username
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={style.form}>
                <div className={style.fieldset}>
                    <label> 用户名: </label>
                    <input
                        onChange={this.handleNameChange}
                        onBlur={this.handleNameInputBlur}
                        value={this.state.username}
                    />
                </div>
                <div className={style.fieldset}>
                    <label> 评论内容: </label>
                    <textarea
                        value={this.state.content}
                        onChange={this.handleContentChange}
                        ref={textarea => { this.textarea = textarea }}
                    />
                </div>
                <button type="submit">发布</button>
            </form>
        )
    }
}

export default CommentInput;
