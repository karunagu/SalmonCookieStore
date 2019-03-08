'use strict';

    // ,seatac,seattlecenter,capitolhill,alki]
var table = document.getElementById('shell');    

function Stores (name,minNumCust,maxNumCust,avgCookieSale){
  this.name = name,
  this.minNumCust = minNumCust,
  this.maxNumCust = maxNumCust,
  this.avgCookieSale = avgCookieSale
}    
var stores = [];
var rowData = [];

var firstandpike = new Stores('1st and Pike',23,65,6.3);
// console.log(firstandpike);
var seatac = new Stores('SeaTac',3,24,1.2);
var seattlecenter = new Stores('Seattle Center',11,38,3.7);
var capitolhill = new Stores('Capitol Hill',20,38,2.3);
var alki = new Stores('Alki',2,16,4.6);
stores.push(firstandpike,seattlecenter,capitolhill,alki);

// var stores = [firstandpike,seatac,seattlecenter,capitolhill,alki];    
function getCustCount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

function getCookieCount(numCust,avgCookies) {
    return Math.ceil(numCust * avgCookies)
}

  var StoreList = document.getElementById('store-list');
  var tabHead = document.getElementById('tabHead');
  var storetime;
  var numCust;
  var numCookies;
  // var storeCount =0;

  function makeRow(store,totCookieStore) {
    var totCookieStore = 0;
    for (var i = 6; i <= 19; i++) {
      numCust = getCustCount(store.minNumCust,store.maxNumCust);
      numCookies = Math.ceil(numCust * store.avgCookieSale);
      totCookieStore = totCookieStore + numCookies;
      rowData.push(
        '<td>' + numCookies + '</td>' 
         )
    }
    return totCookieStore;
    // console.log(rowData);    
  }

  //     // var tdTabHead = document.createElement('td');
  //     // console.log(storetime);
  //     // tdTabHead.textContent = storetime;
  //     // tabHead.appendChild(tdTabHead);
  
  //     // libTabHead.tabHead = storetime;
  //     // tabHead.appendChild(libTabHead);
  //     // 1. Create new element
  //     var liEl = document.createElement('li');
  
  //     // 2. Give the element some content

  //     liEl.textContent = storetime + ': ' + numCookies + ' Cookies';
  //     // console.log('StoreCount',storeCount);
  
  //     // console.log('stores[storeCount].minNumCust',stores[storeCount].minNumCust);
  //     // console.log ('numCust', numCust);
  //     // console.log ('numCookies', numCookies);
  
  //     // 3. Append the new element to its parent in the DOM
  //     StoreList.appendChild(liEl);
  //     totCookies = totCookies + numCookies;

  //   }
  // }
  
  function render(tableRow) {
    for (var j=0; j < tableRow.length; j++) {
      var newRow = document.createElement('td');
      newRow.innerHTML = tableRow[j];
      table.appendChild(newRow);
    }
  }

  var rowData = [];
  rowData.push(
    '<td>' + 'Store'+ '</td>' 
     )  
  for (var i = 6; i <= 19; i++) {
    if (i < 12) {
        storetime = i + ' am' } 
    else if (i===12) {
        storetime = i + ' pm' 
    }
    else if (i > 12) {
        storetime = (i-12) + ' pm' 
    }
    rowData.push(
      '<td>' + storetime+ '</td>' 
       )
  }
  rowData.push(
    '<td>' + 'Daily Location Total'+ '</td>' 
     )
  render(rowData);
  var newRow = document.createElement('tr');
  newRow.innerHTML = ' ';      
  table.appendChild(newRow);

  
  var storeCount = 0;
  // console.log('store Count', storeCount);
  // console.log('stores.length' ,stores.length);
  while (storeCount < stores.length) {
      // console.log(stores[storeCount].name);
    var totCookies = 0;
      var rowData = [];
      rowData.push(
        '<td>' + stores[storeCount].name + '</td>' 
         );    
      var totRow = makeRow(stores[storeCount]);

      rowData.push(
        '<td>' + totRow + '</td>' 
         )
      // console.log(rowData);
      render(rowData);
      var newRow = document.createElement('tr');
      newRow.innerHTML = ' ';      
      table.appendChild(newRow);

//   liEl.textContent = 'Total : ' + totCookies + ' Cookies';  
    storeCount = storeCount + 1;
}

//     while (storeCount < stores.length) {

//     var totCookies = 0;

//     var liEl = document.createElement('li');

//     liEl.textContent = 'Store Name : ' + stores[storeCount].name;
//     StoreList.appendChild(liEl);
// //   console.log('StoreCount',storeCount);

//   for (var i = 6; i <= 20; i++) {
//     if (i < 12) {
//         storetime = i + ' am' } 
//     else if (i===12) {
//         storetime = i + ' pm' 
//     }
//     else if (i > 12) {
//         storetime = (i-12) + ' pm' 
//     }
//     // var tdTabHead = document.createElement('td');
//     // console.log(storetime);
//     // tdTabHead.textContent = storetime;
//     // tabHead.appendChild(tdTabHead);

//     // libTabHead.tabHead = storetime;
//     // tabHead.appendChild(libTabHead);
//     // 1. Create new element
//     var liEl = document.createElement('li');

//     // 2. Give the element some content
//     numCust = getCustCount(stores[storeCount].minNumCust,stores[storeCount].maxNumCust);
//     numCookies = Math.ceil(numCust * stores[storeCount].avgCookieSale);
//     liEl.textContent = storetime + ': ' + numCookies + ' Cookies';
//     // console.log('StoreCount',storeCount);

//     // console.log('stores[storeCount].minNumCust',stores[storeCount].minNumCust);
//     // console.log ('numCust', numCust);
//     // console.log ('numCookies', numCookies);

//     // 3. Append the new element to its parent in the DOM
//     StoreList.appendChild(liEl);
//     totCookies = totCookies + numCookies;
//   }
//   liEl.textContent = 'Total : ' + totCookies + ' Cookies';  
//   storeCount = storeCount + 1;
// }
// //   console.log (stores[0],stores[0].minNumCust,stores[0].maxNumCust,stores[0].avgCookies);

