import Person from './Person';

export default class Student extends Person {
  protected MIN_ENROLLMENT_LENGTH: number = 16;
  protected MAX_EXAMS_GRADES: number = 4;
  protected MAX_ASSIGNMENTS_GRADES: number = 2;
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _assignmentsGrades: number[] = [];

  constructor(name: string, birthDate: string) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }
  set enrollment(value: string) {
    if (value.length < this.MIN_ENROLLMENT_LENGTH) {
      throw new Error('The enrollment must have at least 16 characters');
    }
    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }
  set examsGrades(value: number[]) {
    if (value.length > this.MAX_EXAMS_GRADES) {
      throw new Error('Student must have max 4 exams grades');
    }
    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  set assignmentsGrades(value: number[]) {
    if (value.length > this.MAX_ASSIGNMENTS_GRADES) {
      throw new Error('Student must have max 2 assignments grades');
    }
    this._assignmentsGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `STU${randomStr}`;
  }
};
