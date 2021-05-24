const { uppercase } = require('./src/exercise1');

test('transform letters to uppercase', (done) => {
  uppercase('string', (result) => {
    expect(result).toBe('STRING');
    done();
  });
})