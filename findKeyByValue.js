const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (obj, value) {
  for (let genre in obj) {
    if (obj[genre] === value){
      return genre;
    };
  };
  return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};