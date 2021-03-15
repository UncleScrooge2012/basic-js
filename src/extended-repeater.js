const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  const arr = [];

    
    if (!options.repeatTimes) {
      arr.push(str);
    } 
    if (!options.additionRepeatTimes) {
      arr.push(options.addition);
    } 

    for (let i = 1; i <= options.repeatTimes; i++) {
        
        arr.push(String(str));

        for (let j = 1; j <= options.additionRepeatTimes; j++) {
          
            arr.push(String(options.addition));            
            if (j < options.additionRepeatTimes)  {
              arr.push(options.additionSeparator || '|');
            }
                
        }
        
       
        if (i < options.repeatTimes) {
          arr.push(options.separator || '+');
        }
           
    }

    let result = arr.join('');

    return result;
};
  