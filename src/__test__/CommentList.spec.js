import React from 'react';
import renderer from 'react-test-renderer';

import CommentList from '../CommentList';


describe('<CommentList /> Snapshot testing', () => {
    
    it('should render correctly', () => {
        // given
        const comments = [
            {
                username: 'Tony',
                content: 'I have a pen, I have an apple'
            },
            {
                username: 'John',
                content: 'I have a pen, I have a pineapple'
            }
        ]

        // when
        const tree = renderer
            .create(<CommentList comments={comments} />)
            .toJSON()

        // then
        expect(tree).toMatchSnapshot();
    });
    
});
