'use strict';
//GOAL:dynamical render a table to the DOM

//select parent element

var parentElement = document.getElementById('table');

//Put the NAME on the table: 
//create a tr
var tableRow = document.createElement('tr');


var array=['Name','Type','Color','Age']; 
for(var i=0; i<array.length; i++);{

  var tableHeader = document.createElement('th');//create elemet
  tableHeader.textContent = array[i];//give it content
  tableRow.appendChild(tableHeader);//append it

}


//append the tr to the parent
parentElement.appendChild(tableRow);



var hours = ['6am', '7am', '8am',' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var seattle = {
//   name: 'seattle',
//   minCustomersEachHour: 23,
//   maxCustomersEachHour: 65,
//   averageCookiesSoldPerCustomer: 6.3,
//   customersEachHour: [],
//   cookiesSoldEachHour: [],
//   totalCookiesForTheDay: 0,

function Location(name,minCustHour,maxCustHour,avgCookieSales,custEachHour,cookiesSoldEachHour,totalCookies){
  this.name = name;
  this.minimum = minCustHour;
  this.maximum = maxCustHour;
  this.cookiesPerHour = avgCookieSales;
  this.customersEachHour= custEachHour;
  this.cookiesPerHour = cookiesSoldEachHour;
  this.total = totalCookies;

}
var seattle = new Location(23,65,6.3,[i],[i],0);

Location.prototype.calcCustomersEachHour = function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
  }
  
  Location.prototype.calcCookiesSoldEachHour =function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; 
    }
  }
 
  Location.prototype.render=function(){
    seattle.calcCustomersEachHour();
    seattle.calcCookiesSoldEachHour();
    var seattleElement = document.getElementById('seattle');

    // get the parent element from the DOM
      // 1. create an element
      // 2. fill it with text content
      // 3. append it
    // render the name of the store
    
    var listItem = document.createElement('li');
    listItem.textContent = this.name;
    seattleElement.appendChild(listItem);

    // render cookiesSoldEachHour
    for(var i=0; i<hours.length; i++){
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.cookiesSoldEachHour[i]} cookies.`;
      seattleElement.appendChild(listItem);
    }

    // this will render totalCookiesForTheDay to the DOM
    listItem = document.createElement('li');
    listItem.textContent = this.totalCookiesForTheDay;
    seattleElement.appendChild(listItem);
  }
//}

// this function is from MDN Math.random to help with mathematical operation we need to make to find the missing numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//seattle.render();
//seattle.customersEachHour();



