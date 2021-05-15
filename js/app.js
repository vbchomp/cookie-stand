'use strict';

// POL
// console.log('Wazzup');

// access DOM with each container
// const mainContainer = document.getElementsByClassName('main-conatiner');
// const seattleList = document.getElementById('seattle-list');
// const tokyoList = document.getElementById('tokyo-list');
// const dubaiList = document.getElementById('dubai-list');
// const parisList = document.getElementById('paris-list');
// const limaList = document.getElementById('lima-list');


// // Seattle Site object literal
// let seattle = {
//   nameLoc: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSale: 6.3,
//   dailyTotal: 0,
//   //empty array to hold
//   cookiesPerHrArray: [],
//   // cookies to hold total hourly sales
//   cookies: 0,
//   // random customer number generator
//   randomCust: function () {
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // to calculate total cookie sales per hour and adds daily total
//   // then pushes to the cookies array.
//   totalHourlySales: function () {
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
//       this.cookiesPerHrArray.push(this.cookies);
//       // adds up hourly totals to get daily totals
//       this.dailyTotal += this.cookies;
//     }
//   },
//   // sends arrays to html list items
//   renderToHTML: function () {
//     this.totalHourlySales();
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//       seattleList.appendChild(li);
//     }
//     seattleList.append('Total: ', this.dailyTotal);
//   }
// };
// seattle.renderToHTML();

// starting constructor
let cookiesPerHrArray = [];
let hoursOpenArray = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

// salmon constructor
function SalmonCookies(nameLoc, minCust, maxCust, avgCookieSale, hourlyCookies, dailyCookies) {
  this.nameLoc = nameLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  // hourlyCookies is hourly cookie sales per store
  this.hourlyCookies = hourlyCookies;
  // dailyCookies is total of hourlyCookie per store
  this.dailyCookies = dailyCookies;
  cookiesPerHrArray.push(this);
  // this.renderToHTML();
}

// random customer function
function randomCust() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
}

// daily total function
function hourlyDailySales() {
  let hourlyCookies = 0;
  for (let i = 0; i < hoursOpenArray.length; i++) {
    this.hourlyCookies = Math.ceil(this.avgCookieSale * this.randomCust());
    this.cookiesPerHrArray.push(this.hourlyCookies);
    // adds up hourly totals to get daily totals
    this.dailyCookies += this.hourlyCookies;
  }
  return hourlyCookies;
}

function allStoresTotalHourly() {
  // hourlyTotal is total of all stores hourlyCookies sales
  this.hourlyTotal = hourlyTotal;
}

function allStoresTotalDaily() {
  // dailyTotal is total of all stores dailyCookies sales
  this.dailyTotal = dailyTotal;
}

// render function
// sends arrays to html list items
function renderToHTML() {
  this.hourlyDailySales();
  for (let i = 0; i < hoursOpenArray.length; i++) {
    // let li = document.createElement('li');
    // li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
    // seattleList.appendChild(li);
  }
  // seattleList.append('Total: ', this.dailyTotal);
}

let seattle = new SalmonCookies('Seattle', 23, 65, 6.3, '', '');
console.log(`this is the value of ${SalmonCookies.seattle}`);
seattle.minCust;




// Another render function based on will's
// Does not recognize maincontainer - ask TA tonight
// renderToHTMLVerbose: function () {
//   this.totalHourlySales();
//   let elementArray = [];
//   for (let i = 0; i < hoursOpenArray.length; i++) {
//     let elementLine = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//     elementArray.push(elementLine);
//   }
//   elementArray.push(`Total: ${this.dailyTotal} cookies`);
//   //creating each location section to include a header and list
//   let citySection = document.createElement('section');
//   //creating each location header
//   let cityHeader = document.createElement('h2');
//   //creating each location list
//   let ulEl = document.createElement('ul');
//   //appending the elements
//   maincontainer.appendChild(citySection);
//   citySection.appendChild(cityHeader);
//   citySection.appendChild(ulEl);
//   //for loop to include the list items
//   for (let i = 0; i < elementArray.length; i++) {
//     let listEl = document.createElement('li');
//     listEl.textContent = elementArray[i];
//     ulEl.appendChild(listEl);
//   }
//   //use if using seattle.renderToHTMLVerbose()
//   seattle.renderToHTMLVerbose();

// // Tokyo Site object literal
// let tokyo = {
//   nameLoc: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   dailyTotal: 0,
//   //empty array to hold
//   cookiesPerHrArray: [],
//   // cookies to hold total hourly sales
//   cookies: 0,
//   // random customer number generator
//   randomCust: function () {
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // to calculate total cookie sales per hour and adds daily total
//   // then pushes to the cookies array.
//   totalHourlySales: function () {
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
//       this.cookiesPerHrArray.push(this.cookies);
//       // adds up hourly totals to get daily totals
//       this.dailyTotal += this.cookies;
//     }
//   },
//   // sends arrays to html list items
//   renderToHTML: function () {
//     this.totalHourlySales();
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     tokyoList.append('Total: ', this.dailyTotal);
//   }
// };
// tokyo.renderToHTML();

// // Dubai Site object literal
// let dubai = {
//   nameLoc: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   dailyTotal: 0,
//   //empty array to hold
//   cookiesPerHrArray: [],
//   // cookies to hold total hourly sales
//   cookies: 0,
//   // random customer number generator
//   randomCust: function () {
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // to calculate total cookie sales per hour and adds daily total
//   // then pushes to the cookies array.
//   totalHourlySales: function () {
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
//       this.cookiesPerHrArray.push(this.cookies);
//       // adds up hourly totals to get daily totals
//       this.dailyTotal += this.cookies;
//     }
//   },
//   // sends arrays to html list items
//   renderToHTML: function () {
//     this.totalHourlySales();
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     dubaiList.append('Total: ', this.dailyTotal);
//   }
// };
// dubai.renderToHTML();

// // Paris Site object literal
// let paris = {
//   nameLoc: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   dailyTotal: 0,
//   //empty array to hold
//   cookiesPerHrArray: [],
//   // cookies to hold total hourly sales
//   cookies: 0,
//   // random customer number generator
//   randomCust: function () {
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // to calculate total cookie sales per hour and adds daily total
//   // then pushes to the cookies array.
//   totalHourlySales: function () {
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
//       this.cookiesPerHrArray.push(this.cookies);
//       // adds up hourly totals to get daily totals
//       this.dailyTotal += this.cookies;
//     }
//   },
//   // sends arrays to html list items
//   renderToHTML: function () {
//     this.totalHourlySales();
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     parisList.append('Total: ', this.dailyTotal);
//   }
// };
// paris.renderToHTML();

// // Lima Site object literal
// let lima = {
//   nameLoc: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   dailyTotal: 0,
//   //empty array to hold
//   cookiesPerHrArray: [],
//   // cookies to hold total hourly sales
//   cookies: 0,
//   // random customer number generator
//   randomCust: function () {
//     return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//   },
//   // to calculate total cookie sales per hour and adds daily total
//   // then pushes to the cookies array.
//   totalHourlySales: function () {
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
//       this.cookiesPerHrArray.push(this.cookies);
//       // adds up hourly totals to get daily totals
//       this.dailyTotal += this.cookies;
//     }
//   },
//   // sends arrays to html list items
//   renderToHTML: function () {
//     this.totalHourlySales();
//     for (let i = 0; i < hoursOpenArray.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     limaList.append('Total: ', this.dailyTotal);
//   }
// };
// lima.renderToHTML();
