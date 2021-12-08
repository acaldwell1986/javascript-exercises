const sumAll = function(start, end) {
    start = 0;
    let sum = 0;
       while (start !== end) {
         start += 1;
         sum+=start;
       }
   return sum;    
   };

// Do not edit below this line
module.exports = sumAll;
