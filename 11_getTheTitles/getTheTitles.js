const getTheTitles = function(arg) {
    const titles = arg.filter(book => (book.title !== ""));
    return titles;
}

// Do not edit below this line
module.exports = getTheTitles;
