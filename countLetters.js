const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allItems) {
  let x = 0;
  for (const item of allItems) {
    if (item !== " ") {
        x++;
    }
  }
  return x;
};

assertEqual(countLetters("hello world"), 10); // true
