import React, { Component } from 'react'

import Comment from './Comment';

class CommentList extends Component {
  render() {
    return (
        <div>
            <Comment content="I'm a comment." username="Tony" />
            <Comment content="I'm a comment." username="Sam"/>
        </div>
    )
  }
}

export default CommentList;
