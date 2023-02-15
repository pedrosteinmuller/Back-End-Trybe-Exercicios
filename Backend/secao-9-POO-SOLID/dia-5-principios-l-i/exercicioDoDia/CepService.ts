import { ICep } from '../exercicioDoDia/ICep';

class CepService implements ICep {
  private readonly cepApi: ICep;

  constructor(cepApi: ICep) {
    this.cepApi = cepApi;
  }
  getAddressByCEP(cep: string, number: number): Promise<string> {
    return this.cepApi.getAddressByCEP(cep, number)
  }
  getCepByAddress(address: string, number: number): Promise<string> {
    return this.cepApi.getCepByAddress(address, number);
  }
}

export default CepService;