export default class Subject {
  private MIN_NAME_LENGTH: number = 3;
  private _name: string;
  
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this.nameValidation(value);
    this._name = value;
  }

  private nameValidation(name: string): void {
    if (name.length < this.MIN_NAME_LENGTH) {
      throw new Error(`"name" must contain at least ${this.MIN_NAME_LENGTH} characters`);
    }
  }
};
