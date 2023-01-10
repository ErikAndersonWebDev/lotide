const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);