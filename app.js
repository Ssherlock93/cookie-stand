'use strict';
//This function takes the minimum and maximum amout of customers at the 1st and Pike //location and generates a random number of customers per hour

var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];

function CreateCookieStore(name, time, min, max, average){
  this.storeName = name;
  this.timeTotal = time;
  this.minimumPersonAverage = min;
  this.maximumPersonAverage = max;;
  this.averageCookie = average;
  this.cookiesPerHour = [];
  this.dailyCookieTotal = 0;
  allStores.push(this);
}

  CreateCookieStore.prototype.getRandomCustomers = function(){
    return Math.random() * (this.maximumPersonAverage - this.minimumPersonAverage) + this.minimumPersonAverage;
   console.log(Math.random());
  }

  
CreateCookieStore.prototype.getCookiesPerHour = function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  }
  
new CreateCookieStore ('Pike Place' , 15, 23, 65, 6.3);
new CreateCookieStore ('Seattle', 2, 54, 5, 3.4);

CreateCookieStore.prototype.createTable = function() {
  var tableEl = document.createElement('table');
  var rows = document.createElement('tr');
  var td = document.createElement('td');
  td.innerHTML = this.storeName;
  rows.appendChild(td);

  for (var i = 0; i < timeTotal.length; i++) {
    var tdCookieSales = document.createElement('td');
    tdCookieSales.innerHTML = this.cookiesPerHour[i];
    rows.appendChild(tdCookieSales);
    
  }
  var tdTotalCookies = document.createElement("td");
  tdTotalCookies.innerHTML = this.dailyCookieTotal;
  row.appendChild(tdTotalCookies);
  tableEl.appendChild(rows);
}

function tableHeading(){
  var storeHeading = document.getElementById('table');
  var thead = document.createElement('thead');
  storeHeading.appendChild(thead);
  var row = document.createElement('tr');
  thead.appendChild(row);
  var td = document.createElement('td');
  td.innerHTML = 'Store Location';
  row.appendChild(td);

  for (var i = 0; i < timeTotal.length; i++) {
    var td = document.createElement('td');
    td.innerHTML = timeTotal[i];
    row.appendChild(td);
  }

  var tdDailyCookie = document.createElement('th');
  tdDailyCookie.textContent = this.dailyCookieTotal;
  tdDailyCookie.innerHTML = 'Total Cookies';
  row.appendChild(tdDailyCookie);
  storeHeading.appendChild(row);
}

tableHeading();

for (var stores of allStores) {
  CreateCookieStore.createTable();
}