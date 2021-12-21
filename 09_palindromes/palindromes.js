const palindromes = function (args) {

    let palinCheck = args.replace(/\W/g, '');
    palinCheck = palinCheck.toLowerCase();
    let reversedString = '';
    
    console.log(palinCheck.length);

    

    for (let i = palinCheck.length; i > 0; i--) {
        reversedString += palinCheck[i-1];
    }
    console.log(reversedString);
    console.log(palinCheck);
    
    if (palinCheck === reversedString) {
        return true;
    }
    else {
        return false;
    }
};



// Do not edit below this line
module.exports = palindromes;
