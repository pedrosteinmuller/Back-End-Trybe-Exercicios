import readline from "readline-sync";

// criamos um array de objetos com o nome do script e o caminho do script a ser executado
const scripts = [
    { name: "Converter comprimento", script: "./length" },
    { name: "Converter massa", script: "./mass" },
    { name: "Converter capacidade", script: "./capacity" },
    { name: "Converter área", script: "./area" },
    { name: "Converter volume", script: "./volume" }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script);