const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(allItems) {
  const results = {};
  for (const item of allItems) {
    if (item !== " ") {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1
      }
    }
  }
  return results;
};