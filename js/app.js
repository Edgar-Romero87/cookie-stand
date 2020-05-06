'use strict';
// need an array to store the hours - given

// object literal for each store
//min customer each hour - inf provided
//max customer each hour - inf provided
//average cookie sold per customer - inf provided
//for each hour
//   make an array that holds the customers for each hour
//   need a random number between the min and the max
//   *** we need to make an array that holds the number of cookies sold each hour***
//       -this is what we want to put on the DOM
//       -total cookies for the day

var hours = ['6am', '7am', '8am',' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var seattle = {
  name: 'seattle',
  minCustomersEachHour: 23,
  maxCustomersEachHour: 65,
  averageCookiesSoldPerCustomer: 6.3,
  customersEachHour: [],
  cookiesSoldEachHour: [],
  totalCookiesForTheDay: 0,

  calcCustomersEachHour: function(){
    // calculate the customers each hour and populate the array
    for(var i=0; i<hours.length; i++){
      var customersThisHours = getRandomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);

      this.customersEachHour.push(customersThisHours);
    }
  },
  
  calcCookiesSoldEachHour: function(){
    // multiply the customers by the average cookies each customers buys
    for(var i=0; i<this.customersEachHour.length; i++){
      var wholeCookiesSoldForOneHour = Math.ceil(this.customersEachHour[i] * this.averageCookiesSoldPerCustomer);

      this.cookiesSoldEachHour.push(wholeCookiesSoldForOneHour);

      this.totalCookiesForTheDay += wholeCookiesSoldForOneHour; 
    }
  },
 
  render: function(){
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
}

// this function is from MDN Math.random to help with mathematical operation we need to make to find the missing numbers
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
seattle.render();
