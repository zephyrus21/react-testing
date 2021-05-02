import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

let getByTestId;

beforeEach(() => {
  const component = render(<Counter />);
  getByTestId = component.getByTestId;
});

test('should render header', () => {
  expect(getByTestId('header').textContent).toBe('Counter');
});

test('counter should initially start with 0', () => {
  expect(getByTestId('counter').textContent).toBe('0');
});

test('input should contains initial value of 1', () => {
  expect(getByTestId('input').value).toBe('1');
});

test('add button renders with +', () => {
  expect(getByTestId('add-btn').textContent).toBe('+');
});

test('subtract button renders with -', () => {
  expect(getByTestId('sub-btn').textContent).toBe('-');
});

test('should change values', () => {
  expect(getByTestId('input').value).toBe('1');

  fireEvent.change(getByTestId('input'), {
    target: {
      value: '5',
    },
  });
  expect(getByTestId('input').value).toBe('5');
});

test('should add 1 to counter', () => {
  expect(getByTestId('counter').textContent).toBe('0');

  fireEvent.click(getByTestId('add-btn'));

  expect(getByTestId('counter').textContent).toBe('1');
});

test('should subtract 1 from counter', () => {
  expect(getByTestId('counter').textContent).toBe('0');

  fireEvent.click(getByTestId('sub-btn'));

  expect(getByTestId('counter').textContent).toBe('-1');
});

test('changing input value then clicking + works', () => {
  fireEvent.change(getByTestId('input'), { target: { value: '5' } });

  fireEvent.click(getByTestId('add-btn'));

  expect(getByTestId('counter').textContent).toBe('5');
});

test('changing input value then clicking - works', () => {
  fireEvent.change(getByTestId('input'), { target: { value: '5' } });

  fireEvent.click(getByTestId('sub-btn'));

  expect(getByTestId('counter').textContent).toBe('-5');
});
