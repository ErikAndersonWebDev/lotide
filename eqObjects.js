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


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u2705\u2705\u2705Objects are equal ${actual} === ${expected}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Objects are NOT equal ${actual} !== ${expected}`);
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



// const shirtObject = { color: "red", size: "medium"};
// const anotherShirtObject= { size: "medium", color: "red"};
// console.log(eqObjects(shirtObject , anotherShirtObject)); // true

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// console.log(eqObjects(shirtObject , longSleeveShirtObject)); // false


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// eqObjects(shirtObject , anotherShirtObject); // => true
// //We need to use that return value in combination with assertEquals to test if the function is working correctly.
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// eqObjects(shirtObject , longSleeveShirtObject); // => false
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);


// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject)); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject)); // => false