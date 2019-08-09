import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders submit button', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  const button = div.queryByText(/submit/i);
  expect(button).toBeTruthy();
  ReactDOM.unmountComponentAtNode(div);
});