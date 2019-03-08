'use strict';

    // ,seatac,seattlecenter,capitolhill,alki]
var firstandpike = {
    name :'1st and Pike',
    minNumCust: 23,
    maxNumCust: 65,
    avgCookieSale: 6.3,
    // expNumCust : getCustCount(this.minNumCust,this.maxNumCust),
    // expCookieSale : getCookieCount(this.expNumCust,this.avgCookieSale)
    }

var seatac = {
    name :'SeaTac',    
    minNumCust : 3,
    maxNumCust : 24,
    avgCookieSale : 1.2
    }

var seattlecenter = {
    name :'Seattle Center',    
    minNumCust : 11,
    maxNumCust : 38,
    avgCookieSale : 3.7
    }

var capitolhill= {
    name :'Capitol Hill',    
    minNumCust : 20,
    maxNumCust : 38,
    avgCookieSale : 2.3
    }

var alki = {
    name :'Alki',    
    minNumCust : 2,
    maxNumCust : 16,
    avgCookieSale : 4.6
    }

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

