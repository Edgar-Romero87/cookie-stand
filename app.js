'use strict'


var seattle = {
  minCust: 23,
  maxCust: 65,
  averageSales: 6.3,
  openHours:['6am' , '7am', '8am',' 9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  cookiesPerHour: [],
  generateRandomCustPerHour: function() {
    for(var i = 0; i < this.openHours.length; i++) {
      var randomCust = Math.random() * (this.maxCust - this.minCust + 1) + this.minCust;

      
      
      randomCust = randomCust * this.averageSales;
      randomCust = Math.floor(randomCust);
      this.cookiesPerHour.push(randomCust);
   }
  },
  total: function() {
    var cookiesPerHour = [];
    var sum = 0;
    for(var i =0; i < 14; i ++){
      cookiesPerHour.push(this.cookiesPerHour());
      sum += this.cookiesPerHour();
    }
    cookiesPerHour.push(sum);
    return cookiesPerHour;
  }
}
seattle.generateRandomCustPerHour();
console.log(seattle.cookiesPerHour);

  
  
  
// var tokyo ={
//   name: 'Tokyo',
//   minCust: 23,
//   maxCust: 65,
//   avgCookieSales: 6.3,
