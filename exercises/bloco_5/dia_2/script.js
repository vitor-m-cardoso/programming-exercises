// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let heading = document.createElement('h1');
document.body.appendChild(heading).innerText = 'Exercício 5.2 - JavaScript DOM';

// 2. Adicione a tag div com a classe main-content como filho da tag body ;
let createFirstDiv = document.createElement('div')
createFirstDiv.className = 'main-content';
document.body.appendChild(createFirstDiv);

// 3. Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let createSecondDiv = document.createElement('div');
createSecondDiv.className = 'center-content';

createFirstDiv.appendChild(createSecondDiv);

// 4. Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let firstText = document.createElement('p');
firstText.innerText = 'Arroz, feijao, carne moida e tempero';
createSecondDiv.appendChild(firstText)

// 5. Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let leftDiv = document.createElement('div');
leftDiv.className = 'left-content'
createFirstDiv.appendChild(leftDiv);

// 6. Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let rightDiv = document.createElement('div');
rightDiv.className = 'right-content';
createFirstDiv.appendChild(rightDiv);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let img = document.createElement('img');
img.className = 'small-image';
img.src = 'https://picsum.photos/200';
leftDiv.appendChild(img);

// 8.  Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let unorderedList = document.createElement('ul');
rightDiv.appendChild(unorderedList);
let values = ['1', '2','3','4','5','6','7','8','9','10'];

for (let index in values) {
  let ulItens = document.createElement('li');
  ulItens.innerHTML = values[index];
  unorderedList.appendChild(ulItens);
}


// 9. Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let headingT1 = document.createElement('h3');
let headingT2 = document.createElement('h3');
let headingT3 = document.createElement('h3');
createFirstDiv.appendChild(headingT1).innerText = 'Teste';
createFirstDiv.appendChild(headingT2).innerText = 'Teste';
createFirstDiv.appendChild(headingT3).innerText = 'Teste';

// Segunda parte do exercicio.

// 1. Adicione a classe title na tag h1 criada;
heading.className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
headingT1.className = 'description';
headingT2.className = 'description';
headingT3.className = 'description';

// 3. Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
createFirstDiv.removeChild(leftDiv);

// 4. Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div;
rightDiv.style.marginRight = 'auto';

// 5. Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
createSecondDiv.style.backgroundColor = 'green';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.

unorderedList.lastChild.remove();
unorderedList.lastChild.remove();