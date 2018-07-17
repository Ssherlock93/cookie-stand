//This function takes the minimum and maximum amout of customers at the 1st and Pike //location and generates a random number of customers per hour

// var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



// var min = 23;
// var max = 65;
// var averageCookie = 6.3;
// var total = 0;
// var location = '1st and Pike'


// function getRandomCustomers(min,max) {
//   return Math.random() * (max - min) + min;
// }

// function cookieString() {
//   for(var i = 0; i < timeTotal.length; j++);
//   randomCookiers.push(getRandomCustomers);
//   console.log('randomCusts', randomCusts);
  
 
// }

// var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];


// var ulEl = document.createElement('ul');
// for(var i = 0; i < timeTotal.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeTotal[i];
//   ulEl.appendChild(liEl);
// }

// var storeTime = document.getElementById('timeTotal');
// storeTime.appendChild(ulEl);

// var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
// var ulEl = document.createElement('ul');
// for(var i = 0; i < timeTotal.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeTotal[i];
//   ulEl.appendChild(liEl);
// }

// var storeTime = document.getElementById('timeTotal');
// storeTime.appendChild(ulEl);

// var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
// var ulEl = document.createElement('ul');
// for(var i = 0; i < timeTotal.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeTotal[i];
//   ulEl.appendChild(liEl);
// }

// var storeTime = document.getElementById('timeTotal');
// storeTime.appendChild(ulEl);

// var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
// var ulEl = document.createElement('ul');
// for(var i = 0; i < timeTotal.length; i++) {
//   var liEl = document.createElement('li');
//   liEl.textContent = timeTotal[i];
//   ulEl.appendChild(liEl);
// }

// var storeTime = document.getElementById('timeTotal');
// storeTime.appendChild(ulEl);


var pikePlace = {
  storeName: 'Pike Place',
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  dailyTotal: 0,
  hours: ['6am', '7am', '8am'],
  calculateCustomers: function() {

  //Iterate through hours
  //For each hour, run random number generator
  //Push to customersPerHour []
    // for(i = 0; i < hours.length; i++){}
    for(var hour of pikePlace.hours) {
      var rand = generateRandom(pikePlace.minCustomers, pikePlace.maxCustomers);
     //use pikePlace. to call the object pikePlace
     pikePlace.customersPerHour.push(rando);
     }
     return pikePlace.customersPerHour;
  },
  calculateSales: function() {
    pikePlace.calculateCustomers();
    for (var numCustomers of pikePlace.customersPerHour){
      var cookies = Math.ceil(pikePlace.averageCookies * numCustomers);
      pikePlace.cookiesPerHour.push(cookies);
      pikePlace.dailyTotal += cookies;
    }

  },
  //finally run render() for each store we create
  render: function() {
    pikePlace.calculateSales()

    var ulEl = document.createElement('ul');
    var h2El = document.createElement('h2');
    h2El.textContent = pikePlace.storeName;
    ulEl.appendChild(h2El);

    for (var hour in pikePlace.hours) {
      var liEl = document.createElement('li');
      liEl.textContent = hours[idx] + ': ' + pikePlace.cookiesPerHour[idx] + 'cookies';
      ulEl.appendChild(liEl);

    }

    
    var liEltwo = document.createElement('li');
    liEltwo.textContent = 'Total: ' + pikePlace.dailyTotal;
    ulEl.appendChild(liEltwo);

    var mainEl = document.getElementById('main-content');
    mainEl.appendChild(ulEl);

  },
}