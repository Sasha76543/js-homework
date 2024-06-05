'use strict'
//1
const users = [
    { id: 1, name: 'Sasha', balance: 100 },
    { id: 2, name: 'Sophie', balance: 200 },
    { id: 3, name: 'Bogdan', balance: 150 },
    { id: 4, name: 'Masha', balance: 300 }
  ];
  

  function getTotalBalance(users) {
    return users.reduce((total, user) => total + user.balance, 0);
  }
  

  const totalBalance = getTotalBalance(users);
  
  console.log(totalBalance);

  //2
  const user = [
    { id: 1, name: 'Sasha', friends: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }] },
    { id: 2, name: 'Sophie', friends: [{ id: 1, name: 'John' }, { id: 3, name: 'Emma' }] },
    { id: 3, name: 'Bogdan', friends: [{ id: 1, name: 'John' }, { id: 4, name: 'Diana' }] },
    { id: 4, name: 'Masha', friends: [{ id: 2, name: 'Alice' }, { id: 3, name: 'Bob' }] }
  ];
  
  function getUsersWithFriendName(user, friendName) {
    return user
      .filter(user => user.friends.some(friend => friend.name === friendName))
      .map(user => user.name);
  }
  
  const friendName = 'Alice';
  const usersWithFriend = getUsersWithFriendName(user, friendName);
  
  console.log(usersWithFriend);

  //3
  const people = [
  { id: 1, name: 'Sasha', friends: [{ id: 1, name: 'gsvsdv' }, { id: 2, name: 'dssdgsd' }] },
  { id: 2, name: 'Masha', friends: [{ id: 1, name: 'nastya' }, { id: 3, name: 'nastya' }] },
  { id: 3, name: 'Bogdan', friends: [{ id: 1, name: 'jeny' }, { id: 4, name: 'Dima' }] },
  { id: 4, name: 'Sophie', friends: [{ id: 2, name: 'tim' }, { id: 3, name: 'artem' }] }
];

function getSortedNamesByFriendCount(people) {
  people.sort((a, b) => a.friends.length - b.friends.length);
  return people.map(people => people.name);
}

const sortedNames = getSortedNamesByFriendCount(people);

console.log(sortedNames);

//4
const users = [
    { id: 1, name: 'Sophie', skills: [ 'footbol','painting', 'school'] },
    { id: 2, name: 'Sasha', skills: ['Footbal', 'Jiu-jutsu', 'paurlifting'] },
    { id: 3, name: 'Bogdan', skills: ['Jiu-jitsu', 'run','school'] },
    { id: 4, name: 'Masha', skills: ['dancing', 'sambo','painting'] }
  ];
  
  
  function getAllUniqueSkills(users) {
    return [...new Set(users.flatMap(user => user.skills))]
            .filter(skill => skill !== undefined && skill.trim() !== "")
            .sort();
  }
  
  const uniqueSkills = getAllUniqueSkills(users);
  
  console.log(uniqueSkills);