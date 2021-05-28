'use strict';

// POL
// console.log('Wazzup');

// access DOM with each container
// const mainContainer = document.getElementById('main-container');
const salmonTable = document.querySelector('table');
const salmonHead = document.getElementById('table-head');
const salmonFlippers = document.getElementById('table-foot');

// event handler for sales.html form window into DOM
let salesForm = document.getElementById('sales-form');

let allRenderArray = [];
let allStores = [];
let hoursOpenArray = ['0600', '0700', '0800', '0900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900'];

// salmon constructor
function SalmonCookies(nameLoc, minCust, maxCust, avgCookieSale) {
  this.nameLoc = nameLoc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHrArray = [];
  allRenderArray.push(this);
  // dailyCookies is total of hourlyCookie per store
  this.dailyCookies = 0;
  // created to have the stores in array to sum totals
  // this.allStores = [];
  // this.renderToHTML();
  allStores.push(this);
  this.newStore;
}

// random customer function
SalmonCookies.prototype.randomCustGen = function () {
  return Math.ceil(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

// hourly total function
SalmonCookies.prototype.hourlyDailySales = function () {
  this.hourlyCookies = 0;
  for (let i = 0; i < hoursOpenArray.length; i++) {
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
  for (let i = 0; i < hoursOpenArray.length; i++) {
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
  let td1 = document.createElement('td');
  td1.textContent = 'City/Hours';
  salmonHead.appendChild(td1);
  for (let i = 0; i < hoursOpenArray.length; i++) {
    let td = document.createElement('td');
    td.textContent = hoursOpenArray[i];
    salmonHead.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Totals By Store';
  salmonHead.appendChild(td);
};

// arr is a placeholder for the type of data type that the function will use
// same as on line 16 nameLoc, minCust, etc (parameters that become arguments)
let renderFooter = function () {
  let td1 = document.createElement('td');
  td1.textContent = 'Totals';
  salmonFlippers.appendChild(td1);
  let totalTotal = 0;
  for (let i = 0; i < hoursOpenArray.length; i++) {
    let totalPerHour = 0;
    for (let j = 0; j < allStores.length; j++) {
      totalPerHour += allStores[j].cookiesPerHrArray[i];
      totalTotal += allStores[j].cookiesPerHrArray[i];
    }
    // console.log(totalTotal);
    let td2 = document.createElement('td');
    td2.textContent = totalPerHour;
    // let totalTotal = totalTotal + totalPerHour[i];
    salmonFlippers.appendChild(td2);
  }

  // Grand total appended to table
  let td3 = document.createElement('td');
  td3.textContent = totalTotal;
  salmonFlippers.appendChild(td3);
};

// Render all function applies all functions and publishes data to html page
function renderAll() {
  for (let i = 0; i < allRenderArray.length; i++) {
    allRenderArray[i].renderToHTML();
  }
  seattle.renderHeader();
}

// define event handler for salesForm
function handleSubmit(event) {
  event.preventDefault();
  let storeName = event.target.nameloc.value;
  let mininmumCust = parseInt(event.target.mincust.value);
  let maximumCust = parseInt(event.target.maxcust.value);
  let averageCookie = parseInt(event.target.avgcookie.value);
  //console.log(storeName);

  let newStore = new SalmonCookies(storeName, mininmumCust, maximumCust, averageCookie);
  newStore.renderToHTML();
  // console.log(allStores);
  // clears out footer in preparation for the renderFooter function
  salmonFlippers.innerHTML = '';
  renderFooter();
}

// Instantiating store objects
let seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
let tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
let dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
let paris = new SalmonCookies('Paris', 20, 38, 2.3);
let lima = new SalmonCookies('Lima', 2, 16, 4.6);

renderAll();
renderFooter(allStores);

// event listener for salesForm
salesForm.addEventListener('submit', handleSubmit);
