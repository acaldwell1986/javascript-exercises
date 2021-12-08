const reverseString = function(str) {
    let reverser = [];
    let reverseStr = '';
    let count = 0;

    for (let i = str.length; i > 0; i--) {
        console.log(i);
        reverser[count] = str.substr(i - 1,1);
        count++;
        console.log(reverser);
    }

    for (let i = 0; i < reverser.length; i++) {
        reverseStr += reverser[i];
        console.log(reverseStr);
    }

    return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;
