const assertEqual = require('./assertEqual');

const tail = function(array) {
  if (Array.isArray(array)) {
    return array[array.length - 1];
  }
};

module.exports = {
  tail: tail,
  assertEqual: assertEqual
}