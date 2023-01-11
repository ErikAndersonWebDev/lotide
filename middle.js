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
  };
  return true;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Arrays are equal`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Arrays are NOT equal`);
  }
};

const middle = function(array) {
  let trimmedArray = [];
  let trim = Math.ceil(array.length / 2) - 1;
  trimmedArray = (array.slice(trim, (array.length - trim)));
  return trimmedArray;
};