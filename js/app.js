'use strict';

// POL
console.log('Wazzup');

// access DOM with each container
// const mainContainer = document.getElementsByClassName('main-conatiner');
const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');

let hoursOpenArray = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

// Seattle Site object literal
let seattle = {
  nameLoc: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // cookies to hold total hourly sales
  cookies: 0,
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
      this.cookiesPerHrArray.push(this.cookies);
      // console.log(this.cookies);
    }
    // adds up hourly totals to get daily totals
    this.dailyTotal += this.cookies;
    // console.log('This is daily total: ', this.dailyTotal);
    return this.cookiesPerHrArray;
  },
  // sends arrays to html list items
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()[i]} cookies`;
      seattleList.appendChild(li);
    }
    seattleList.append('Total: ', this.dailyTotal);
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
  }
};
seattle.renderToHTML();
// use if using seattle.renderToHTMLVerbose()
//seattle.renderToHTMLVerbose();

// // render function from Will - need to look at more to see if i can incorporate
// render: function () {
//   this.totalHourlySales();
//   console.log('this is the render');
//   let elementArray = [];
//   for (let i =0; i < hoursOpenArray.length; i++) {
//     let elementLine = `${hoursOpenArray[i]}: ${this.cookiesPerHrArray[i]} cookies`;
//     elementArray.push(elementLine);
//   }
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
//   //for loop to include the li
//   for(let i = 0; i< elementArray.length; i++){
//     let listEl = document.createElement('li');
//     listEl.textContent = elementArray[i];
//     ulEl.appendChild(listEl);
//   }

// console.log(seattle.renderToHTML());
console.log(seattle.cookiesPerHrArray);

// Table of values
// Seattle	23	65	6.3
// Tokyo	3	24	1.2
// Dubai	11	38	3.7
// Paris	20	38	2.3
// Lima	2	16	4.6

// Tokyo	3	24	1.2
// Tokyo Site object literal
let tokyo = {
  nameLoc: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // cookies to hold total hourly sales
  cookies: 0,
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
      this.cookiesPerHrArray.push(this.cookies);
      // console.log(this.cookies);
    }
    // adds up hourly totals to get daily totals
    this.dailyTotal += this.cookies;
    // console.log('This is daily total: ', this.dailyTotal);
    return this.cookiesPerHrArray;
  },
  // sends arrays to html list items
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()[i]} cookies`;
      tokyoList.appendChild(li);
    }
    tokyoList.append('Total: ', this.dailyTotal);
  },
};
tokyo.renderToHTML();

// Dubai	11	38	3.7
// Dubai Site object literal
let dubai = {
  nameLoc: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // cookies to hold total hourly sales
  cookies: 0,
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
      this.cookiesPerHrArray.push(this.cookies);
      // console.log(this.cookies);
    }
    // adds up hourly totals to get daily totals
    this.dailyTotal += this.cookies;
    // console.log('This is daily total: ', this.dailyTotal);
    return this.cookiesPerHrArray;
  },
  // sends arrays to html list items
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()[i]} cookies`;
      dubaiList.appendChild(li);
    }
    dubaiList.append('Total: ', this.dailyTotal);
  },
};
dubai.renderToHTML();

// Paris	20	38	2.3
// Paris Site object literal
let paris = {
  nameLoc: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // cookies to hold total hourly sales
  cookies: 0,
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
      this.cookiesPerHrArray.push(this.cookies);
      // console.log(this.cookies);
    }
    // adds up hourly totals to get daily totals
    this.dailyTotal += this.cookies;
    // console.log('This is daily total: ', this.dailyTotal);
    return this.cookiesPerHrArray;
  },
  // sends arrays to html list items
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()[i]} cookies`;
      parisList.appendChild(li);
    }
    parisList.append('Total: ', this.dailyTotal);
  },
};
paris.renderToHTML();

// Lima	2	16	4.6
// Lima Site object literal
let lima = {
  nameLoc: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // cookies to hold total hourly sales
  cookies: 0,
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      this.cookies = Math.ceil(this.avgCookieSale * this.randomCust());
      this.cookiesPerHrArray.push(this.cookies);
      // console.log(this.cookies);
    }
    // adds up hourly totals to get daily totals
    this.dailyTotal += this.cookies;
    // console.log('This is daily total: ', this.dailyTotal);
    return this.cookiesPerHrArray;
  },
  // sends arrays to html list items
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()[i]} cookies`;
      limaList.appendChild(li);
    }
    limaList.append('Total: ', this.dailyTotal);
  },
};
lima.renderToHTML();
