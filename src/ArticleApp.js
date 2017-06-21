import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './ArticleApp.scss';

class ArticleApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: []
        }
    }

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        fetch('http://localhost:3000/articles', options)
            .then(response => response.json())
            .then(resolve => {
                this.setState({ articles: resolve });
            });
    }

    render() {
        const { articles } = this.state;
        return (
            <ul className={styles.articles}>
                {articles.map((article, i) => {
                    return (
                        <li className={styles.item} key={i}>
                            <a href={`#/commentApp/${article.id}`}>{article.articleName}</a>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ArticleApp;
