let n = 5;
let print = '*';
let spaceLine = ' ';

for (let index = 0; index < n; index += 1) {
  spaceLine = spaceLine + print;
};
for (let index = 0; index < n; index += 1){
  console.log(spaceLine);
}
