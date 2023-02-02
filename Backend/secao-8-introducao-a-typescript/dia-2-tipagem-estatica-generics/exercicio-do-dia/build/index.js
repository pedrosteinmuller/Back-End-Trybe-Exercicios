"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
// exercicio 1
const gol = new Car_1.default("Volkswagen", "prata", 4);
gol.turnOn();
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedUp();
gol.speedDown();
gol.turn("esquerda");
gol.speedUp();
gol.speedDown();
gol.turn("direita");
gol.speedDown();
gol.stop();
gol.speedUp();
// Exercicio 3
const calabresa = {
    flavor: "Calabresa",
    slices: 8
};
console.log(calabresa);
const marguerita = {
    flavor: "Marguerita",
    slices: 6
};
console.log(marguerita);
const nutella = {
    flavor: "Nutella",
    slices: 4
};
console.log(nutella);
// Exercicio 4
const pizza1 = {
    flavor: "Calabresa",
    slices: 6
};
console.log(pizza1);
const pizza2 = {
    flavor: "Frango",
    slices: 8
};
console.log(pizza2);
const pizza3 = {
    flavor: "Pepperoni",
    slices: 6
};
console.log(pizza3);
const pizza4 = {
    flavor: "Marguerita",
    slices: 8
};
console.log(pizza4);
const pizza5 = {
    flavor: "Palmito",
    slices: 8
};
console.log(pizza5);
const pizza6 = {
    flavor: "Goiabada com Queijo",
    slices: 4
};
console.log(pizza6);
function filter(array, callback) {
    const result = [];
    for (const item of array) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}
const users = [
    { name: "John", age: 28 },
    { name: "Jane", age: 35 },
    { name: "Jim", age: 41 },
];
const adultUsers = filter(users, (user) => user.age >= 18);
console.log(adultUsers);
