// Exercicio 1 

let n = 5;
let prints = '*';
let spaceLine = ' ';

for (let index = 0; index < n; index += 1) {
  spaceLine = spaceLine + prints;
};
for (let index = 0; index < n; index += 1){
  console.log(spaceLine);
}



// Exercicio 2

let n = 5;
let prints = '*';
let spaceLine = ' ';

for (let index = 0; index < n; index += 1) {
  spaceLine = spaceLine + prints;
  console.log(spaceLine);
};



// Exercicio 3

let n = 5;
let prints = '*';
let spaceLine = ' ';

for (let index = 0; index < n; index += 1) {
  spaceLine = spaceLine + prints;
  console.log(spaceLine);
};



// Exercicio 4 

let n = 5;
let prints = '*';
let spaceLine = '';
let spacePosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < spacePosition) {
      spaceLine = spaceLine + ' ';
    } else {
      spaceLine = spaceLine + prints;
    }
  }
  console.log(spaceLine);
  spaceLine = '';
  spacePosition -= 1;
}



// Exercicio 5

let n = 5;

