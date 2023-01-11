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

const without = function(source, itemsToRemove) {
  let removedArray = [];
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        removedArray.push(source[x]);
      };
    };
  };
  return removedArray;  
};