// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
  // O fatorial é representado pelo sinal !
  // Exemplo de 4 fatorial:
  // 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10 (3.628.800).
let result = 1;

for (let factorial = 10; factorial > 0; factorial -= 1) {
  result *= factorial;
}

console.log(result);
