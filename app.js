'use strict';

    // ,seatac,seattlecenter,capitolhill,alki]

function Stores (name,minNumCust,maxNumCust,avgCookieSale){
  this.name = name,
  this.minNumCust = minNumCust,
  this.maxNumCust = maxNumCust,
  this.avgCookieSale = avgCookieSale
}    
var firstandpike = new Stores('1st and Pike',23,65,6.3);
// console.log(firstandpike);
var seatac = new Stores('SeaTac',3,24,1.2);
var seattlecenter = new Stores('Seattle Center',11,38,3.7);
var capitolhill = new Stores('Capitol Hill',20,38,2.3);
var alki = new Stores('Alki',2,16,4.6);

var stores = [firstandpike,seatac,seattlecenter,capitolhill,alki];    
function getCustCount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function getCookieCount(numCust,avgCookies) {
    return Math.ceil(numCust * avgCookies)
}

  var StoreList = document.getElementById('store-list');
  var storetime;
  var numCust;
  var numCookies;
  var storeCount =0;
    while (storeCount < stores.length) {

    var totCookies = 0;

    var liEl = document.createElement('li');

    liEl.textContent = 'Store Name : ' + stores[storeCount].name;
    StoreList.appendChild(liEl);
//   console.log('StoreCount',storeCount);

  for (var i = 6; i <= 20; i++) {
    if (i < 12) {
        storetime = i + ' am' } 
    else if (i===12) {
        storetime = i + ' pm' 
    }
    else if (i > 12) {
        storetime = (i-12) + ' pm' 
    }

    // 1. Create new element
    var liEl = document.createElement('li');
    // 2. Give the element some content
    numCust = getCustCount(stores[storeCount].minNumCust,stores[storeCount].maxNumCust);
    numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale);
    liEl.textContent = storetime + ': ' + numCookies + ' Cookies';
    // console.log('StoreCount',storeCount);

    // console.log('stores[storeCount].minNumCust',stores[storeCount].minNumCust);
    // console.log ('numCust', numCust);
    // console.log ('numCookies', numCookies);

    // 3. Append the new element to its parent in the DOM
    StoreList.appendChild(liEl);
    totCookies = totCookies + numCookies;
  }
  liEl.textContent = 'Total : ' + totCookies + ' Cookies';  
  storeCount = storeCount + 1;
}
//   console.log (stores[0],stores[0].minNumCust,stores[0].maxNumCust,stores[0].avgCookies);

