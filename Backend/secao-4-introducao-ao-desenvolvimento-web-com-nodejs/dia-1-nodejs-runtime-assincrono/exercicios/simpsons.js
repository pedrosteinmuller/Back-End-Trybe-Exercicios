// Exercicio A ----------------------------------------------------------------------

// const fs = require('fs').promises;

// async function readAllData () {
//   const data = await fs.readFile('./simpsons.json', 'utf-8');
//   const arrayData = JSON.parse(data);
//   const dataOnScreen = arrayData.map(({ id, name }) => `${id} - ${name}`);
//   console.log(dataOnScreen);
// };

// async function main() {
//   await readAllData();
// }

// main()

// Exercicio B ----------------------------------------------------------------------

// const fs = require('fs').promises;

// async function getId (id) {
//     const data = await fs.readFile('./simpsons.json', 'utf-8')
//     const arraySimpsons = JSON.parse(data);
//     const getSimpson = arraySimpsons.find((simpson) => Number(simpson.id) === id);
//     if (!getSimpson) {
//       throw new Error('id não encontrado');
//     }
//     return getSimpson;
// }

// async function main() {
//   const getSimpson = await getId(1);
//   console.log(getSimpson);
// }

// main();

// Exercicio C ----------------------------------------------------------------------

// const fs = require('fs').promises;

// async function deleteSimpId () {
//     const data = await fs.readFile('./simpsons.json', 'utf-8')
//     const arraySimpsons = JSON.parse(data);
//     const deleteSimpsonById = arraySimpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
//     await fs.writeFile('./simpsons.json', JSON.stringify(deleteSimpsonById));
//     console.log(arraySimpsons);
// }

// async function main() {
//   await deleteSimpId();
// }

// main();

// Exercicio D ----------------------------------------------------------------------

// const fs = require('fs').promises;

// async function newCharacters () {
//     const data = await fs.readFile('./simpsons.json', 'utf-8')
//     const arraySimpsons = JSON.parse(data);
//     const arrayNewCharactersId = [1, 2, 3, 4];
//     const family = arraySimpsons.filter((newSimpson) => arrayNewCharactersId.includes(Number(newSimpson.id)));
//     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(family));
//     console.log(family);
// }

// async function main() {
//   await newCharacters();
// }

// main();

// Exercicio E ----------------------------------------------------------------------

// const fs = require('fs').promises;

// async function addNewChar () {
//     const data = await fs.readFile('./simpsonsFamily.json', 'utf-8')
//     const arraySimpsons = JSON.parse(data);
//     const newChar = [{ id: '8', name: 'Nelson Mintz' }];
//     const newArray = arraySimpsons.concat(newChar);
//     await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
//     console.log(newArray);
// }

// async function main() {
//   await addNewChar();
// }

// main();

// Exercicio F ----------------------------------------------------------------------

const fs = require('fs').promises;

async function changeChar () {
    const data = await fs.readFile('./simpsonsFamily.json', 'utf-8')
    const arraySimpsons = JSON.parse(data);
    const deleteNelson = arraySimpsons.filter((simpson) => simpson.id !== '8');
    const newChar = [{ id: '5', name: 'Maggie Simpson' }];
    const newArray = deleteNelson.concat(newChar);
    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newArray));
    console.log(newArray);
}

async function main() {
  await changeChar();
}

main();