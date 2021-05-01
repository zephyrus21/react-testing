import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('should show a comment box', () => {
  const root = document.createElement('div');

  ReactDOM.render(<App />, root);

  expect(root.innerHTML).toContain('CommentBox');

  ReactDOM.unmountComponentAtNode(root);
});
