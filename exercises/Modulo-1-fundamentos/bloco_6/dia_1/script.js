let states = ['Selecione o Estado','Acre','Alagoas', 'Amapá','Amazonas','Bahia','Ceará','Distrito Federal', 'Espírito Santo',
'Goías','Maranhão', 'Mato Grosso','Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',
'Pernambuco','Piauí', 'Rio de Janeiro','Rio Grande do Norte', 'Rio Grande do Sul','Rondônia', 'Roraíma' ,
'Santa Catarina', 'São Paulo', 'Sergipe','Tocantins'];

const inputDate = document.getElementById('init-date');
const email = document.getElementById('e-mail');

const createStates = () => {
  let getStates = document.getElementById('dropdown-state');

  for (let index = 0; index < states.length; index += 1) {
    let option = document.createElement('option');
    option.id = 'dataListOptions';

    getStates.appendChild(option).innerText = states[index];
    getStates.appendChild(option).value = states[index];
  };
};

createStates();

const validateDate = () => {
  let date = inputDate.value;

  if (date[2] === '/' && date[5] === '/') {
    const day = date.substr(0, 2);
    const month = date.substr(3, 2);
    const year = date.substr(6, 4);
  }
}

// O dia deve ser > 0 e <= 31.
// O mês deve ser > 0 e <= 12.
// O ano não pode ser negativo.
// Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.