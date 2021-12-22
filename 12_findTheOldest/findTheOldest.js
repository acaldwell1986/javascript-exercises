const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]


const findTheOldest = function(args) {
  args.forEach(element => {
    if (typeof element.yearOfDeath === 'undefined') {
      let date = new Date();
      let year = date.getFullYear();
      element.age = year - element.yearOfBirth;
    }
    else {
      element.age = element.yearOfDeath - element.yearOfBirth;
    }
  });
  
  people.sort(function (a,b) {
    return b.age - a.age;
  });
  return args[0];
}

console.log(findTheOldest(people));



// Add age property.
// Loop thru 
//if death date exists = calculate and add age to property for each name in array
//else create variable for today's date and subtract birth date from today's date to get age.
// Sort array by age and return oldest value


// Do not edit below this line
module.exports = findTheOldest;
