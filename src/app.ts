// type AddFn = (a: number, b: number) => number;
// こちらの方が一般的な書き方。カスタム型。

interface AddFn {
  (a: number, b: number): number;
  // 匿名メソッドのようなもの。
  // typescriptはtype AddFn のような定義と理解する。
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  // interfaceはinterfaceを継承できる
  // type Person は実質的にinterface Personと同じ。
  // typeはカスタム型
  // javascript には interface は存在しない。
  // interface と custom 型は同じように使うことができる。
  // interface は object の型だけを定義できる。typeはunionなども定義できる。

  /*
  intefaceによって特定の構造を持つことを強制できる。
  greetメソッドをuser1を持つことがわかる。user1がPersonであるか他のクラスのobjectかは気にせず、
  greetメソッドを持つことが担保できる。
  public/privateは指定できない。
  readonlyは指定できる。
  */
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  // クラスは1つしか継承できないが、interfaceは複数実装(implements)できる。
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// let user1: Greetable;
let user1: Greetable;

user1 = new Person("Max");
// PersonクラスはGreetableのインターフェースを実装しているのでuser1に設定可能

user1.greet("Hello I am");
console.log(user1);
