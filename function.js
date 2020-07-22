// 1. Function
// - 기본적인 블록
// 여러번 재사용이 가능

// 1. Function delaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming : 동사로 이름을 만든다.
// function is object in JS
function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6) 인자를 배열로 받는다
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "ellie");

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () {
  // anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 8. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
const printYes = function () {
  console.log("yes!");
};

const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// 9. Arrow function
// 항상 함수의 이름이 없는 anonymous function 이다.
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint");
const add = () => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언 후 바로 실행할 때 사용
(function hello() {
  console.log("IIFE");
})();

// quiz
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case "add":
      add(a, b);
      break;
    case substract:
      substract(a, b);
      break;
    case divide:
      divide(a, b);
      break;
    case multiply:
      multiply(a, b);
      break;
    case remainder:
      remainder(a, b);
      break;
  }
}

const add = function (a, b) {
  console.log(`a + b = ${a + b}`);
};

const substract = function (a, b) {
  console.log(`a - b = ${a - b}`);
};

const divide = function (a, b) {
  console.log(`a / b = ${a / b}`);
};

const multiply = function (a, b) {
  console.log(`a * b = ${a * b}`);
};

const remainder = function (a, b) {
  console.log(`a % b = ${a % b}`);
};

calculate(add, 4, 3);
