// const numbers = [1, 2, 3, 4, 5];
// const summ = numbers.reduce(function(acc, value) {
//     return acc + value
// }, 0)
// console.log(summ);


///////////////////////////////////////////////////////////////////////

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
//   ];

//   const sum = tweets.reduce(function(acc, value){
//         return acc + value.likes
//   }, 0)
//   console.log(sum);
  

/////////////////////////////////////////////////////////////////////////

// const users = [
//     { name: 'Mango', daysActive: 15 },
//     { name: 'Poly', daysActive: 4 },
//     { name: 'Ajax', daysActive: 27 },
//     { name: 'Chelsey', daysActive: 2 },
//   ];
  
  
//   const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;
  
  
//   console.log(users.sort(sortByActiveDays));


/////////////////////////////////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const result = numbers.filter(x => x % 2 === 0).map(y => y * 2).reverse();
// console.log(result);


//////////////////////////////////////////////////////////////////////////

// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ];

// // 1 Порахувати загальну кількість годин

// const totalHours = players.reduce (function(acc, value) {
//         return acc + value.timePlayed
//     }, 0)
//     console.log(totalHours);

// // 2 Відсортувати по кількості проведенного часу в грі

// const sortBySpentTime = (a, b) => a.timePlayed - b.timePlayed;
// console.log(players.sort(sortBySpentTime));

// 3 Порахувати загальну кількість товарів в кошику

// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce (function(acc, value) {
//         return acc + value.quantity
// }, 0)
// console.log(totalAmount);

// 4 Відсортувати масив об'єктів за алфавітом в полі name:

// const arr = [
//     { name: 'John', age: 32 },
//     { name: 'Jane', age: 26 },
//     { name: 'Mike', age: 42 },
//     { name: 'Emily', age: 29 }
//   ];

//   arr.sort(function(a,b){
//     return a.name.localeCompare(b.name);
//   })
//   console.log(arr);


////////////////////////////////////////////////////////////////////


import{ nameUser } from './functions/functions.js'
const greet = document.getElementById('greet')
greet.addEventListener('click', nameUser)