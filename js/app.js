'use strict';

var parentElement = document.getElementById('table');
var hours = ['6am', '7am', '8am',' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var allStores = [];

//next is the construction function:
function Store(name, minCustomerPerHour, maxCustomerPerHour, averageCookierPerPerson){
  this.name = name;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookierPerPerson = averageCookierPerPerson;
  this.customersEachHour = [];
  this.cookiesSoldEachHour = [];
  this.totalCookiesForTheDay = 0;
  allStores.push(this);
}

Store.prototype.calcCustomersEachHour = function(){
  // for loop over hours
    // make a helper function that generates a random number
    // push that random number into the customersEachHour array
  for(var i=0; i<hours.length; i++){
    var customerThisHour = getRandomNumber(this.minCustomerPerHour, this.maxCustomerPerHour);

    this.customersEachHour.push(customerThisHour);
  }
}

Store.prototype.calcCookiesSoldEachHour = function(){
  this.calcCustomersEachHour(); // this will generate the customer array
  // loop through the array of random customers
    // multiply each customer entry by the averge cookie sale
    // push into the cookiesSoldEachHour array
  for(var i=0; i<this.customersEachHour.length; i++){
    var totalCookies = Math.ceil(this.averageCookierPerPerson * this.customersEachHour[i]);

    this.cookiesSoldEachHour.push(totalCookies);
  }
}

Store.prototype.cookiesForTheDay = function(){
  this.calcCookiesSoldEachHour();
  // loop through cookies sold each hour array 
    // add them all together
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    this.totalCookiesForTheDay += this.cookiesSoldEachHour[i];
    // this.totalCookiesForTheDay = this.totalCookiesForTheDay + this.cookiesSoldEachHour[i]
  }
}
//function for the table header with the hours of the stores open
function renderHeaderRow(){
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableData.textContent = '';
  tableRow.appendChild(tableData);
  for(var i=0; i<hours.length; i ++){
    tableData = document.createElement('td');
    tableData.textContent = hours[i];
    tableRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = 'total';
  tableRow.appendChild(tableData);

  parentElement.appendChild(tableRow);
} 


Store.prototype.render = function(){
  this.cookiesForTheDay();

  var tableRow = document.createElement('tr');

  var tableheader = document.createElement('th'); // create a th 
   
  tableheader.textContent = this.name;   // fill it with content: this.name
    
  tableRow.appendChild(tableheader);  // append th to the table row

  // this is for the cookies sold each hour
    // loop over the cookies sold each hour
  for(var i=0; i<this.cookiesSoldEachHour.length; i++){
    
    var tableData = document.createElement('td'); // create a td
    tableData.textContent = this.cookiesSoldEachHour[i]; // fill it with content: this.cookiesSoldEachHour[i]
    tableRow.appendChild(tableData); // append td to the table row
  }

  // this for the cookies for the day
  tableData = document.createElement('td');  // create a td
  tableData.textContent = this.totalCookiesForTheDay; // fill it with content: this.totalCookiesForTheDay
  tableRow.appendChild(tableData); // apped td to the table row

  parentElement.appendChild(tableRow); // append the table row to the parent
  
}
//footer with total of all the cookies por every hour in each location
function renderFooterRow(){
  var totalOfAllTotals = 0;

  var tableRow = document.createElement('tr'); // create a table row

  var tableData = document.createElement('td'); // create td
  
  tableData.textContent = 'Hourly Total'; // fill it with the word 'hourly total'
  
  tableRow.appendChild(tableData);  // append it to the table row


  // outer loop: for each hour
    // inner loop is going to loop over each store
        // access my cookies sold each hour array at the same position as my outer loop
  for(var i=0; i<hours.length; i++){

    var sum = 0;

    for(var j=0; j<allStores.length; j++){
      console.log('inner loop', sum);
      sum += allStores[j].cookiesSoldEachHour[i];
    }

    totalOfAllTotals += sum; // totalOfAllTotals = totalOfAllTotal + sum;
    
    tableData = document.createElement('td'); // create a td
    
    tableData.textContent = sum; // fill it with the sum
    
    tableRow.appendChild(tableData); // append it to the table row

  }
  // append the total of all totals
  tableData = document.createElement('td'); // create a td
  
  tableData.textContent = totalOfAllTotals; // fill it the total
  
  tableRow.appendChild(tableData);  // append it to the table row
  
  // append table row to parent
  parentElement.appendChild(tableRow);
}

// helper functions
function getRandomNumber(min, max){
  return Math.floor(Math.random() * (max-min +1)) + min;
}

var seattle = new Store('Seattle', 23, 65, 6.3);
var tokyo = new Store('Tokyo', 3, 24, 1.2);
var dubai = new Store('Dubai', 23, 65, 6.3);
var paris = new Store('Paris', 20, 38, 2.3);
var lima = new Store('Lima', 2, 16, 4.6);

renderHeaderRow();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderFooterRow();