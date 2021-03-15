const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
  const result = {};

  const turn = Math.pow(2, disksNumber) - 1;

 
  const speed = turnsSpeed / 3600;
  let seconds = turn / speed;

  result['turns'] = turn;
  result['seconds'] = seconds;
  
  return result;
 
};
