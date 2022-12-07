const readline = require('readline-sync');

// exercicio 1

const weightKg = 86;
const heightCm = 182; 

// function calculateIMC(weight, height) {
//   console.log(`Peso: ${weight}, Altura: ${height}`);

//   const heightInMeters = height / 100;
//   const height2 = heightInMeters ** 2;

//   const IMC = weight / height2;
//   return IMC;
// }

// function main() {
//   const IMC = calculateIMC(weightKg, heightCm);
//   console.log(`IMC: ${IMC}`);
// }

// main();

// exercicio 3

function calculateIMC(weight, height) {
  console.log(`Peso: ${weight}, Altura: ${height}`);

  const heightInMeters = height / 100;
  const height2 = heightInMeters ** 2;

  const IMC = weight / height2;
  return IMC;
}

function main() { 
  const weight = readline.questionInt('What\'s your weight? (kg) ');
  const height = readline.questionInt('What\'s your height? (cm) ');
  const IMC = calculateIMC(weight, height);
  console.log(`IMC: ${IMC}`);
}

main();

// exercicio 4

function calculateIMC(weight, height) {
  console.log(`Peso: ${weight}, Altura: ${height}`);

  const heightInMeters = height / 100;
  const height2 = heightInMeters ** 2;

  const IMC = weight / height2;
  return IMC;
}

function main() { 
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionFloat('What\'s your height? (cm) ');
  const IMC = calculateIMC(weight, height);
  console.log(`IMC: ${IMC}`);
}

// exercicio 5

function calculateIMC(weight, height) {
  console.log(`Peso: ${weight}, Altura: ${height}`);

  const heightInMeters = height / 100;
  const height2 = heightInMeters ** 2;

  const IMC = weight / height2;
  return IMC;
}

function main() { 
  const weight = readline.questionFloat('What\'s your weight? (kg) ');
  const height = readline.questionFloat('What\'s your height? (cm) ');
  const IMC = calculateIMC(weight, height);
  console.log(`IMC: ${IMC}`);

  if (IMC < 18.5) {
    return console.log('Abaixo do peso (magreza)')
  }

  if (IMC >= 18.5 && IMC <= 24,9) {
    return console.log('Peso normal')
  }

  if (IMC >= 25 && IMC <= 29,9) {
    return console.log('Acima do peso (sobrepeso)')
  }

  if (IMC >= 30 && IMC <= 34,9) {
    return console.log('Obesidade grau I')
  }

  if (IMC >= 35 && IMC <= 39,9) {
    return console.log('Obesidade grau II')
  }

  if (IMC >= 40){
    return console.log('Obesidade graus III e IV')
  }
}