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
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        // getter カプセル化＝データや処理を隠蔽化
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("レポートが見つかりません。");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください。');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
// console.log(ac.mostRecentReport);
// getterであるmostRecentReportには()が不要
// このタイミングではaddReport()されていないのでErrorを投げる
// ac.mostRecentReport = '';
ac.addReport("something");
ac.mostRecentReport = '通期会計レポート';
// mostRecentReport はsetterなので、関数コール()の形ではなく = でプロパティのように使用できる。
ac.printReports();
ac.addEmployee('Max');
ac.addEmployee('Manu');
console.log('mostRecentReport: ' + ac.mostRecentReport);
ac.printEmployeeInformation();
console.log(ac);
//# sourceMappingURL=app.js.map