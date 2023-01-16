const helper = require('../tail');

helper.assertEqual(helper.tail(["Yo Yo", "Lighthouse", "Labs"]), "Labs"); // true
helper.assertEqual(helper.tail([1, 2, 3, 4, 5, 6]), 6); // true
helper.assertEqual(helper.tail([true, false, undefined]), true); // false