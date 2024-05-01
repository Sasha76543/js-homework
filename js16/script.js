"use strict";
//1
// const button = document.getElementById('button');
// button.addEventListener('click', () => {
//     alert('Hello World!');
// });

//2
// function checkGuess() {
//     var randomNum = Math.floor(Math.random() * 100) + 1;
//     var userGuess = parseInt(document.getElementById("guessField").value);
//     var resultText = document.getElementById("guessResult");

//     if (userGuess === randomNum) {
//         resultText.textContent = "І це правильне число, це правельне число.";
//     } else {
//         resultText.textContent = "Ви не вгадали чосло " + randomNum + ". Спробуйте знову";
//     }
// }

//3

// let clickCount = 0;
// const clickCountElement = document.getElementById("clickCount");

// document.addEventListener("click", () => {
//   clickCount++;
//   clickCountElement.textContent = clickCount;
// });

//4

const applyCallbackToEachElement = (arr, callback) => {
  const result = arr.map(callback);
  return result;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;
const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);

//5

const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - price * (discount / 100);
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`The discounted price is: $${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice);
