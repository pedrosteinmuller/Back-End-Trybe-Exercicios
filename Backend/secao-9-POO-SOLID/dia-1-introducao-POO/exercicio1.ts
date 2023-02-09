class Students {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = [];
    this._notasTrabalho = [];
  }
  get matricula (): string { return this._matricula; };
  set matricula(value: string) { this._matricula = value }

  get nome (): string { return this._nome; };
  set nome (value: string) { 
    if (value.length < 3) {
      throw new Error('O nome precisa ter no mínimo 3 caracteres.')
    }
    this._nome = value;
 }

  get notasProva (): number[] { return this._notasProva; };
  set notasProvas (value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante só pode ter 4 notas de provas')
    }
    this._notasProva = value;
  }
  get notasTrabalho (): number[] { return this._notasTrabalho; };
  set notasTrabalho (value: number[]) {
    if (value.length > 2) {
      throw new Error('O estudante só pode ter 2 notas de trabalhos.')
    };
    this._notasTrabalho = value;
  }
}
const personOne = new Students('202001011', 'Maria da Silva');

console.log(personOne);

const personTwo = new Students('202001012', 'João da Silva');

console.log(personTwo);