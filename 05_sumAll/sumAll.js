const sumAll = function(start, end) {
  let sum = 1;
  if (start <= 0){
    return 'ERROR';
  }
  else if (Number.isInteger(end)) {
    if (start > end) {
        let temp = start; 
        start = end; 
        end = temp; 
    };
    while (start !== end) {
        start += 1;
        sum+=start;
    };
    return sum; 
} 
  else 
      return 'ERROR' 
};

// Do not edit below this line
module.exports = sumAll;
