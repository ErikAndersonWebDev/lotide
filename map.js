const eqArrays = function(array1, array2) {
  if (array1.length != array2.length) {
    return false;
  };
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      continue;
    } else {
      return false;
    };
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705\u2705\u2705Assertion Passed!`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed!`);
  }
};

const map = function(array, callback) {
  const resultTwo = [];
  for (let item of array) {
    resultTwo.push(callback(item));
  }
  return resultTwo;
}
const words = ["ground", "control", "to", "major", "tom"];
const result = map(words, word => word[0]);

