const getSmallestIndex = (array) => {
  let highestNumber = array[0];
  for (let index = 1; index < array.length; index += 1) {
    const number = array[index];
    if (highestNumber > number) {
      highestNumber = number;
    }
  }
  return array.indexOf(highestNumber);
};

console.log(getSmallestIndex([2, 3, 6, 7, 10, 1])); // 5
console.log(getSmallestIndex([2, 4, 6, 7, 10, 0, -3])); // 6
