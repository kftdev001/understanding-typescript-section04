// Code goes here!

class Department {

  name: string;
  private employees: string[] = [];
  // javascriptは基本的にすべてpublic。privateの概念はtypescript。

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';
// private指定なのでエラー

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: "Acc2", describe: accounting.describe};
// accountingCopy.describe();
