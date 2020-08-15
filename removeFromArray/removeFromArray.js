const removeFromArray = function (arrInput, removedElement) {
  if (arrInput.indexOf(removedElement.toString())) {
    arrInput.slice(removedElement);
    return arrInput;
  } else {
    return arrInput;
  }
};

module.exports = removeFromArray;
