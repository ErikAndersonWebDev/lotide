const middle = function(array) {
  let trimmedArray = [];
  let trim = Math.ceil(array.length / 2) - 1;
  trimmedArray = (array.slice(trim, (array.length - trim)));
  return trimmedArray;
};

module.exports = middle;