import { expect, test } from 'vitest';
import { factory } from './factory';

test('defaults to start 5, step 1 when no arguments passed', function () {
  const count = factory(5);
  expect(count()).toBe(6);
  expect(count()).toBe(7);
});

test('defaults to start -5, step 1 when no arguments passed', function () {
  const count = factory(-5);
  expect(count()).toBe(-4);
  expect(count()).toBe(-3);
});

test('defaults to start 3.5, step 1 when no arguments passed', function () {
  const count = factory(3.5);
  expect(count()).toBe(4.5);
  expect(count()).toBe(5.5);
});

test('defaults to start 5, step 1.5', function () {
  const count = factory(5, 1.5);
  expect(count()).toBe(6.5);
  expect(count()).toBe(8);
});

test('defaults to start -3.5, step 1 when no arguments passed', function () {
  const count = factory(-3.5);
  expect(count()).toBe(-2.5);
  expect(count()).toBe(-1.5);
});

test('defaults to start 5, step -1.5', function () {
  const count = factory(5, -1.5);
  expect(count()).toBe(3.5);
  expect(count()).toBe(2);
});

test('defaults to start 5, step 0', function () {
  const count = factory(5, 0);
  expect(count()).toBe(5);
  expect(count()).toBe(5);
});

test('handles large start and step values', () => {
  const largeIncrement = factory(1e9, 1e8);
  expect(largeIncrement()).toBe(1e9 + 1e8);
  expect(largeIncrement()).toBe(1e9 + 2e8);
});

test('creates a count function', function () {
  const count = factory(1, 1);
  expect(count()).toBe(2);
  expect(count()).toBe(3);
});

test('creates a count starting from 10 with a step of 5', function () {
  const count = factory(10, 5);
  expect(count()).toBe(15);
  expect(count()).toBe(20);
});

test('defaults to start 0, step 1 when no arguments passed', function () {
  const count = factory();
  expect(count()).toBe(1);
  expect(count()).toBe(2);
});
