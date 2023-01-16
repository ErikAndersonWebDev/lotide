const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // true
assertEqual(eqArrays([232, "run", 111], [232, "jog", 111]), true) // false
assertEqual(eqArrays(["hello", "goodbye", "fun"], ["hello", "goodbye", "fun"]), true) // true)