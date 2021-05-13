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
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      // console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
    }
    this.cookiesPerHrArray.push(this.dailyTotal);
    console.log('This is daily total: ', this.dailyTotal);
    return `${hoursOpenArray}: `, this.totalHourly;
  },
  // Cannot get to work line 47 become an undefined error, ran out of brain power. Turning in as WIP.
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let listEl = document.createElement('li');
      // console.log(listEl);
      // console.log(`${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`);
      listEl.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales()} cookies`;
      seattleList.appendChild(listEl);
    }
    seattleList.append('Total: ', this.dailyTotal);
  }
};
// seattle.randomCust();
// seattle.totalHourlySales();
seattle.renderToHTML();

// // render function from Will
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

// Tokyo Site object literal
let tokyo = {
  nameLoc: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      // console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
    }
    console.log('This is daily total: ', this.dailyTotal);
  },
  // Cannot get to work line 47 become an undefined error, ran out of brain power. Turning in as WIP.
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let listEl = document.createElement('li');
      // console.log(listEl);
      // console.log(`${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`);
      listEl.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`;
      tokyoList.appendChild(listEl);
    }
    tokyoList.append('Total: ', this.dailyTotal);
  }
};
// this.cookiesPerHrArray.push(this.dailyTotal);
// tokyo.randomCust();
// tokyo.totalHourlySales();
tokyo.renderToHTML();

// Dubai Site object literal
let dubai = {
  nameLoc: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      // console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
    }
    console.log('This is daily total: ', this.dailyTotal);
  },
  // Cannot get to work line 47 become an undefined error, ran out of brain power. Turning in as WIP.
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let listEl = document.createElement('li');
      // console.log(listEl);
      // console.log(`${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`);
      listEl.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`;
      dubaiList.appendChild(listEl);
    }
    dubaiList.append('Total: ', this.dailyTotal);
  }
};
// this.cookiesPerHrArray.push(this.dailyTotal);
// dubai.randomCust();
// dubai.totalHourlySales();
dubai.renderToHTML();

// Paris Site object literal
let paris = {
  nameLoc: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      // console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
    }
    console.log('This is daily total: ', this.dailyTotal);
  },
  // Cannot get to work line 47 become an undefined error, ran out of brain power. Turning in as WIP.
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let listEl = document.createElement('li');
      // console.log(listEl);
      // console.log(`${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`);
      listEl.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`;
      parisList.appendChild(listEl);
    }
    parisList.append('Total: ', this.dailyTotal);
  }
};
// this.cookiesPerHrArray.push(this.dailyTotal);
// paris.randomCust();
// paris.totalHourlySales();
paris.renderToHTML();

// Lima Site object literal
let lima = {
  nameLoc: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  dailyTotal: 0,
  //empty array to hold
  cookiesPerHrArray: [],
  // random customer number generator
  randomCust: function () {
    return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour and adds daily total
  // then pushes to the cookies array.
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      // console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
    }
    console.log('This is daily total: ', this.dailyTotal);
  },
  // Cannot get to work line 47 become an undefined error, ran out of brain power. Turning in as WIP.
  renderToHTML: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let listEl = document.createElement('li');
      // console.log(listEl);
      // console.log(`${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`);
      listEl.textContent = `${hoursOpenArray[i]}: ${this.totalHourlySales[i]} cookies`;
      limaList.appendChild(listEl);
    }
    limaList.append('Total: ', this.dailyTotal);
  }
};
// this.cookiesPerHrArray.push(this.dailyTotal);
// lima.randomCust();
// lima.totalHourlySales();
lima.renderToHTML();
