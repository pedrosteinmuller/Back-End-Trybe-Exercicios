class Person {
  constructor(private _nome: string, private _birthDate: Date) {
    this.nome = _nome;
    this.birthDate = _birthDate;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this.validacaoNome(value);
    this._nome = value;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this.validacaoData(value);
    this._birthDate = value;
  }

  static getAge(value: Date): number {
    const diferencaDatas = Math.abs(new Date().getTime() - value.getTime());
    const anosMs = 31_536_000_000;
    return Math.floor(diferencaDatas / anosMs );
  }

  private validacaoNome(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres');
    }
  }

  private validacaoData(value: Date): void {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma do futuro')
    }
    if(Person.getAge(value) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos')
    }
  }
}

export default Person;
