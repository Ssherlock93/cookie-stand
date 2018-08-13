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
  
var pikePlace = new CreateCookieStore ('Pike Place' , 15, 23, 65, 6.3);

CreateCookieStore.prototype.createList = function() {
  this.getCookiesPerHour();
  var divEl = document.getElementById('pike');
  var ulEl = document.createElement('ul');

  for (var i = 0; i < timeTotal.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = timeTotal[i] + ':' + this.cookiesPerHour[i];
    ulEl.appendChild(liEl);
  }
  var liElTotal = document.createElement("li");
  liElTotal.textContent = 'Total:' + this.dailyCookieTotal;
  ulEl.appendChild(liElTotal);
  divEl.textContent = this.storeName;
  divEl.appendChild(ulEl);
  }

  pikePlace.createList();


