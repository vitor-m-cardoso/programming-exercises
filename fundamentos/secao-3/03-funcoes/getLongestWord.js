const getLongestWord = (array) => {
  let longestWord = array[0];
  for (let index = 0; index < array.length; index += 1) {
    const word = array[index];
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
};

console.log(getLongestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); // Fernanda
console.log(getLongestWord(['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'])); // JavaScript
