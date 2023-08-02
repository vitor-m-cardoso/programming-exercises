const verifyPalindrome = (string) => {
  const reversedString = string.split('').reverse().join('');
  return reversedString === string;
};

console.log(verifyPalindrome('desenvolvimento'));
