import Pizza from "./Pizza";
import { Vegetariano } from "./PizzaFlavorsTypes";

interface PizzaVegetariana extends Pizza {
  flavor: Vegetariano
}

export default PizzaVegetariana;