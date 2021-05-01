import ReactDOM from 'react-dom';
import App from './App';

it('should render', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hello');
});
