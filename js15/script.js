'use strict'

//task 1

function logItems(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`${i + 1} - ${array[i]}`);
    }
}

// Example usage:
logItems(['Mango', 'Poly', 'Ajax']);


//task 2

function calculateEngravingPrice(message, pricePerWord) {
    let words = message.split(" ");
    let totalPrice = words.length * pricePerWord;
    return totalPrice;
}

let message = "Hello World";
let pricePerWord = 5;
let totalCost = calculateEngravingPrice(message, pricePerWord);
console.log(totalCost);


//task 3

function findLongestWord(string) {
    const words = string.split(' ');
    let longestWord = '';
    
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    return longestWord;
  }
  


  //task 4

  function formatString(string) {
    if (string.length <= 40) {
        return string;
    } else {
        return string.slice(0, 40) + '...';
    }
}

// Приклад використання
let exampleString = "рядок в якому більше 40 стмволів в рядку/9+";
console.log(formatString(exampleString));


//task 5

function checkForSpam(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes('spam') || lowerCaseMessage.includes('sale')) {
        return true;
    } else {
        return false;
    }
}

const message1 = "Check out this amazing SALE!";
console.log(checkForSpam(message1)); 
const message2 = "Important information, no spam here.";
console.log(checkForSpam(message2));


//task6


let input;
const numbers = [];
let total = 0;

while (true) {
   input = prompt('Будь ласка ведіть число');
   
   if (input === null) {
       break;
   } else if (isNaN(parseFloat(input))) {
       alert('Це не число, ведіть число');
       continue;
   } else {
       numbers.push(parseFloat(input));
   }
}

for (const number of numbers) {
   total += number;
}

console.log(`Сума чисел дорівнює ${total}`);

