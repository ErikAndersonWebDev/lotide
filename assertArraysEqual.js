const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705\u2705\u2705Arrays are equal: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Arrays are NOT equal: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
