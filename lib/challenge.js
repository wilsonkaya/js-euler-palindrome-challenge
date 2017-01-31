'use strict';

// This function will be called with 3 arguments set to
// 2, 10, and 1000000 respectively
const doubleBasePalindromeSum = function (base1, base2, upperLimit ) {
  let first = 0;
  let second = 0;
  for (let i = 0; i < upperLimit; i++) {
    if (i % base1 === 0){
      first += i;
    }
  }

  for (let i = 0; i < upperLimit; i++) {
    if (i % base2 === 0){
      second += i;
    }
  }

  return first + second;

};

module.exports = {
  doubleBasePalindromeSum,
};
