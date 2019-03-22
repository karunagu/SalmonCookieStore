'use strict';

var store_form = document.getElementById('store_form');
var store_table = document.getElementById('store_table');
var data = [];

// var table = document.getElementById('shell');    

function Stores (name,am_6,am_7,am_8,am_9,am_10,am_11,pm_12,pm_1,pm_2,pm_3,pm_4,pm_5,pm_6,pm_7,total)
{
  this.name = name,
  // this.avg_Cookies = avg_Cookies,
  this.am_6 = am_6,
  this.am_7 = am_7,
  this.am_8 = am_8,
  this.am_9 = am_9, 
  this.am_10 = am_10,
  this.am_11 = am_11,
  this.pm_12 = pm_12,
  this.pm_1 = pm_1,
  this.pm_2 = pm_2,
  this.pm_3 = pm_3,
  this.pm_4 = pm_4,
  this.pm_5 = pm_5,
  this.pm_6 = pm_6,
  this.pm_7 = pm_7,
  this.total = total
}    

function getCookieCount(numCust,avgCookies) {
  return Math.ceil(numCust * avgCookies)
}

function formData(event) {
  event.preventDefault();

  var storeName = event.target.store_name.value;
  var am_6_Cookies = getCookieCount(event.target.am_6.value,event.target.avg_cookies.value);
  var am_7_Cookies = getCookieCount(event.target.am_7.value,event.target.avg_cookies.value);
  var am_8_Cookies = getCookieCount(event.target.am_8.value,event.target.avg_cookies.value);
  var am_9_Cookies = getCookieCount(event.target.am_9.value,event.target.avg_cookies.value);    
  var am_10_Cookies = getCookieCount(event.target.am_10.value,event.target.avg_cookies.value);  
  var am_11_Cookies = getCookieCount(event.target.am_11.value,event.target.avg_cookies.value);  
  var pm_12_Cookies = getCookieCount(event.target.pm_12.value,event.target.avg_cookies.value);  
  var pm_1_Cookies = getCookieCount(event.target.pm_1.value,event.target.avg_cookies.value);  
  var pm_2_Cookies = getCookieCount(event.target.pm_2.value,event.target.avg_cookies.value);  
  var pm_3_Cookies = getCookieCount(event.target.pm_3.value,event.target.avg_cookies.value);  
  var pm_4_Cookies = getCookieCount(event.target.pm_4.value,event.target.avg_cookies.value);  
  var pm_5_Cookies = getCookieCount(event.target.pm_5.value,event.target.avg_cookies.value);  
  var pm_6_Cookies = getCookieCount(event.target.pm_6.value,event.target.avg_cookies.value);  
  var pm_7_Cookies = getCookieCount(event.target.pm_7.value,event.target.avg_cookies.value);
  var total = am_6_Cookies+am_7_Cookies+am_8_Cookies+am_9_Cookies+am_10_Cookies+am_11_Cookies+pm_12_Cookies+
              pm_1_Cookies+pm_2_Cookies+pm_3_Cookies+pm_4_Cookies+pm_5_Cookies+pm_6_Cookies+pm_7_Cookies

  data.push(new Stores(storeName, am_6_Cookies,am_7_Cookies,am_8_Cookies,
                am_9_Cookies,am_10_Cookies,am_11_Cookies,pm_12_Cookies,pm_1_Cookies,pm_2_Cookies,
                pm_3_Cookies,pm_4_Cookies,pm_5_Cookies,pm_6_Cookies,pm_7_Cookies,total              
                ));
  createTable();
  store_form.reset();
}

function createTable() {
  var row;
  var i=0;
  for (var i = 0; i < data.length; i++) {
      row = document.createElement('tr');
      row.innerHTML = '<td>' + data[i].name + '</td>' +
          '<td>' + data[i].am_6 + '</td>'  +
          '<td>' + data[i].am_7 + '</td>'  +
          '<td>' + data[i].am_8 + '</td>'  +
          '<td>' + data[i].am_9 + '</td>'  +     
          '<td>' + data[i].am_10+ '</td>'  +
          '<td>' + data[i].am_11+ '</td>'  +
          '<td>' + data[i].pm_12+ '</td>'  +
          '<td>' + data[i].pm_1 + '</td>'  +    
          '<td>' + data[i].pm_2 + '</td>'  +
          '<td>' + data[i].pm_3 + '</td>'  +               
          '<td>' + data[i].pm_4 + '</td>'  +
          '<td>' + data[i].pm_5 + '</td>'  +    
          '<td>' + data[i].pm_6 + '</td>'  +
          '<td>' + data[i].pm_7 + '</td>'  +
          '<td>' + data[i].total + '</td>'             


  }

  store_table.appendChild(row);
}

store_form.addEventListener('submit', formData);



