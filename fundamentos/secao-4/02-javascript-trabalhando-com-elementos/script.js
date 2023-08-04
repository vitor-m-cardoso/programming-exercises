const body = document.getElementById('root');

// 1 - Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
const trybeTrip = document.createElement('h1');
trybeTrip.innerText = 'TrybeTrip - Agência de Viagens';
body.appendChild(trybeTrip);

// 2 - Adicione a tag main com a classe main-content como filho da tag body;
const mainContent = document.createElement('main');
mainContent.setAttribute('class', 'main-content');
body.appendChild(mainContent);

// 3 - Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const centerContent = document.createElement('section');
centerContent.setAttribute('class', 'center-content');
mainContent.appendChild(centerContent);

// 4 - Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const paragraph1 = document.createElement('p');
paragraph1.innerText = 'Algum texto';
centerContent.appendChild(paragraph1);

// 5 - Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftContent = document.createElement('section');
leftContent.setAttribute('class', 'left-content');
mainContent.appendChild(leftContent);

// 6 - Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightContent = document.createElement('section');
rightContent.setAttribute('class', 'right-content');
mainContent.appendChild(rightContent);

// 7 - Adicione uma imagem com src configurado para valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
const smallImage = document.createElement('img');
smallImage.setAttribute('class', 'small-image');
smallImage.setAttribute('src', 'https://picsum.photos/200');
leftContent.appendChild(smallImage);

// 8 - Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, e assim por diante. Essa lista deve ser filha do section criado no passo 6;
const unorderedList = document.createElement('ul');

for (let index = 1; index <= 10; index += 1) {
  const listItem = document.createElement('li');
  listItem.innerText = index;
  unorderedList.appendChild(listItem);
}
rightContent.appendChild(unorderedList);

// 9 - Adicione 3 tags h3, todas filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1) {
  const heading3 = document.createElement('h3');
  heading3.setAttribute('class', 'description');
  heading3.innerText = `Esse foi o ${index} heading criado`;
  mainContent.appendChild(heading3);
}

// ============================
// Bônus
// ============================

// Adicione a classe title na tag h1 criada;
trybeTrip.setAttribute('class', 'title');

// Adicione a classe description nas 3 tags h3 criadas;
// adicionado dentro do loop em que os elementos são criados.

// Remova a section criada no passo 5 (aquela que possui a classe left-content) por meio da função .removeChild();
mainContent.removeChild(leftContent);

// Centralize a section criada no passo 6 (aquela que possui a classe right-content).
rightContent.style.marginRight = 'auto';

// Troque a cor de fundo do elemento-pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
centerContent.parentElement.style.backgroundColor = 'rgb(0, 158, 0)';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
const getListItem = rightContent.getElementsByTagName('li');

for (let index = getListItem.length; index > 7; index -= 1) {
  if (getListItem[index]) {
    getListItem[index].remove();
  }
}
