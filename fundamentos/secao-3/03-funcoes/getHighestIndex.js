const getHighestIndex = (array) => {
  let highestNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    const number = array[index];
    if (highestNumber < number) {
      highestNumber = number;
    }
  }
  return array.indexOf(highestNumber);
};

console.log(getHighestIndex([2, 3, 6, 7, 10, 1])); // 4
console.log(getHighestIndex([9, 1, 3, 5, 7])); // 0
console.log(getHighestIndex([-9, -1, -3, -5, -7])); // 1
