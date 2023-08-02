const header = document.getElementsByTagName('header')[0];
const mainContent = document.getElementsByClassName('main-content')[0];
const centerContent = mainContent.getElementsByClassName('center-content')[0];
const footer = document.getElementsByTagName('footer')[0];

const changeText = () => {
  const paragraph = centerContent.getElementsByTagName('p')[1];
  paragraph.innerText = 'Novo texto alterado';
};
changeText();

const changeBackgroundColor = (element, backgroundColor) => {
  element.style.backgroundColor = backgroundColor;
};
changeBackgroundColor(mainContent, 'rgb(76, 164, 109)');
changeBackgroundColor(centerContent, 'white');

const changeHeaderText = (newText) => {
  const title = header.getElementsByClassName('title')[0];
  title.innerText = newText;
};
changeHeaderText('Desafio - JavaScript');

const upperCaseFirstParagraph = () => {
  const firstParagraph = centerContent.getElementsByTagName('p')[0];
  firstParagraph.innerText = firstParagraph.innerText.toUpperCase();
};
upperCaseFirstParagraph();

const showParagraphsContent = () => {
  const getParagraphs = centerContent.getElementsByTagName('p');
  const footerParagraph = footer.getElementsByTagName('p')[0];
  const pArray = [];

  for (let index = 0; index < getParagraphs.length; index += 1) {
    const paragraph = getParagraphs[index];
    pArray.push(paragraph.innerText);
  }

  footerParagraph.innerText = pArray.join(' ');
};
showParagraphsContent();
