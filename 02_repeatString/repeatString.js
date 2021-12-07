const repeatString = function(stringVal, repeatNum) {
   
   
    let returnString = '';

     if (repeatNum >= 0) {               
        while (repeatNum > 0) {
            returnString += stringVal;
            repeatNum--;
        }

        return returnString;
    }
    else {
        return "ERROR"
    }
        
    
    

};

// Do not edit below this line
module.exports = repeatString;
