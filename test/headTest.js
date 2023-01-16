const assertEqual = require('../assertEqual'); 
const head = require('../head');

assertEqual(head([5,6,7]), 5); // true
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // true
assertEqual(head(["hi", "hello", "goodbye"]), "hello"); // false
