const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  if (typeof sampleActivity !== 'string') return false;

  
  const number = parseFloat(sampleActivity);

  if (isNaN(number)) return false;

  if (number <= 0 || number > 15) return false;

  const n = 0.693 / HALF_LIFE_PERIOD;

  
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / number) / n);

  return res;

};


