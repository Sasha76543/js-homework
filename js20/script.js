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
  