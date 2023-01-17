const eqObjects = require('./eqObjects'); 

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`\u2705\u2705\u2705Objects are equal ${inspect(actual)} = ${inspect(expected)}`);
  } else {
    console.log(`\u26D4\u26D4\u26D4Objects are NOT equal ${inspect(actual)} != ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;