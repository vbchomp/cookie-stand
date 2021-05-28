// 'use strict';

// global variables
const hours = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7'];
let allStores = [];

// window into the DOM
const cookieTable = document.querySelector('table');
let tfoot = document.createElement('tfoot');
let storeForm = document.querySelector('form');

// constructor
function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  allStores.push(this);
}

// methods
Store.prototype.randomCustomer = function () {
  return Math.ceil(Math.random() * (this.max - this.min + 1) + this.min);
};

Store.prototype.calcHourlyCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let hourTotal = Math.ceil(this.randomCustomer() * this.avg);
    this.hourlyCookies.push(hourTotal);
    this.dailyTotal += hourTotal;
  }
};

Store.prototype.render = function () {
  this.calcHourlyCookies();
  let tr = document.createElement('tr');
  buildElement('td', this.name, tr);
  for (let i = 0; i < hours.length; i++) {
    buildElement('td', this.hourlyCookies[i], tr);
  }
  buildElement('td', this.dailyTotal, tr);
  cookieTable.appendChild(tr);
};

// functions
function buildElement(element, content, parent) {
  let el = document.createElement('element');
  el.textContent = this.content;
  parent.appendChild(el);
}

function renderHeader() {
  let thead = document.createElement('thead');
  let tr = document.createElement('tr');
  buildElement('th', '', tr);
  for (let i = 0; i < hours.length; i++) {
    buildElement('th', hours[i], tr);
  }
  buildElement('th', 'Daily LocationTotals', tr);
  thead.appendChild(tr);
  cookieTable.appendChild(thead);
}

function renderFooter() {
  let tfoot = document.createElement('tfoot');
  let tr = document.createElement('tr');
  buildElement('td', '', tr);
  let grandTotal = 0;
  for (let i = 0; i < hours.length; i++) {
    buildElement('td', hours[i], tr);
    let columnTotal = 0;
    for (let j = 0; j < allStores.length; j++) {
      columnTotal += allStores[j].hourlyCookies[i];
    }
    grandTotal += columnTotal;
    buildElement('td', columnTotal, tr);
  }
  buildElement('td', grandTotal, tr);
  tfoot.appendChild(tr);
  cookieTable.appendChild(tfoot);
}

function handleSubmit(e){
  e.preventDefault();

  let name = e.target.name.value;
  let min = +e.target.min.value;
  let max = +e.tagret.max.value;
  let avg = +e.target.avg.value;

  new Store (name, min, max, avg);
  tfoot.innerhtml = '';
  renderFooter();

  e.target.name.value = '';
  e.target.min.value = '';
  e.tagret.max.value = '';
  e.target.avg.value = '';
}

// executable code
new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);

renderHeader();
renderFooter();

// event listener
storeForm.addEventListener('submit', handleSubmit);
