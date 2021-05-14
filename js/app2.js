// 'use strict';

// console.log('wazzup');

// // global variables
// //hours array


// // window to the DOM
// //const seattleList = document.getElementById('id-name');
// //const mainContainer = document.querySelector('main');

// // store objects
// let seattleStore = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesPerHour: [],
//   dailyTotal: 0,
//   getRandomCust: function () {
//     // DONE - step 1 get a random number of customers using the min and max
//     return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < hourlyCookies.length; i++) {
//       // DONE - step 2 get the amount of cookies sold for each hour, using getRandomCust multiplied by avg for cookies sold and push data into cookies per hour for storage
//       // need to call the getRandomCust
//       let hourlyCust = this.getRandomCust();
//       let hourlyCookies = hourlyCust * this.avg;
//       // or
//       // let hourlyCookies = this.getRandomCust() * this.avg;
//       this.cookiesPerHour.push(hourlyCookies);
//       // DONE - step 3 calculate the dailyTotal while I have each hourly sales
//       this.dailyTotal += hourlyCookies;
//     }
//   },
//   render: function () {
//     this.calcCookiesPerHour();
//     // DONE - step 4 for each hour create an li, give it content and append to the list.
//     for (let i = 0; i < hours.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//     // DONE - step 5 render the daily total
//     let liTotal = document.createElement('li');
//     liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
//     seattleList.appendChild(liTotal);
//   }
// };
