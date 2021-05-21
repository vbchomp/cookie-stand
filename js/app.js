'use strict';

// POL
// console.log('Wazzup');

// access DOM with each container
// const mainContainer = document.getElementById('main-container');
const salmonTable = document.querySelector('table');
const salmonHead = document.getElementById('table-head');
const salmonFlippers = document.getElementById('table-foot');

let allRenderArray = [];
let allStores = [];

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
  // created to have the stores in array to sum totals
  // this.allStores = [];
  // this.renderToHTML();
  allStores.push(this);
}

// random customer function
SalmonCookies.prototype.randomCustGen = function () {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// hourly total function
SalmonCookies.prototype.hourlyDailySales = function () {
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
SalmonCookies.prototype.renderToHTML = function () {
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

// Header function to put hours on top row and Totals in last column
SalmonCookies.prototype.renderHeader = function () {
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

// this.allStoresHourlyTotals();
// Not working at the moment
// Maybe a while loop to see if row total matches column total?
// Footer function to put Totals row and add up each column

// arr is a placeholder for the type of data type that the function will use
// same as on line 16 nameLoc, minCust, etc (parameters that become arguments)
let renderFooter = function (arr) {
  //let totalPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]; same as line 94
  let totalPerHour = new Array((arr[0].hoursOpenArray.length) - 1).fill(0);
  let td1 = document.createElement('td');
  td1.textContent = 'Totals';
  salmonFlippers.appendChild(td1);
  for (let i = 0; i < allStores.length; i++) {
    //console.log(allStores[i]);
    for (let j = 0; j < totalPerHour.length; j++) {
      totalPerHour[j] += arr[i].cookiesPerHrArray[j];
    }
  }
  // Trying to do total of hourly totals
  for (let i = 0; i < totalPerHour.length; i++){
    let td2 = document.createElement('td');
    td2.textContent = totalPerHour[i];
    // let totalTotal = totalTotal + totalPerHour[i];
    salmonFlippers.appendChild(td2);
  }
  // trying to get totalTotal for the grand total
  // for (let i = 0; i < totalPerHour.length; i++) {
  //   let td3 = document .createElement('td');
  //   td3.textContent = totalTotal;
  //   salmonFlippers.appendChild(td3);
  // }
  console.log(totalPerHour);
  // console log for grand total
  // console.log(totalTotal);
};

// Render all function applies all functions and publishes data to html page
function renderAll() {
  for (let i = 0; i < allRenderArray.length; i++) {
    allRenderArray[i].renderToHTML();
  }
  seattle.renderHeader();
  // seattle.renderFooter();
}

// Instantiating store objects
let seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
let paris = new SalmonCookies('Paris', 20, 38, 2.3);
let lima = new SalmonCookies('Lima', 2, 16, 4.6);


renderAll();
renderFooter(allStores);
console.log(allStores);
