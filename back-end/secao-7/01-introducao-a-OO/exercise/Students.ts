class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _assignmentsGrades: number[];

  constructor(en: string, n: string, em: number[], am: number[]) {
    this._enrollment = en;
    this._name = n;
    this._examsGrades = em;
    this._assignmentsGrades = am;
  }

  get enrollment() {
    return this._enrollment;
  }
  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }
  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres!');
    }

    this._name = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }
  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error('O estudante pode possuir apenas 4 notas referente às provas!');
    }

    this._examsGrades = value;
  }

  get assignmentsGrades(): number[] {
    return this._assignmentsGrades;
  }
  set assignmentsGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'O estudante pode possuir apenas 2 notas referentes aos trabalhos.',
      );
    }

    this._assignmentsGrades = value;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentsGrades]
      .reduce((previousNote, note) => {
        const nextNote = note + previousNote;

        return nextNote;
      }, 0);
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentsGrades.length;

    return Math.round(sumGrades / divider);
  }
};
