import { IAgenda } from "./interfaces/IAgenda";
import { IFutebol } from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";
import Quadra from "./Quadra";

class QuadraFutebol extends Quadra {
  public futData: IFutebol = normas.futebol;

  public reservar<IFutebol>(horaReserva: Date): IAgenda<IFutebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: horaReserva,
      regras: this.futData as IFutebol
    }
  }
}

export default QuadraFutebol;