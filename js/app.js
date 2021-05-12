'use strict';

// POL
console.log('Wazzup');

let seattle = {
  nameLoc: 'Seattle',
  minCust: 23,
  maxCust: 65,
  avgCust: 6.3,
  randomCust: function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  }
  // function for switch or multi dimensional array for times/cookies
  // function for returning locations arrays
  // sum of hourly totals for daily total
};

console.log(seattle.randomCust());


