const findKey = function (obj, value) {
  for (let genre in obj) {
    if (value(obj[genre])){
      return genre;
    };
  };
  return undefined;
};

module.exports = findKey;