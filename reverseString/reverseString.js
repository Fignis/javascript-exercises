const reverseString = function (regularString) {
  let rStringlen = regularString.length;
  let newString = "";
  for (i = rStringlen - 1; i >= 0; i--) {
    newString += regularString[i];
  }
  return newString;
};

module.exports = reverseString;
