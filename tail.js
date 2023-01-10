const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  if (array.length > 0) {
    let arrayTail = array.slice(1);
    return arrayTail;
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);