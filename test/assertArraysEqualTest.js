const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1, 2, 3], [1])// false
assertArraysEqual(["hello", "goodbye", "fun"], ["hello", "goodbye", "fun"]) // true
assertArraysEqual([232, "run", 111], [232, "jog", 111]) // false