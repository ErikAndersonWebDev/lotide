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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Assertion Passed`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Assertion Failed`);
  }
};


const eqObjects = function(object1, object2) {
  if ((Object.keys(object1).length) !== (Object.keys(object2).length)) {
    return false;
  } 
  for (let item of Object.keys(object1)) {
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
      if (eqArrays(object1[item], object2[item]) === true) {
        return true; 
      }
    }
    if (object1[item] !== object2[item]) {
      return false;
    }
  } 
  return true;
};






// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// assertObjectsEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// assertObjectsEqual((eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)), false); // => false