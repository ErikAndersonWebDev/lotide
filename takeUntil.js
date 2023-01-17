const takeUntil = function(array, callback) {
  const filtered = [];
  for (let arr of array) {
    if (callback(arr) === false) {
      filtered.push(arr);
    } else {
    return filtered;
    }
  }
  return filtered;
}

module.exports = takeUntil;