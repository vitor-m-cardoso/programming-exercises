import IEmployee from './Interfaces/IEmployee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements IEmployee {
  private MIN_REGISTRATION_LENGTH: number = 16;
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;
  private _salary: number;

  constructor(name: string, birthDate: string, salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }
  set subject(value: Subject) {
    this._subject = value;
  }

  get registration(): string {
    return this._registration;
  }
  set registration(value: string) {
    if (value.length < this.MIN_REGISTRATION_LENGTH) {
      throw new Error('The registration must have at least 16 characters long');
    }
    this._registration = value;
  }

  get salary(): number {
    return this._salary; 
  }
  set salary(value: number) {
    if (value < 0) {
      throw new Error('The salary cant be negative');
    }

    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }
  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getTime()) {
      throw new Error('The admission date cant be a future date');
    }
    this._admissionDate = value;
  };

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `PRF${randomStr}`;
  }
};
