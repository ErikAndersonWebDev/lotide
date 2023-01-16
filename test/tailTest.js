const assertEqual = require('../assertEqual')
const tail = require('../tail');

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs"); // true
assertEqual(tail([1, 2, 3, 4, 5, 6]), 6); // true
assertEqual(tail([true, false, undefined]), true); // false