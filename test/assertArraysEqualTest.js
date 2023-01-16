const helper = require('../assertArraysEqual');
const assertEqual = 

helper.assertEqual(helper.eqArrays([1, 2, 3], [1, 2, 3]), true) // true
helper.assertEqual(helper.eqArrays(["hello", "goodbye", "fun"], ["hello", "goodbye", "fun"]), true) // true
helper.assertEqual(helper.eqArrays([232, "run", 111], [232, "jog", 111]), true) // false