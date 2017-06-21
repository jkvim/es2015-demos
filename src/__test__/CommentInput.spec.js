import React from 'react';
import { shallow } from 'enzyme';
import CommentInput from '../CommentInput';


describe('<CommentInput DOM testing />', () => {
    it('should get username from localStorage', () => {
        // given
        const username = 'Tony'
        const onSubmit = () => { }

        // when
        global.localStorage.setItem('username', username);
        const commentInput = shallow(
            <CommentInput onSubmit={onSubmit} />
        );

        // then
        expect(commentInput.state('username')).toEqual(username);
    });

    it('should submit username and content', () => {
        // given
        let comment = null;
        const onSubmit = jest.fn((newComment) => comment = newComment);
        const username = 'Tony';
        const content = 'Hello';

        // when
        const commentInput = shallow(
            <CommentInput onSubmit={onSubmit} />
        );
        commentInput.find('input').simulate('change', { target: { value: username } });
        commentInput.find('textarea').simulate('change', { target: { value: content }});
        commentInput.find('form').simulate('submit', { preventDefault: () => {}});

        // then
        expect(onSubmit.mock.calls.length).toBe(1);
        expect(comment).toEqual({ username, content });
    });
});

