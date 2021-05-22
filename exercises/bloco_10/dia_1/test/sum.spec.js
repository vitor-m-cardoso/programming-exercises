const { sum } = require('./src/myRemove');

test('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, '5')).toThrow();
  expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
});