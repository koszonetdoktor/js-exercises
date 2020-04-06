/***\
 * Exeercises
 *
 */

/**
 * 1. use the give array of names, and create an array of Objects, which
 * contains the name and the length of the names like:
 * ["Gergo", "Angelina"] -> [ {name: "Gergo", nameLength: 5}, {name: "Angelina", nameLength: 8} ]
 */
module.exports.firstExercise = function() {
  const names = [
    "Gergo",
    "Angelina",
    "Istvan",
    "Viktor",
    "Ib",
    "Soren",
    "Gudmundur"
  ];
  //TODO put the created array intro result and return it
  const result = [];

  return result;
};

/**
 * 2. Use the name array and find adn return the first person
 *  where the first name starts with "J"
 */

module.exports.secondExercise = function() {
  const persons = [
    { first: "Ant", second: "Man", age: 44 },
    { first: "Iron", second: "Man", age: 55 },
    { first: "Black", second: "Widow", age: 21 },
    { first: "James", second: "Bond", age: 55 },
    { first: "Super", second: "Man", age: 74 },
    { first: "Bat", second: "Girl", age: 25 },
    { first: "Jennis", second: "Joplin", age: 44 }
  ];
  const result = {};
  return result;
};

/**
 * 3. Return all the element where the second name is "Man"
 */
module.exports.thirdExercise = function() {
  const persons = [
    { first: "Ant", second: "Man", age: 44 },
    { first: "Iron", second: "Man", age: 55 },
    { first: "Black", second: "Widow", age: 21 },
    { first: "James", second: "Bond", age: 55 },
    { first: "Super", second: "Man", age: 74 },
    { first: "Bat", second: "Girl", age: 25 },
    { first: "Jennis", second: "Joplin", age: 44 }
  ];
  const result = [];
  return result;
};

/**
 * 4. Given an array of objects. Return an object where the key is the first name
 * and the value is the age
 * eg: 
 * [
 *  { firstName: "James", secondName: "Bond", age: 34 },
    { firstName: "Hulk", secondName: "Incredible", age: 55 }
 * ]
 Becomes-> 
    {
        James: 34,
        Hulk: 55
    }
 */

module.exports.forthExercise = function() {
  const persons = [
    { firstName: "James", secondName: "Bond", age: 34 },
    { firstName: "Hulk", secondName: "Incredible", age: 55 },
    { firstName: "Iron", secondName: "Man", age: 44 },
    { firstName: "Thor", secondName: "", age: 600 }
  ];
  const result = {};
  return result;
};
