// Code goes here!

abstract class Department {
  // abstract classはインスタンス化できない、継承されるためだけのクラスとなる。
  static fiscalYear = 2020;

  // private readonly id: string;
  // name: string;
  protected employees: string[] = [];
  // javascriptは基本的にすべてpublic。privateの概念はtypescript。

  static createEmployee(name: string) {
    return { name: name };
  }

  constructor(protected readonly id: string, public name: string) {
    // id, name というプロパティの作成とコンストラクタを同時に定義できる。
    // readonly はtypescript固有。一度初期値が設定された後に変更不可とする。
    // this.name = n;

    // console.log(this.fiscalYear);
    // これはエラー。staticでないメンバからstaticなfiscalYearにはアクセスできない。
    // ※インスタンスからはアクセスできない。
    // constructorはstaticにできない。
    console.log(Department.fiscalYear); // これは可能
  }

  abstract describe(this: Department): void;
  // メソッドの名前・引数・戻り値だけ決めた抽象クラス。実装は記述不可。voidでなければいけない。
  // 具体的な実装はサブクラスで。(実装を強制できる)

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  // 継承は1つのクラスからしかできない。
  // extends が継承
  // Departmentはベースクラス
  // ITDepartmentは継承先クラス(サブクラス)

  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    // superはベースクラスのconstructor
    this.admins = admins;
  }

  describe(){
    console.log("IT部門 - ID: " + this.id);
  }

}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    // getter カプセル化＝データや処理を隠蔽化
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("レポートが見つかりません。");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("正しい値を設定してください。");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    // superはベースクラスのconstructor
    this.lastReport = reports[0];
  }

  static getInstance(){
    if(this.instance){
      // static 内の this はクラス自体を指す
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2',[]);
    return this.instance;
  }

  describe() {
    console.log("会計部門 - ID: ", this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(name: string) {
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

console.log("シングルトン")
// typescriptを使えば簡単に実装できる。
// const ac = new AccountingDepartment("a2", []);
const ac = AccountingDepartment.getInstance();
console.log(ac)
const ac2 = AccountingDepartment.getInstance();
console.log(ac2)

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
