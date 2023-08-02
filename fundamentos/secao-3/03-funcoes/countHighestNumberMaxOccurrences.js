const findHighestNumber = (numberArr) => {
  let highestNumber = numberArr[0];
  for (let index = 1; index < numberArr.length; index += 1) {
    const number = numberArr[index];
    if (highestNumber < number) {
      highestNumber = number;
    }
  }
  return highestNumber;
};

const countHighestNumberMaxOccurrences = (array) => {
  const highestNumber = findHighestNumber(array);
  let occurrences = 0;
  for (let index = 0; index < array.length; index += 1) {
    const number = array[index];
    if (highestNumber === number) {
      occurrences += 1;
    }
  }
  return occurrences;
};

console.log(countHighestNumberMaxOccurrences([9, 1, 2, 3, 9, 5, 7])); // 2
console.log(countHighestNumberMaxOccurrences([0, 4, 4, 4, 9, 2, 1])); // 1
console.log(countHighestNumberMaxOccurrences([0, 0, 0])); // 3