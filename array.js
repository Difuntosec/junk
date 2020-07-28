"use strict";

// Array ;

// 1. 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. 호출(원하는 값 출력)
const fruits = ["apple", "banana"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]); // length를 이용해 마지막 인덱스 값 호출하는 법

// 3. arrary loop
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. 배열의 삽입, 삭제, 복사
// push : 배열의 마지막 인덱스에 값 추가
fruits.push("melon");
console.log(fruits);

// pop : 배열의 마지막 인덱스 값 삭제
fruits.pop();
console.log(fruits);

// unshift: 인덱스의 처음부터 값 삽입하는 법
fruits.unshift("grape");
console.log(fruits);

// shift: 인덱스의 처음부터 값 삭제하는 법
fruits.shift();
console.log(fruits);

// shift, unshift 는 pop, push보다 훨씬 느리다. 배열의 값을 욺직여야 하므로

// splice: 지정된 위치에서 값을 삭제할 수 있다.
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "candy");
console.log(fruits);

// 2개 이상의 배열을 서로 합치는 방법
const fruits2 = ["bread"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. 검색(Searching)
// indexOf: find the index 인덱스 번호를 알고 싶을 때
console.log(fruits);
console.log(fruits.indexOf("apple"));

// includes : 알고싶은 값이 배열에 저장되어 있는지 boolean(true, false) 값으로 검색
console.log(fruits.includes("apple"));

// lastIndexOf
// 만약 배열 내에 같은 값이 여러개로 저장되어 있을 때
// IndexOf로 검색하면 배열의 처음부터 검색해서 가장 먼저 나오는 값을 출력
// lastIndexOf로 검색하면 IndexOf의 반대로 배열의 끝에서 부터 검색해서 가장 먼저 나오는 값을 출력
fruits.push("apple");
console.log(fruits.indexOf("apple"));
console.log(fruits.lastIndexOf("apple"));
