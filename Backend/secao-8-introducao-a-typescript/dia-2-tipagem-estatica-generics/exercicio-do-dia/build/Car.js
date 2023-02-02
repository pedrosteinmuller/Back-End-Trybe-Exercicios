"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    turnOn() {
        console.log("Carro ligado.");
    }
    turnOff() {
        console.log("Carro desligado.");
    }
    turn(direction) {
        console.log(`Virando para a ${direction}.`);
    }
    speedUp() {
        console.log("Acelerando o carro.");
    }
    speedDown() {
        console.log("Reduzindo a velocidade do carro.");
    }
    stop() {
        console.log("Parando o carro.");
    }
    honk() {
        console.log("Buzinando: BIP BIP");
    }
}
exports.default = Car;
