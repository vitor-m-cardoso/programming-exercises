const mathOperation = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    const isNotANumber =
      typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number';
    if (isNotANumber) {
      reject(new Error('Informe apenas números'));
    }
    let result = (a + b) * c;
    if (result < 50) {
      reject(new Error('Valor muito baixo'));
    } else {
      resolve(result);
    }
  });
  return promise;
};

const main = async () => {
  const result = await mathOperation(12312, 3121, 3211);
  console.log(result);
};

main();
