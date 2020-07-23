// Object

// 1. Literals and properties
// object = { key : value };
// object는 2가지 방법으로 만들 수 있다.
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: "ellie", age: 4 };
print(ellie);

// 자바스크립트에서는 Object의 properties를 임의로 갑작스럽게 생성 및 삭제 할 수 있다.
// 하지만 너무 남용하면 좋지 않은 코드이니 가급적 사용하지 않는다.
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties 계산된 propertie
// key(키)는 항상 String으로 받아와야 한다.
console.log(ellie.name);
console.log(ellie["name"]);
// 위의 2가지 방법 모두 가능하다. 하지만 밑의 Computed 방법은
// 일반적인 경우가 아닌 특수한 경우에 사용하는 것이 좋으므로
// 일반적인 코딩이라면 .name 의 방법을 사용하자.
ellie["hasJob"] = true; // 위에서 나온 갑작스러운 생성 또한 가능하다.
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
// object를 반복적으로 계속 만들는 귀찮음을 덜어내기 위해 사용.
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("ellie", 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
// 이러한 방법으로 object를 함수를 이용해서 쉽고 편하게 반복적인 오브젝트 생성을 한다.

// 5. in opperator : object에 key(키)가 있는지 확인하는 방법
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for ..in vs for ..of
// for (key in obj)
console.clear();
// 밑의 코딩은 ellie object에 있는 모든 key 값을 각각 출력해주는 방법.
for (key in ellie) {
  console.log(key);
}

// for (value of iterable)
// 일반적인 배열의 값 출력 방법
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 위의 방법을 밑의 방법으로 더 쉽게 표현할 수 있다.
for (value of array) {
  console.log(value);
}

// 7. Cloning
const user = { name: "ellie", age: "20" };

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);

// 위의 new way와 같은 방법이다.
const user4 = Object.assign({}, user);

// another examle
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

// 위의 코드를 보면 알 수 있듯이  Object.assign을 사용할 때에는
// ex) Object.assing({}, fruit1, fruit2)에서 fruit2와 fruit1에서 겹치는 property가 있다면
// 뒤에 나온 값으로 덮어 씌운다.
