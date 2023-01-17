const eqArrays = require('./eqArrays');

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
};

module.exports = eqObjects;