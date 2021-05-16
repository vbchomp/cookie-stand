'use strict';

// POL
// console.log('Wazzup');

// access DOM with each container
//const mainContainer = document.getElementById('main-container');
const salmonTable = document.querySelector('table');
const salmonHead = document.getElementById('table-head');
const salmonFlipppers = document.getElementById('table-foot');

let allRenderArray = [];

// salmon constructor
function SalmonCookies(nameLoc, minCust, maxCust, avgCookieSale) {
  this.nameLoc = nameLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.hoursOpenArray = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];
  this.cookiesPerHrArray = [];
  allRenderArray.push(this);
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
  salmonTable.appendChild(tr);
  td = document.createElement('td');
  td.textContent = this.dailyCookies;
  tr.appendChild(td);
};

SalmonCookies.prototype.renderHeader = function() {
  this.hoursOpenArray.unshift('');
  for (let i = 0; i < this.hoursOpenArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hoursOpenArray[i];
    salmonHead.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Totals By Store';
  salmonHead.appendChild(td);
};

SalmonCookies.prototype.renderFooter = function() {
  td.textContent = 'Totals';
  for (let i = 0; i < this.hoursOpenArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hoursOpenArray[i];
    salmonHead.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Totals By Store';
  salmonFlipppers.appendChild(td);
};

function renderAll(){
  for (let i = 0; i < allRenderArray.length; i++){
    allRenderArray[i].renderToHTML();
  }
  seattle.renderHeader();
  seattle.renderFooter();
}

let seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
let paris = new SalmonCookies('Paris', 20, 38, 2.3);
let lima = new SalmonCookies('Lima', 2, 16, 4.6);
// seattle.renderToHTML();
// tokyo.renderToHTML();
// dubai.renderToHTML();
// paris.renderToHTML();
// lima.renderToHTML();
// seattle.renderHeader();
// console.log(seattle);

renderAll();
