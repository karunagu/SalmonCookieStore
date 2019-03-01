
var firstandpike = {
    minNumCust: 23,
    maxNumCust: 65,
    avgCookieSale: 6.3
}

var seatac = {
    minNumCust : 3,
    maxNumCust : 24,
    avgCookieSale : 1.2
}

var seattlecenter = {
    minNumCust : 11,
    maxNumCust : 38,
    avgCookieSale : 3.7
}

var capitolhill= {
    minNumCust : 20,
    maxNumCust : 38,
    avgCookieSale : 2.3
}

var alki = {
    minNumCust : 2,
    maxNumCust : 16,
    avgCookieSale : 4.6
}

function getRandomCustCount(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

console.log ('firstandpike',getRandomCustCount(firstandpike.minNumCust,firstandpike.maxNumCust));
