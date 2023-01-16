const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3]), [2]) // true
assertArraysEqual(middle(["hi", "hello", "welcome", "bonjour"]), ["hello", "welcome"]); // true
assertArraysEqual(middle([]), []) // true
assertArraysEqual(middle([4, 6, 8, 10, 12]), [12]); // false