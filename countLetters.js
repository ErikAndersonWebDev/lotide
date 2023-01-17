const countLetters = function(allItems) {
  let x = 0;
  for (const item of allItems) {
    if (item !== " ") {
        x++;
    }
  }
  return x;
};

module.exports = countLetters;