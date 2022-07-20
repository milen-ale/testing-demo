const capString = require('./capString.js');

test('should return 1st letter capitalized', () => {
  // Arrange
  const str = 'sidney';

  // Act
  const capped = capString(str);

  // Assert
  expect(capped).toBe(str[0].toUpperCase() + str.slice(1));
});
