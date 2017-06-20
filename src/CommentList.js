import React, { Component } from 'react'

import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
        <div>
            <Comment content="I'm a comment."/>
            <Comment content="I'm a comment."/>
            <Comment content="I'm a comment."/>
            <Comment content="I'm a comment."/>
            <Comment content="I'm a comment."/>
        </div>
    )
  }
}

export default CommentList;
