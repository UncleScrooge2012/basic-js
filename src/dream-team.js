const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  const name = [];

  
  if (!Array.isArray(members)) return false;

  
  members.forEach(item => {
     
      if (typeof item !== 'string') return false;
     
      const trimmed = item.trim();
      
      const upperCase = trimmed[0].toUpperCase();
     
      name.push(upperCase);
  });

  name.sort();
  let result = name.join('');
  return result;
};
