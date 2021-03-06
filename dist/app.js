"use strict";
// type AddFn = (a: number, b: number) => number;
// こちらの方が一般的な書き方。カスタム型。
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        // ? をつけることで任意指定
        this.age = 30;
        // ? をつけると入力ないとき n は undefinedになる。デフォルト値を設定するのも可。
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi!");
        }
    }
}
// let user1: Greetable;
let user1;
user1 = new Person("Max");
// PersonクラスはGreetableのインターフェースを実装しているのでuser1に設定可能
user1 = new Person();
user1.greet("Hello I am");
console.log(user1);
//# sourceMappingURL=app.js.map