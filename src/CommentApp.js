import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

import style from './CommentApp.scss';

class CommentApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [],
            articleID: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const { params } = this.props;
        this.setState({ articleID: params.id });
        fetch('http://localhost:3000/comments')
            .then(response => response.json())
            .then(comments => {
                this.setState({
                    comments
                });
            });
    }

    handleSubmit(comment) {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        };

        fetch('http://localhost:3000/comments', options)
            .then(() => {
                this.setState({
                    comments: [comment, ...this.state.comments]
                });
            });
    }

    render() {
        return (
            <div className={style.wrapper}>
                <p className={style.articleName}>{`你现在查看的是第${this.state.articleID}篇文章.`}</p>
                <CommentInput onSubmit={this.handleSubmit} />
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp;
