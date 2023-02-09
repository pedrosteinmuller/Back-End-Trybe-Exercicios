class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    const dateStr = `${ano}-${mes}-${dia}`;

    // verifica se a data é válida
    if (new Date(dateStr).getDate() !== dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia(): number {
    return this._dia;
  }

  set dia(value: number) {
    this._dia = value;
  }

  get mes(): number {
    return this._mes;
  }

  set mes(value: number) {
    this._mes = value;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(value: number) {
    this._ano = value;
  }
}

