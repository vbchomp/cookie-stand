'use strict';

// POL
console.log('Wazzup');

const seattleList = document.getElementById('seattle-list');
const tokyoList = document.getElementById('tokyo-list');
const dubaiList = document.getElementById('dubai-list');
const parisList = document.getElementById('paris-list');
const limaList = document.getElementById('lima-list');

// Seattle Site
let seattle = {
  nameLoc: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  hoursOpenArray: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // hourly totals
  // how to get them to store? let? const? each time randomCust runs or page refreshes the totals change.
  totalHourly: function(){
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      let totalHourly = Math.floor(this.randomCust() * this.avgCookie);
      let li = document.createElement('li');
      li.textContent = `${this.hoursOpenArray[i]}: ${totalHourly} cookies`;
      seattleList.appendChild(li);
      // return `${this.hoursOpenArray[i]}: ${totalHourly}`;
    }
  }
  // totalDaily
  // Need to save totalHourly as an array to be able to use this totalDaily
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[i];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     seattleList.appendChild(li);
  //   }
  // }
};

//console.log(seattle.randomCust());
console.log(seattle.totalHourly());

// Tokyo Site
let tokyo = {
  nameLoc: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hoursOpenArray: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // hourly totals
  totalHourly: function(){
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      let totalHourly = Math.floor(this.randomCust() * this.avgCookie);
      let li = document.createElement('li');
      li.textContent = `${this.hoursOpenArray[i]}: ${totalHourly} cookies`;
      tokyoList.appendChild(li);
      // return `${this.hoursOpenArray[i]}: ${totalHourly}`;
    }
  }
  // totalDaily
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[1];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     tokyoList.appendChild(li);
  //   }
  // }
};

//console.log(tokyo.randomCust());
console.log(tokyo.totalHourly());

// Dubai Site
let dubai = {
  nameLoc: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hoursOpenArray: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // hourly totals
  totalHourly: function(){
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      let totalHourly = Math.floor(this.randomCust() * this.avgCookie);
      let li = document.createElement('li');
      li.textContent = `${this.hoursOpenArray[i]}: ${totalHourly} cookies`;
      dubaiList.appendChild(li);
      // return `${this.hoursOpenArray[i]}: ${totalHourly}`;
    }
  }
  // totalDaily
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[1];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     dubai.appendChild(li);
  //   }
  // }
};

//console.log(dubai.randomCust());
console.log(dubai.totalHourly());

// Paris Site
let paris = {
  nameLoc: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hoursOpenArray: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // hourly totals
  totalHourly: function(){
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      let totalHourly = Math.floor(this.randomCust() * this.avgCookie);
      let li = document.createElement('li');
      li.textContent = `${this.hoursOpenArray[i]}: ${totalHourly} cookies`;
      parisList.appendChild(li);
      // return `${this.hoursOpenArray[i]}: ${totalHourly}`;
    }
  }
  // totalDaily
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[1];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     parisList.appendChild(li);
  //   }
  // }
};

//console.log(paris.randomCust());
console.log(paris.totalHourly());

// Lima Site
let lima = {
  nameLoc: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  hoursOpenArray: ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'],
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // hourly totals
  totalHourly: function(){
    for (let i = 0; i < this.hoursOpenArray.length; i++){
      let totalHourly = Math.floor(this.randomCust() * this.avgCookie);
      let li = document.createElement('li');
      li.textContent = `${this.hoursOpenArray[i]}: ${totalHourly} cookies`;
      limaList.appendChild(li);
      // return `${this.hoursOpenArray[i]}: ${totalHourly}`;
    }
  }
  // totalDaily
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[1];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     limaList.appendChild(li);
  //   }
  // }
};

//console.log(lima.randomCust());
console.log(lima.totalHourly());
