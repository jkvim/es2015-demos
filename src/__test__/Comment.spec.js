import React from 'react';
import renderer from 'react-test-renderer';

import Comment from '../Comment';


describe('<Comment /> snapshot', () => {
    it('should render correctly', () => {
        const tree = renderer
            .create(<Comment username="XiaoMing" content="Hello World" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
