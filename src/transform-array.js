module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error;
  const res = [];
  for(let i = 0; i < arr.length; i++){
      switch(arr[i]){
          case '--double-next':
              if(i < arr.length-1) res.push(arr[i + 1]);
              break;
          case '--double-prev':
              if(i>0) res.push(arr[i - 1]);
              break;
          case '--discard-next':
              if(i < arr.length-1) i++;
              break;
          case '--discard-prev':
              if(arr.length > 0) res.pop();
              break;
          default:
              res.push(arr[i])
      }
  }
  return res;
};