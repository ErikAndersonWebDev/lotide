const without = function(source, itemsToRemove) {
  let removedArray = [];
  for (let x = 0; x < source.length; x++) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        removedArray.push(source[x]);
      };
    };
  };
  return removedArray;  
};

module.exports = without;