export default interface IEmployee {
  registration: number;
  salary: number;
  admissionDate: Date;

  generateRegistration(): string
}