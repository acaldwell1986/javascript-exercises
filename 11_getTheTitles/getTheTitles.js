
const booksExample = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

const getTheTitles = function(arg) {
    const titles = arg.map(book => `${book.title}`)
    return titles;
}



// Do not edit below this line
module.exports = getTheTitles;
