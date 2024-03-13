// index.test.js
const add = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 3 + 4 to equal 7', () => {
  expect(add(3, 4)).toBe(7);
});
