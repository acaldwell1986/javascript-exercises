const fibonacci = function(arg) {
    let intArg = parseInt(arg);
    if (intArg === 1 || 0) {
        return intArg;
    }
    else if (intArg < 0) {
        return "OOPS"
    }
    else {
        let a = 1; //initial previous value
        let b = 0;
        let temp = 0;
        
        for (let i = intArg; i > 0; i--) {
            temp = a; //this loops new prev number for next iteration
            a = a + b;
            b = temp;
        }
        return b;     
    }
    
};


// Do not edit below this line
module.exports = fibonacci;
