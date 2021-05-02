import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

test('should change values', () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId('input').value).toBe('1');

  fireEvent.change(getByTestId('input'), {
    target: {
      value: '5',
    },
  });
  expect(getByTestId('input').value).toBe('5');
});

test('should add 1 to counter', () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId('counter').textContent).toBe('0');

  fireEvent.click(getByTestId('add-btn'));

  expect(getByTestId('counter').textContent).toBe('1');
});

test('should subtract 1 from counter', () => {
  const { getByTestId } = render(<Counter />);

  expect(getByTestId('counter').textContent).toBe('0');

  fireEvent.click(getByTestId('sub-btn'));

  expect(getByTestId('counter').textContent).toBe('-1');
});

test('changing input value then clicking + works', () => {
  const { getByTestId } = render(<Counter />);

  fireEvent.change(getByTestId('input'), { target: { value: '5' } });

  fireEvent.click(getByTestId('add-btn'));

  expect(getByTestId('counter').textContent).toBe('5');
});

test('changing input value then clicking - works', () => {
  const { getByTestId } = render(<Counter />);

  fireEvent.change(getByTestId('input'), { target: { value: '5' } });

  fireEvent.click(getByTestId('sub-btn'));

  expect(getByTestId('counter').textContent).toBe('-5');
});
