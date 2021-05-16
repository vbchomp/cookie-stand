'use strict';

// POL
// console.log('Wazzup');

// access DOM with each container
const mainContainer = document.getElementById('main');
// const salmonTable = document.querySelector('table');

// salmon constructor
function SalmonCookies(nameLoc, minCust, maxCust, avgCookieSale) {
  this.nameLoc = nameLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hoursOpenArray = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];
  this.cookiesPerHrArray = [];
  // dailyCookies is total of hourlyCookie per store
  this.dailyCookies = 0;
  // this.renderToHTML();
}

// random customer function
SalmonCookies.prototype.randomCustGen = function() {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// daily total function
SalmonCookies.prototype.hourlyDailySales = function() {
  this.hourlyCookies = 0;
  for (let i = 0; i < this.hoursOpenArray.length; i++) {
    let hourlyCookies = Math.ceil(this.avgCookieSale * this.randomCustGen());
    this.cookiesPerHrArray.push(hourlyCookies);
    // adds up hourly totals to get daily totals
    this.dailyCookies += hourlyCookies;
  }
};

// render function
// sends arrays to html list items
SalmonCookies.prototype.renderToHTML = function() {
  this.hourlyDailySales();
  // create a table
  let table = document.createElement('table');
  //create a row in the table
  let tr = document.createElement('tr');
  // give it data
  let td = document.createElement('td');
  td.textContent = this.nameLoc;
  tr.appendChild(td);
  // loop through all hours the store is open
  for (let i = 0; i < this.hoursOpenArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHrArray[i];
    tr.appendChild(td);
    // this.dailyCookies += this.hoursOpenArray[i];
  }
  table.appendChild(tr);
  mainContainer.appendChild(table);
  td = document.createElement('td');
  td.textContent = this.dailyCookies;
  tr.appendChild(td);
};

let seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
let paris = new SalmonCookies('Paris', 20, 38, 2.3);
let lima = new SalmonCookies('Lima', 2, 16, 4.6);
seattle.renderToHTML();
tokyo.renderToHTML();
dubai.renderToHTML();
paris.renderToHTML();
lima.renderToHTML();
console.log(seattle);

