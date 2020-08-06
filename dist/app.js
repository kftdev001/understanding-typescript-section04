"use strict";
// Code goes here!
class Department {
    // javascriptは基本的にすべてpublic。privateの概念はtypescript。
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // name: string;
        this.employees = [];
        // id, name というプロパティの作成とコンストラクタを同時に定義できる。
        // readonly はtypescript固有。一度初期値が設定された後に変更不可とする。
        // this.name = n;
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
        // `` で囲うテンプレート文字列。 ${}により変数を指定、展開された文字列が得られる。
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        // superはベースクラスのconstructor
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        // superはベースクラスのconstructor
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
        // 上位クラスのemployeesを protected 属性にすることでサブクラスからもアクセス可能。
    }
}
const it = new ITDepartment("d1", ["MaxIT"]);
it.addEmployee("Max");
it.addEmployee("Manu");
// it.employees[2] = 'Anna';
// private指定なのでエラー
console.log(it);
it.describe();
it.printEmployeeInformation();
// const itCopy = {name: "Acc2", describe: it.describe};
// itCopy.describe();
const ac = new AccountingDepartment("a2", []);
ac.addReport("RalAC");
ac.printReports();
ac.addEmployee('Max');
ac.addEmployee('Manu');
ac.printEmployeeInformation();
console.log(ac);
//# sourceMappingURL=app.js.map