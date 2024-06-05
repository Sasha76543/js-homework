"use strict";

//1
let users = [
  { id: 1, name: "Саша", age: 14 },
  { id: 2, name: "Маша", age: 11 },
  { id: 3, name: "Бодя", age: 15 },
  { id: 4, name: "Софія", age: 10}
];

let names = users.map((user) => user.name);

console.log(names);


//2

let people = [
    { id: 1, name: 'Саша', eyeColor: 'сині' },
    { id: 2, name: 'Маша', eyeColor: 'зелені' },
    { id: 3, name: 'Бодя', eyeColor: 'Зелні' },
    { id: 4, name: 'Софія', eyeColor: 'Коричневі' }
  ];
  
  let targetEyeColor = 'сині';
  
  let usersWithTargetEyeColor = users.filter(user => user.eyeColor === targetEyeColor);
  
  console.log(usersWithTargetEyeColor);
  
   
  //3

let peoples = [
    { id: 1, name: 'Маша', gender: 'жінка' },
    { id: 2, name: 'Саша', gender: 'чоловік'},
    { id: 3, name: 'Софія', gender: 'жінка' },
    { id: 4, name: 'Бодя', gender: 'чоловік' }
  ];
  
  let targetGender = 'жінка';
  
  let femaleUsers = users.filter(user => user.gender === targetGender);
  
  let femaleUserNames = femaleUsers.map(user => user.name);
  
  console.log(femaleUserNames);

  //4
  const user = [
    { id: 1, name: 'Саша', isActive: true },
    { id: 2, name: 'Богдан', isActive: false },
    { id: 3, name: 'Софія', isActive: false },
    { id: 4, name: 'Маша', isActive: true }
  ];
  
  const inactiveUsers = user.filter(user => !user.isActive);
  
  console.log(inactiveUsers);
 //5
const corustuvachi = [
  { id: 1, name: 'Sasha', email: 'sasha@gamail.com' },
  { id: 2, name: 'Sophie', email: 'sophie@gamail.com' },
  { id: 3, name: 'Bogdan', email: 'bogdan@gamail.com' },
  { id: 4, name: 'Masha', email: 'masha@gamail.com' }
];

function getUserByEmail(email) {
  return corustuvachi.find(user => user.email === email);
}

const userEmail = 'bogdan@gamail.com';
const foundUser = getUserByEmail(userEmail);

console.log(foundUser);

  //6
const peopless = [
  {id: 1, name: 'Sasha', age: '14'},
  {id: 2, name: 'Masha', age: '11'},
  {id: 3, name: 'Sophie', age: '10'},
  {id: 4, name: 'Bogdan', age: '15'}
]
function getUsersInAgeRange(minAge, maxAge) {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
}


const minAge = 25;
const maxAge = 35;
const usersInAgeRange = getUsersInAgeRange(minAge, maxAge);

console.log(usersInAgeRange);
  