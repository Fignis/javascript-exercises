const { number } = require("prop-types");

const repeatString = function (string, numberOf) {
  let output = "";
  if (numberOf < 0) {
    return "ERROR";
  } else if (numberOf == number) {
    numberOf = number;
  }
  for (x = 0; x < numberOf; x++) {
    output += string;
  }
  return output;
};

module.exports = repeatString;
