export default class OrderItem {
  private _nome: string;
  private _preco: number;

  constructor(nome: string, preco: number) {
    this._nome = nome;
    this._preco = preco;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }

  get preco(): number {
    return this._preco;
  }

  set preco(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.');

    this._preco = value;
  }
}