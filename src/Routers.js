import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import CommentApp from './CommentApp';
import ArticleApp from './ArticleApp'

export default () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={ArticleApp} />
            <Route path="commentApp/:id" component={CommentApp} />
        </Router>
    )
}