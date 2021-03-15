const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
  const cats = matrix.map(item => item.filter(i => i === '^^'))
  return cats.lenght
};
