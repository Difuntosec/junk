// 1. use strict
"use strict";

// 2. Variable
// let (added in ES6)
let globalName = "global name";
{
  let name = "ellie";
  console.log(name);
  name = "hello";
  console.log(name);
}
console.log(name);

// var (사용하지 않음)
// var hoisting (어디에 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올려준다.)
// -> 즉 밑의 코드를 볼 수 있는 것 처럼 변수 선언 전에 값을 출력가능하다.)
// 또한 Block scope 가 없다.
console.log(age);
age = 4;
console.log(age);
var age;

// 3. constant
// 한 번 선언 후 수정이 불가능하다.
// favor immtable data type always for a few reasons:
// - security (해커가 임의로 값을 수정할 수 있기 때문에 근본적으로 예방할 수 있다.)
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function(함수도 다른 데이터 타입처럼 변수에 할당 가능하고, 함수의 파라미터, 리턴타입이 가능하다.)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h
console.log(`value: ${test}, type: ${typeof text}`);
text = 1;
console.log(`value: ${test}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${test}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${test}, type: ${typeof text}`);
console.log(text.charAt(0)); // runtime error
