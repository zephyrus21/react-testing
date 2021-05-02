import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

test('should render header', () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('header').textContent).toBe('Counter');
});

test('counter should initially start with 0', () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('counter').textContent).toBe('0');
});

test('input should contains initial value of 1', () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('input').value).toBe('1');
});

test('add button renders with +', () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('add-btn').textContent).toBe('+');
});

test('subtract button renders with -', () => {
  const { getByTestId } = render(<Counter />);
  expect(getByTestId('sub-btn').textContent).toBe('-');
});
