// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
counter.log(`preIncrement: ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
counter.log(`postIncrement: ${postIncrement}, counter : ${counter}`);
const preDecrement = --counter;
counter.log(`preDecrement: ${preDecrement}, counter : ${counter}`);
const postDecrement = counter--;
counter.log(`postDecrement: ${postDecrement}, counter : ${counter}`);

// 4. Assigment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;

// 5. 크기 비교 ( >, <, >=, <= )
// 생략

// 6. Logical operators: || (or), &&, (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), true를 발견하면 뒤의 식은 어떤 값이든 상관하지 않고 계산하지 않고 앞의 true 값을 출력
// 그러므로 || 코드 작성 시 가벼운 값, 함수를 앞쪽에 배치하고 계산이 많은 값, 함수들을 뒤쪽에 배치한다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and). &&는 모든 값이 다 참으로 나와야 하기 때문에
// || 와 마찬가지로 가벼운 값, 함수를 앞쪽 무거운 값, 함수를 뒤쪽에 배치
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something

// ! (not) 참, 거짓 값을 반대로 변경
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, 데이터 타입을 고려하지 않고 순수한 값만 비교
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, 데이터 타입을 고려해서 값을 비교
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// euality - quiz
console.log(0 == false);
console.log(0 === false);
console.log("" == false);
console.log("" === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else

// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement

// 11. Loops
// while loop

// do while loop

// for loop, for(begin; condition; step)

// break, continue
let i = 0;
let sum = 0;

while (i >= 0) {
  sum += i;
  console.log(sum);

  if (sum == 8) {
    break;
  }
}
