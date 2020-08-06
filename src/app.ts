// Code goes here!

class Department {

  // private readonly id: string;
  // name: string;
  private employees: string[] = [];
  // javascriptは基本的にすべてpublic。privateの概念はtypescript。

  constructor(private readonly id: string, public name:string) {
    // id, name というプロパティの作成とコンストラクタを同時に定義できる。
    // readonly はtypescript固有。一度初期値が設定された後に変更不可とする。
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
    // `` で囲うテンプレート文字列。 ${}により変数を指定、展開された文字列が得られる。
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1","Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';
// private指定なのでエラー

console.log(accounting);
accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = {name: "Acc2", describe: accounting.describe};
// accountingCopy.describe();
