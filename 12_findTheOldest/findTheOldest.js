
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
  
  args.sort(function (a,b) {
    return b.age - a.age;
  });
  return args[0];
}





// Add age property.
// Loop thru 
//if death date exists = calculate and add age to property for each name in array
//else create variable for today's date and subtract birth date from today's date to get age.
// Sort array by age and return oldest value


// Do not edit below this line
module.exports = findTheOldest;
