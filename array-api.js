"use strict";
// Q1. make a String out of an array
{
  const fruits = ["apple", "banana", "orange"];
  console.log(fruits.toString());
  const result = fruits.join("~");
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = "this, is, test";
  const result = fruits.split(",");
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2); // 배열 자체에서 값을 삭제
  // console.log(result);
  // console.log(array);

  const result = array.slice(2, 5); // 배열에서 원하는 값, 부분을 새로운 배열로 만든다.
  console.log(result);
  console.log(array);
}

class student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new student("A", 29, true, 45),
  new student("B", 28, false, 80),
  new student("C", 30, true, 90),
  new student("D", 40, false, 66),
  new student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = student.find((student) => student.score === 90);
  console.log(result);
}

{
  const result = students.find(function (student, index) {
    return student.score === 90;
  });
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const reuslt = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !student.every((student) => student.score >= 50);
  console.log(result2);
}

console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / student.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bouns! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
