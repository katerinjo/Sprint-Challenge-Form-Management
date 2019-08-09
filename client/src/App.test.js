import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

import shuffled from './utils/shuffled';

afterEach(rtl.cleanup);

it('submit button displayed', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/submit/i));
});

it('shuffled() is at least mostly random', () => {
  const arr = [true].concat(new Array(20).fill(false));
  const times = 200;
  let unmovedCount = 0;
  for (let i = 0; i < times; i++) {
    if (shuffled(arr)[0]) {
      unmovedCount++;
    }
  }
  expect(unmovedCount / times).toBeLessThan(0.5);
});