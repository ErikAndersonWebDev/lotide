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
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705\u2705Arrays are equal`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Arrays are NOT equal`);
  }
};


const eqObjects = function(object1, object2) {
  let test = false;
  if ((Object.keys(object1).length) == (Object.keys(object2).length)) {
    for (let key in object1) {
      if (Array.isArray(object1[key])) {
        test = eqArrays(object1[key], object2[key])
      } else if (object1[key] === object2[key]) {
        test = true;
      } else {
        test = false;
      }
    }
  }
  return test;
}






const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false