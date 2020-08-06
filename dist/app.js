"use strict";
// Code goes here!
class Department {
    constructor(id, name) {
        // id, name というプロパティの作成とコンストラクタを同時に定義できる。
        // readonly はtypescript固有。一度初期値が設定された後に変更不可とする。
        // this.name = n;
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // name: string;
        this.employees = [];
        // console.log(this.fiscalYear);
        // これはエラー。staticでないメンバからstaticなfiscalYearにはアクセスできない。
        // ※インスタンスからはアクセスできない。
        // constructorはstaticにできない。
        console.log(Department.fiscalYear); // これは可能
    }
    // javascriptは基本的にすべてpublic。privateの概念はtypescript。
    static createEmployee(name) {
        return { name: name };
    }
    // メソッドの名前・引数・戻り値だけ決めた抽象クラス。実装は記述不可。voidでなければいけない。
    // 具体的な実装はサブクラスで。(実装を強制できる)
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
// abstract classはインスタンス化できない、継承されるためだけのクラスとなる。
Department.fiscalYear = 2020;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        // superはベースクラスのconstructor
        this.admins = admins;
    }
    describe() {
        console.log("IT部門 - ID: " + this.id);
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
            throw new Error("正しい値を設定してください。");
        }
        this.addReport(value);
    }
    describe() {
        console.log("会計部門 - ID: ", this.id);
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
// statice methodの使用
const employee1 = Department.createEmployee("MaxStatic");
console.log("static method/property : ");
console.log(employee1, Department.fiscalYear);
const it = new ITDepartment("d1", ["MaxIT"]);
// Math.PI
// .PI 円周率
// .pow 2乗、べき乗を計算できる関数
// Javascriptでグローバルに利用できるプロトタイプ関数(言う慣ればクラス)にまとめられている
// Mathはstaticでグループ化、名前空間のような役割と果たす。
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
ac.mostRecentReport = "通期会計レポート";
// mostRecentReport はsetterなので、関数コール()の形ではなく = でプロパティのように使用できる。
// ac.printReports();
ac.addEmployee("Max");
ac.addEmployee("Manu");
ac.describe();
console.log("mostRecentReport: " + ac.mostRecentReport);
// ac.printEmployeeInformation();
console.log(ac);
//# sourceMappingURL=app.js.map