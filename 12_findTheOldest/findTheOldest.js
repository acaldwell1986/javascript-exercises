const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
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
//function returns the sum of all birth years right now
const findTheOldest = function(args) {
   return args.reduce((total, person) => {
       return total + (person.yearOfBirth);
   }, 0)
}

console.log(findTheOldest(people));

// Do not edit below this line
//module.exports = findTheOldest;
