    const removeFromArray = function() {
        let stringArray = arguments[0];
        let args = Array.from(arguments);
        console.log(args);
        console.log(stringArray);
        args.shift(); //remove the array to be compared from list of args
        console.log(args);
        console.log(stringArray);

         
        for (let i = 0; i < stringArray.length; i++) {
            for (let k = 0; k < args.length; k++) {
                if (args[k] === stringArray[i]) {
                    stringArray.splice(i,1);
                    i--;
                }
            }
        }
        return stringArray;
        
        }; 


// Do not edit below this line
module.exports = removeFromArray;
