import readline from 'readline-sync';
let arrayConversion: Array<string> = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion.indexOf(unidadeBase);
  const indexUc = arrayConversion.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(arrayConversion, 'Escolha um número para a unidade base:');

  const toUnitChoiceIndex = readline.keyInSelect(arrayConversion, 'Escolha um número para a conversão:');

  const toUnitChoice = arrayConversion[toUnitChoiceIndex];
  const fromUnitChoice = arrayConversion[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
  console.log(message);
}

exec();