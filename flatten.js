const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`\u2705\u2705\u2705 Arrays are equal`);
  } else {
    console.log(`\u26D4\u26D4\u26D4 Arrays are NOT equal`);
  }
};

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

const flatten = function(nestedArray) {
  let flatArray = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (typeof nestedArray[i] == "object") {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flatArray.push(nestedArray[i][j]);
      }
    } else {
      flatArray.push(nestedArray[i]);
    }
  }
  return flatArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));