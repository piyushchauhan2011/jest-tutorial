import { assert } from 'chai';

import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sample 1', () => {
  let foo = 'bar';
  assert.isTrue(true);
  assert.typeOf(foo, 'string');
});
