class Students {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(matricula: string, nome: string, notasProva = [], notasTrabalho = []) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasProva = notasProva;
    this._notasTrabalho = notasTrabalho;
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

  somaNotas(): number {
    const todasNotas = [...this.notasProva, ...this.notasTrabalho]
    console.log('aquiu', todasNotas);
    
    let total = 0;
    for (let grade of todasNotas) {
      total += grade;
    }
    return total;
  }
  mediaNotas(): number {
    const valorTotal = this.somaNotas();
    const divisor = this.notasProva.length + this.notasTrabalho.length;
    return Math.round(valorTotal / divisor );
  }
}
const personOne = new Students('202001011', 'Maria da Silva');

personOne.notasProvas = [10, 20, 30, 50];
personOne.notasTrabalho = [20, 50];

console.log(personOne);
console.log('Soma todas as notas', personOne.somaNotas());
console.log('Média das notas', personOne.mediaNotas());

