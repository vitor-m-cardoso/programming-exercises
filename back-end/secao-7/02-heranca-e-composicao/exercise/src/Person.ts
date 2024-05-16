export default class Person {
  protected MIN_NAME_LENGTH: number = 3;
  protected MAX_AGE: number = 120;
  private _name: string;
  private _birthDate: string;

  constructor(name: string, birthDate: string) {
    this._name = name;
    this._birthDate = birthDate;
    this.validatePerson();
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this.validateName(name);
    this._name = name;
  }

  get age() {
    return this._birthDate;
  }
  set age(value: string) {
    this.validateAge(value);
    this._birthDate = value;
  }

  private validateName(name: string): void {
    if (name.length < this.MIN_NAME_LENGTH) {
      throw new Error(`"name" must contain at least ${this.MIN_NAME_LENGTH} characters`);
    }
  }

  private validateAge(value: string): void {
    const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;

    if (!dateRegex.test(value)) throw new Error('Invalid date format! Ex.: dd/mm/yyyy');

    const year = value.split('/')[2];
    const actualYear = new Date().getFullYear();

    if (Number(year) > actualYear) throw new Error('You cant add a future year');
    if ((actualYear - Number(year)) > 120) throw new Error('Person cannot have more than 120 years old');
  }

  private validatePerson(): void {
    this.validateName(this.name);
    this.validateAge(this.age);
  }
};
