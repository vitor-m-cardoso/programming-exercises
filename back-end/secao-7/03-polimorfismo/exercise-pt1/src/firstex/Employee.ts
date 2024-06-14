class Employee {
  private static employeeCount = 0;

  private employeeName: string;

  constructor(name: string) {
    Employee.addEmployee();

    this.employeeName = name;
  }
  
  private static addEmployee() {
    // método estático só é acessível à partir da própria classe.
    Employee.employeeCount += 1;
    console.log(`Total de funcionários: ${Employee.employeeCount}`)
  }

  public getName(): string { 
    return this.employeeName
  }
}
  
const employee1 = new Employee('Cadu'); // Total de funcionários: 1
const employee2 = new Employee('Lukinha'); // Total de funcionários: 2
const employee3 = new Employee('Vitor'); // Total de funcionários: 3
  