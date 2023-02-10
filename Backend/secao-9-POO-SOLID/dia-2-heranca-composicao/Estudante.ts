import Person from "./Pessoa";

class Students extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve ter no mínimo 16 caracteres')
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode ter 4 notas de trabalhos')
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }

  set assignmentsGrades(value: number[]){
    if (value.length> 2) {
      throw new Error ('A pessoa estudante só pode ter 2 notas')
    }
    this._assignmentsGrades = value;
  }

  public generateEnrollment(): string {
    const stringAleatoria = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return stringAleatoria;
  }
}