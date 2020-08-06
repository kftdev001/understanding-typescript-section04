"use strict";
// Code goes here!
class Department {
    // javascriptは基本的にすべてpublic。privateの概念はtypescript。
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
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
//# sourceMappingURL=app.js.map