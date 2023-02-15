import { IVehicle } from './interfaces';

class AirPlane implements IVehicle {
  drive(): void {
    throw new Error('I don\'t drive');
  }

  fly(): void {
    console.log('Fly a airplane');
  }
}

class Car implements IVehicle {
  drive(): void {
    console.log('Drive a car');
  }

  fly(): void {
    throw new Error('I don\'t fly');
  }
}

export default {
  Car,
  AirPlane
}