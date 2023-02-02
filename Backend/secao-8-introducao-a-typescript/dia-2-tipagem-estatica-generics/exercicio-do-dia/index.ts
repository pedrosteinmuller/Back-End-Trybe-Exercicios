import Car from "./Car";
import Pizza from "./Pizza";
import PizzaVegetarianaa from "./PizzaVegetariana";
import PizzaDoce from "./PizzaDoce";
import PizzaComum from "./PizzaComum";
import PizzaVegetariana from "./PizzaVegetariana";

// exercicio 1
const gol = new Car("Volkswagen", "prata", 4);

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
const calabresa: Pizza = {
  flavor: "Calabresa",
  slices: 8
}

console.log(calabresa);

const marguerita: Pizza = {
  flavor: "Marguerita",
  slices: 6
}

console.log(marguerita);


const nutella: Pizza = {
  flavor: "Nutella",
  slices: 4
}

console.log(nutella);

// Exercicio 4

const pizza1: PizzaComum = {
  flavor: "Calabresa",
  slices: 6
}

console.log(pizza1);

const pizza2: PizzaComum = {
  flavor: "Frango",
  slices: 8
}

console.log(pizza2);

const pizza3: PizzaComum = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pizza3);

const pizza4: PizzaVegetariana = {
  flavor: "Marguerita",
  slices: 8
}

console.log(pizza4);

const pizza5: PizzaVegetariana = {
  flavor: "Palmito",
  slices: 8
}

console.log(pizza5);

const pizza6: PizzaDoce = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(pizza6);

// exercicio 5

type callbackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function filter<T>(array: T[], callback: callbackFilter<T>): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "John", age: 28 },
  { name: "Jane", age: 35 },
  { name: "Jim", age: 41 },
];

const adultUsers = filter(users, (user) => user.age >= 18);

console.log(adultUsers);
