'use strict';

// POL
console.log('Wazzup');

// access DOM with each list
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
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // to calculate total cookie sales per hour
  totalHourlySales: function () {
    for (let i = 0; i < hoursOpenArray.length; i++) {
      let custHours = this.randomCust();
      let totalHourly = Math.ceil(custHours * this.avgCookieSale);
      this.cookiesPerHrArray.push(totalHourly);
      this.dailyTotal += totalHourly;
      console.log('This is the totalHourlySales method', 'custHours: ', custHours, 'totalHourly: ', totalHourly);
      console.log(this.dailyTotal);
    }
  },
  // totalDaily
  // Need to save totalHourly as an array to be able to use this totalDaily
  totalDaily: function(){
    let total = 0;
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      total = total + this.totalHourly[i];
    }
  },
  // render function
  render: function(){
    this.totalHourlySales();
    console.log('this is the render');
  }
  // let li = document.createElement('li');
  // li.textContent = `${hoursOpenArray[i]}: ${totalHourly} cookies`;
  // seattleList.appendChild(li);
  // what is the render method?
};

// let li = document.createElement('li');
// li.textContent = `Total: ${total} cookies`;
// seattleList.appendChild(li);
// console.log(cookiesPerHrArray());
//console.log(seattle.randomCust());
console.log(seattle.render());
console.log(seattle.cookiesPerHrArray);

