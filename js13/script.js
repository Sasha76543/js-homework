"use strict";
//1
const array = [4, "Ivan", 3];
array[1] = Malin;
console.log(array);

//2
const arr = [["line1"], ["line2"], ["line3"]];
arr.push(["line4"]);
console.log(arr);

//3
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum);

//4
const number = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//5
const array = ["Math", "PE", "Biology", "Phisyc", "Chemistry"];

for (let i = 0; i < array.length; i++) {
  if (array[i].length > 5) {
    console.log(array[i]);
  }
}

//6
const numeric = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let maxNumeric = Math.max(...numeric);

console.log("Максимальне значення в масиві" + maxNumeric);

//7
let numbers = [8, 5, 2, 24, 13, 9, 19, 7, 27, 1];

function findEvenNumbers(arr) {
  let evenNumbers = arr.filter((num) => num % 2 === 0);

  console.log("Парні числа в масиві є" + evenNumbers.join(""));
}

findEvenNumbers(numbers);
