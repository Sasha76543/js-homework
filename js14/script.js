"use strict";
//1

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = "";

for (let i = 0; i < friends.length; i++) {
  string += friends[i];
  if (i !== friends.length - 1) {
    string += ", ";
  }
}

console.log(string);

const friends = ["Mango", "Poly", "Kiwi", "Ajax"];
let string = friends.join(", ");

console.log(string);

//2

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemove = "Карточка-3";
const cardToInsert = "Карточка-6";
const cardToUpdate = "Карточка-4";

// Видалення (по індексу), метод indexOf()7
const indexToRemove = cards.indexOf(cardToRemove);
if (indexToRemove > -1) {
  cards.splice(indexToRemove, 1);
}

// Додавання (по індексу)
const indexToInsert = 2;
cards.splice(indexToInsert, 0, cardToInsert);

// Оновлення (по індексу)
const indexToUpdate = cards.indexOf(cardToUpdate);
if (indexToUpdate > -1) {
  cards[indexToUpdate] = "Оновлена карточка-4";
}

console.log(cards);
