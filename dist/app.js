"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
// let user1: Greetable;
let user1;
user1 = new Person('Max');
// PersonクラスはGreetableのインターフェースを実装しているのでuser1に設定可能
user1.greet("Hello I am");
console.log(user1);
//# sourceMappingURL=app.js.map