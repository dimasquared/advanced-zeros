module.exports = function getZerosCount(number, base) {
  let factorList = [];
  let countPrime = {};
  let newBase = base;
  
  for (let k = 2; k <= newBase; ) {
    if (newBase % k == 0) {
      factorList.push (k);
      newBase = newBase / k;
    }
    else if (k == 2) ++k;
      else k += 2;
  }

  factorList.forEach (function(a) {
    if (countPrime[a] != undefined)
      ++countPrime[a];
    else
      countPrime[a] = 1;
  });

  let zerosCount = [];
  let zeros = 0;

  for (let key in countPrime) {
    for (let i = 1; Math.pow (key, i) <= number; i++) {
      zeros = zeros + Math.floor (number / Math.pow (key, i));
    }
    zerosCount.push (Math.floor (zeros / countPrime[key]));
  }

  let result = zerosCount[0];
  let countLength = zerosCount.length;

  for (let n = 1; n < countLength; n++) {
    if (zerosCount[n] < result) result = zerosCount[n];
  } 

  return result;
}