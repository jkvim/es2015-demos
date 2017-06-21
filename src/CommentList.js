import React, { Component } from 'react'
import PropTypes from 'prop-types';

import Comment from './Comment';

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(Object)
    }

    componentWillMount() {
        console.log('Son componentWillMount');
    }

    componentDidMount() {
        console.log('Son componentDidMount');
    }

    componentWillReceiveProps() {
        console.log('Son componentWillReceiveProps');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Son shouldComponentUpdate');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Son componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Son componentDidUpdate');
    }

    render() {
        console.log('Son render');
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
