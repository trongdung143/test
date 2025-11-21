const sum = require('./sum');

test('adds 3 + 5 to equal 8', () => {
  expect(sum(3, 5)).toBe(8);
});

test('adds 0 + 0 to equal 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('adds negative numbers correctly', () => {
  expect(sum(-1, -2)).toBe(-3);
});

