import React from 'react';
import * as rtl from '@testing-library/react';
import { render } from 'react-dom';
import { create } from "react-test-renderer";
import { act } from 'react-dom/test-utils';
import App from './App';

import shuffled from './utils/shuffled';
import FoodList from './components/FoodList';

jest.setTimeout(30000);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

it('submit button displayed', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getByText(/submit/i));
  rtl.cleanup();
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

it('button shuffles list', async () => {
  let container = document.createElement('div');
  document.body.appendChild(container);
  await act(async () => {
    render(<FoodList />, container);
  });
  // render(<FoodList />, container);
  await sleep(5000);
  const button = container.querySelector('button');

  const oldFirst = container.querySelector('li');
  const oldText = oldFirst.innerText;
  console.log(oldText);
  await act(async () => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  // button.dispatchEvent(new MouseEvent('click', {bubbles: true}))
  await sleep(3000);
  const newFirst = container.querySelector('li');
  const newText = newFirst.innerText;
  console.log(newText);
  expect(oldText).not.toBe(newFirst.textContent);
  document.body.removeChild(container);
  container = null;

//   const foodList = create(<FoodList />);
//   const instance = foodList.root;
//   const firstItem = instance.findByType('li');
//   const firstVal = firstItem.innerText;

//   const button = instance.findByType('button');
//   button.props.onClick();

//   const newItem = instance.findByType('li');
//   const newVal = newItem.innerText;

//   expect(newVal).not.toBe(firstVal);
});