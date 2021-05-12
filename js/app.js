'use strict';

// POL
console.log('Wazzup');

const seattleList = document.getElementById('seattle-list');

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
  // totalDaily: function(){
  //   let total = 0;
  //   for (let i = 0; i < this.hoursOpenArray.length; i++){
  //     total = total + this.totalHourly[1];
  //     let li = document.createElement('li');
  //     li.textContent = `Total: ${total} cookies`;
  //     seattleList.appendChild(li);
  //   }
  // }
};

//console.log(seattle.randomCust());
console.log(seattle.totalHourly());
