// Utilize if...else para escrever um código que, dado um salário bruto, calcule o salário líquido a ser recebido.

// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS (Instituto Nacional do Seguro Social) e o IR (Imposto de Renda).

// INSS
  // Salário bruto até R$ 1.556,94: alíquota de 8%;
  // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%;
  // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%;
  // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.

// IR
  // Até R$ 1.903,98: isento de imposto de renda;
  // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto;
  // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
  // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto;
  // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

  // O cálculo deve ser o demonstrado a seguir
  // O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para o INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
  
  // Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
  
  // Para calcular o valor do IR, considera-se um salário-base (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, em que a alíquota é de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, tem-se:
  
  // R$ 2.670,00 - salário com INSS já deduzido;
  // 7.5% - alíquota de imposto de renda, que representa um desconto de R$ 200,25;
  // R$ 142,80 - parcela a ser deduzida do imposto de renda.
  // Para obter o valor do imposto de renda, calcula-se: R$ 200,25 (que representa 7,5% de R$ 2.670,00) - R$ 142,80 (dedução do imposto de renda) = R$ 57,45.
  
  // Para obter o salário líquido, calcula-se: R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
  
  // Resultado: R$ 2.612,55.
  
let salary = 4125.00;
let calcInss = 0;

// calculo INSS
if (salary <= 1556.94) {
  calcInss = salary * 0.08;
} else if (salary > 1556.94 && salary <= 2594.92) {
  calcInss = salary * 0.09;
} else if (salary > 2594.92 && salary <= 5189.82) {
  calcInss = salary * 0.11;
} else if (salary > 5189.82) {
  calcInss = 570.88;
}

let salaryAfterInss = salary - calcInss;
let calcIr = 0;

// calculo IR
if (salaryAfterInss > 1903.99 && salaryAfterInss <= 2826.65) {
  calcIr = (salaryAfterInss * 0.075) - 142.80;
} else if (salaryAfterInss > 2826.65 && salaryAfterInss <= 3751.05) {
  calcIr = (salaryAfterInss * 0.15) - 354.80;
} else if (salaryAfterInss > 3751.05 && salaryAfterInss <= 4664.68) {
  calcIr = (salaryAfterInss * 0.225) - 636.13;
} else if (salaryAfterInss > 4664.68) {
  calcIr = (salaryAfterInss * 0.275) - 869.36;
}

let result = salaryAfterInss - calcIr;

console.log(result.toFixed(2));
