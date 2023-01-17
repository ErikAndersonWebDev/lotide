const map = function(array, callback) {
  const resultTwo = [];
  for (let item of array) {
    resultTwo.push(callback(item));
  }
  return resultTwo;
};

module.exports = map;