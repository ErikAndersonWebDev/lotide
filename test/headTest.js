const helper = require('../head');

helper.assertEqual(helper.head([5,6,7]), 5); // true
helper.assertEqual(helper.head(["Hello", "Lighthouse", "Labs"]), "Hello"); // true
helper.assertEqual(helper.head(["hi", "hello", "goodbye"]), "hello"); // false
