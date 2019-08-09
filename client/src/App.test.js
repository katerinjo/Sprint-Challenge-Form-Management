import React from 'react';
import * as rtl from '@testing-library/react';
// import 'jest-dom/extend-expect';
import App from './App';

afterEach(rtl.cleanup);

it('submit button displayed', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/submit/i));
});