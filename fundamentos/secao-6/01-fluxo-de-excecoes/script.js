function checkInput(value1, value2) { return !value1 || !value2; }

function inputIsNum(value1, value2) {
  return Number.isNaN(Number(value1)) || Number.isNaN(Number(value2));
}

function calculateSum() {
  try {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    if (checkInput(value1, value2)) {
      throw new Error('Preencha os campos para realizar a soma');
    }
    if (inputIsNum(value1, value2)) {
      throw new Error('Informe dois números para realizar a soma');
    }
    const result = Number(value1) + Number(value2);

    return result;
  } catch (error) {
    return error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  const result = calculateSum();
  displayResult(result);
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
