export default class Subject {

  constructor(private _name: string) {
    this.name = _name;
  }
  get name(): string {
    return this._name;
  }

  set name (value: string) {
    this.validarNome(value);
    this._name = value;
  }

  private validarNome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve possuir no mínimo 3 caracteres')
    }
  }
}