"use strict";
const userName = "Max";
// userName = 1;
/*
let age = 29;

age = 30;

var age2 = 15;
*/
// varは関数スコープ/グローバルスコープのどちらか
// function add(a: number, b: number) {
//   var result;
//   result = a + b;
//   return result;
// }
/*
const add = (a: number, b: number = 1) => {
  // arrow関数では 'function' は不要
  // b のデフォルト値を1とした
  // 右側の変数しかデフォルト値にできない。(省略できるので)
  return a + b;
};

const printOutput: (output: string | number) => void = (output) => {
  // output関数の入力型・リターン型を定義したarrow関数表記
  console.log(output);
};

if (age >= 20) {
  var isAdult = true;
  let isAdult2 = true;
  // 関数の中ではないのでグローバルスコープ
  console.log(isAdult2);
}

// console.log(isAdult2);
// これは利用できない。letやconstはブロックスコープだから。

// console.log(isAdult);
// これはTypeScriptはエラーを出すが、consoleに貼り付けるとJavascriptはエラーにならない。
// ブロック内外の区別をJavascriptはつけないため。

console.log("TSPRJ04");
console.log(add(2, 5));

printOutput(add(2, 5));
printOutput(add(2)); // デフォルトの1がbに渡る

*/
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => {
        // event は引数。()は省略してかける。functionも省略されている。
        console.log(event);
    });
}
// 51. スプレッド演算子 ************************************
const hobbies = ["Sports", "Cooking", "Swimming"];
const activeHobbies = ["Hiking", ...hobbies];
console.log(hobbies[0]);
console.log(hobbies);
// activeHobbies.push(hobbies[0], hobbies[1])
// こう書けるが面倒
//activeHobbies.push(...hobbies)
// ... スプレッド演算子はhobbiesを展開したものになる
console.log(activeHobbies);
const person = {
    firstName: "Max",
    age: 30,
};
// const copiedPerson = person;
// これは参照のコピー
const copiedPerson = Object.assign({}, person);
// ...person とすればpersonが持つキーバリューペアをすべて値コピー
console.log(copiedPerson);
// 52. RESTパラメータ(残余引数) n個の引数を受け取れる ************************************
const add = (...numbers) => {
    // let result = 0;
    // for (var number of numbers){
    //   result += number;
    // }
    // return result;
    // すべての要素に処理 => reduce
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
// 53. 配列とオブジェクトの分割代入 ************************************
console.log("--- section 53. ---");
const hobby1 = hobbies[0];
const hobby2 = hobbies[1];
const [hobby3, hobby4, ...remainingHobbies] = hobbies;
console.log(hobbies);
console.log(hobby3);
console.log(hobby4);
console.log(remainingHobbies);
const { firstName: userName53, age } = person;
// ここの : は TypeScriptと関係ないJavaScriptの構文。キー名 の再設定。
console.log(userName53, age);
//# sourceMappingURL=app.js.map