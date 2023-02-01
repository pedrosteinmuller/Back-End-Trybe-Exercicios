// exercicio 1

// exercicio 1.1
const numberInput = 7;

const isItAPrime = (param: number): boolean => {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

  // exercicio 1.2

  // Essa função é responsável por validar se o formato do e-mail está correto.

const emailInput = 'email@email.com';

const validateEmailFormat = (param: string): boolean => {
  var re = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))

// exercicio 1.3

// Essa função recebe uma lista e ordena seu conteúdo de forma crescente.

const numberList = [10, 5, 18, 2, 8, 23];

const sortInput = (param: Array<number>): Array<number> => {
  return param.sort(function(a, b){return a-b});
};

console.log(sortInput(numberList));

// exercicio 1.4

// Essa função é responsável por receber um objeto e formar uma frase utilizando as chaves do mesmo.

interface People {
  name: string,
  age: number,
}

const peopleInput: People = {
  name: 'Rui',
  age: 23,
};

const createSimpleSentence = (param: People): string => {
  return `Olá, meu nome é ${param.name} e tenho ${param.age} anos.`;
}

console.log(createSimpleSentence(peopleInput));

// exercicio 1.5

// Essa é uma função que verifica se a idade passada é maior ou menor de 18 anos.
const ageInput = 15;

const isOfLegalAge = (param: string | boolean): boolean => {
  return !!param
}

ageInput >= 18
  ? console.log(isOfLegalAge('true'))
  : console.log(isOfLegalAge(false));

// exercicio bonus

type Stats = { 
  agi: number, str: number, int: number, hp: number, mp: number
}

type Character = {
  nickname: string,
  class: string,
  stats: Stats,
  createdAt: Date,
}

const characters: Array<Character> = [
  {
    nickname: 'xKillerx',
    class: 'warrior',
    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
    createdAt: new Date('2003-10-1'),
  },
  {
    nickname: 'jainaProud',
    class: 'mage',
    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
    createdAt: new Date('2003-10-2'),
  },
  {
    nickname: 'catIn',
    class: 'hunter',
    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
    createdAt: new Date('2003-10-15'),
  },
];

function printCharacter(character: Character, index: number): void {
  const { nickname, class: cls, createdAt } = character;

  console.log(`\n\n===== Character: ${index + 1} ========`);
  console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}

characters.forEach(printCharacter);

// exercicio 2

let arrayConversion: Array<string> = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

function convert (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion.indexOf(unidadeBase);
  const indexUc = arrayConversion.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

console.log(convert(1, 'm', 'cm'))

// exercicio 3

let arrayConversion1: Array<string> = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convert1 (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion1.indexOf(unidadeBase);
  const indexUc = arrayConversion1.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

// exercicio 4

let arrayConversion2: Array<string> = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

function convert2 (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion2.indexOf(unidadeBase);
  const indexUc = arrayConversion2.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

// exercicio 5

let arrayConversion3: Array<string> = ['km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

function convert3 (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion3.indexOf(unidadeBase);
  const indexUc = arrayConversion3.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

// exercicio 6

let arrayConversion4: Array<string> = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convert4 (valor: number, unidadeBase: string, unidadeConversion: string ) {
  const indexUb = arrayConversion4.indexOf(unidadeBase);
  const indexUc = arrayConversion4.indexOf(unidadeConversion);
  return (valor * Math.pow(10, (indexUc - indexUb)))
}

// exercicio 7

