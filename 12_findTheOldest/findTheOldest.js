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
// const findTheOldest = function(array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth
//     console.log("oldest: " + oldestAge);
//     const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth
//     console.log("current: " + currentAge);
//     return oldestAge < currentAge ? currentPerson : oldest
//   })
// };





function findTheOldest(array) {
  let oldestTempA = 0;
  let oldestTempB = 0;
  let oldestTempC = 0;
  for (let i = array.length - 1; i > 0; i--) {
      console.log(i)
      
      oldestTempA = array[i].yearOfDeath - array[i].yearOfBirth;
      oldestTempB = array[i-1].yearOfDeath - array[i-1].yearOfBirth;
      console.log(oldestTempB)
      
      

    
  }
};



const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

console.log(findTheOldest(people));

// Do not edit below this line
//module.exports = findTheOldest;
