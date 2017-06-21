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
});

