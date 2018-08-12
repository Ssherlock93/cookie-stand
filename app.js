'use strict';
//This function takes the minimum and maximum amout of customers at the 1st and Pike //location and generates a random number of customers per hour

var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],


pikePlace = {
  storeName: 'Pike Place',
  minimumPersonAverage: 23,
  maximumPersonAverage: 65,
  averageCookie: 6.3,
  averageCustomers: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,

  getRandomCustomers: function(){
    return Math.random() * (pikePlace.maximumPersonAverage - pikePlace.minimumPersonAverage) + pikePlace.minimumPersonAverage;
   console.log(Math.random());
  },

  
getCookiesPerHour: function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  },
createList: function() {
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
  },
}


pikePlace.createList();

var seaTac = {
  storeName: 'SeaTac Airport',
  minimumPersonAverage: 3,
  maximumPersonAverage: 24,
  averageCookie: 1.2,
  averageCustomers: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,

  getRandomCustomers: function(){
    return Math.random() * (seaTac.maximumPersonAverage - seaTac.minimumPersonAverage) + seaTac.minimumPersonAverage;
    console.log(Math.random());
  },

  
getCookiesPerHour: function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  },
createList: function() {
  this.getCookiesPerHour();
  var divEl = document.getElementById('seaTac');
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
  },
}


seaTac.createList();

var seattleCenter = {
  storeName: 'Seattle Center',
  minimumPersonAverage: 11,
  maximumPersonAverage: 38,
  averageCookie: 3.7,
  averageCustomers: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,

  getRandomCustomers: function(){
    return Math.random() * (seattleCenter.maximumPersonAverage - seattleCenter.minimumPersonAverage) + seattleCenter.minimumPersonAverage;
   console.log(Math.random());
  },

  
getCookiesPerHour: function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  },
createList: function() {
  this.getCookiesPerHour();
  var divEl = document.getElementById('seattleCenter');
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
  },
}


seattleCenter.createList();

var capitolHill = {
  storeName: 'Capitol Hill',
  minimumPersonAverage: 20,
  maximumPersonAverage: 38,
  averageCookie: 2.3,
  averageCustomers: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,

  getRandomCustomers: function(){
    return Math.random() * (capitolHill.maximumPersonAverage - capitolHill.minimumPersonAverage) + capitolHill.minimumPersonAverage;
   console.log(Math.random());
  },

  
getCookiesPerHour: function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  },
createList: function() {
  this.getCookiesPerHour();
  var divEl = document.getElementById('capitolHill');
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
  },
}


capitolHill.createList();

var alki = {
  storeName: 'Alki',
  minimumPersonAverage: 2,
  maximumPersonAverage: 16,
  averageCookie: 4.6,
  averageCustomers: [],
  cookiesPerHour: [],
  dailyCookieTotal: 0,

  getRandomCustomers: function(){
    return Math.random() * (alki.maximumPersonAverage - alki.minimumPersonAverage) + alki.minimumPersonAverage;
   console.log(Math.random());
  },

  
getCookiesPerHour: function(){
     for (var i = 0; i < timeTotal.length; i++) {
      var randomCookies = Math.floor(this.getRandomCustomers() * this.averageCookie);
      this.cookiesPerHour.push(randomCookies);
      this.dailyCookieTotal += randomCookies;
    }
  },
createList: function() {
  this.getCookiesPerHour();
  var divEl = document.getElementById('alki');
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
  },
}


alki.createList();

