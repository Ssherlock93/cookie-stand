//This function takes the minimum and maximum amout of customers at the 1st and Pike //location and generates a random number of customers per hour

var minimumPersonAverage = 23
var maximumPersonAverage = 65
var averageCookie = 6.3

function getRandomCustomers(minimumPersonAverage,maximumPersonAverage) {
  return Math.random() * (maximumPersonAverage - minimumPersonAverage) + minimumPersonAverage;
 console.log(Math.random());
}



var timeTotal = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
var ulEl = document.createElement('ul');
for(var i = 0; i < timeTotal.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = timeTotal[i];
  ulEl.appendChild(liEl);
}

var storeTime = document.getElementById('timeTotal');
storeTime.appendChild(ulEl);