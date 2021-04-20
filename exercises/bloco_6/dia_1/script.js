const states = document.getElementById('state');

function addStates() {
  const stateOptions =  ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  for (let index = 0; index < stateOptions.length; index += 1) {
    const addOptions = document.createElement('option');
    states.appendChild(addOptions).innerText = stateOptions[index];
    states.appendChild(addOptions).value = stateOptions[index];
  }
}

addStates();

function verifyData() {

}