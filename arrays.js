const numberArray = [1, 44, 55, 65, 78, 89, 2, 3];
const stringArray = ["Gergo", "Angelina", "Total", "Love", "Everlong"];

/**
 * Map
 */
console.log("MAP");
const newMap = numberArray.map((element, index) => {
  console.log(element, index);
  return { number: element };
});
console.log("newMap", newMap);
console.log("FOREACH");
/**
 * Foreach
 */
const myLis = [];
numberArray.forEach(element => {
  myLis.push({ number: element });
});
console.log("LIS", myLis);
// numberArray.forEach((element, index) => {
//   console.log(element, index);
// });

// MAKE ["awesome Gergo", "awesome Angelina", "awesome Total", "awesome Love"]
//TODO find more exercesis for my honey

/**
 * Find
 */
console.log("FIND----------");
const found = stringArray.find((element, index) => {
  console.log(element);
  return element.length < 5;
});

console.log("FOUND", found);
//TODO exercisse

/**
 * Filter
 */
console.log("FILTER--------");
const longNames = stringArray.filter(element => {
  return element.length > 4;
});
console.log(longNames);

/**
 * every
 */

console.log("EVERY-------");
const isEvery = stringArray.every(element => {
  console.log(element);
  return element.length > 4;
});
console.log("ISEVERY", isEvery);
/**
 * Some
 */
console.log("SOME------");
const isSome = stringArray.some(element => {
  console.log(element);
  return element.length < 5;
});
console.log(isSome);

/**
 * Reduce
 */
const objArray = [
  { firstName: "James", secondName: "Bond", age: 34 },
  { firstName: "Hulk", secondName: "Incredible", age: 55 },
  { firstName: "Iron", secondName: "Man", age: 44 },
  { firstName: "Thor", secondName: "", age: 600 }
];
console.log("REDUCE------");
// 1. "JamesHulkIronThor"
const intialValue = "";
const myObj = objArray.reduce((previousValue, currentElement, index) => {
  console.log(
    "prev: ",
    previousValue,
    "current: ",
    currentElement,
    "index: ",
    index
  );
  return previousValue + currentElement.firstName;
}, intialValue);
// Return values of iterations
/*
1: "James"
2: "JamesHulk"
3: "JamesHulkIron"
4: "JamesHulkIronThor"
*/

//2. WE want eg obj = {"James": 34, "Hulk": 55 .... }
console.log("END", myObj);
const myObj2 = objArray.reduce((previousValue, currentElement, index) => {},
{});
console.log("END", myObj2);

// Return values of iterations
/*
1: {"James": 34}
2: {"James": 34, "Hulk": 55}
3: {"James": 34, "Hulk": 55, "Iron": 44}
4: {"James": 34, "Hulk": 55, "Iron": 44, "Thor": 600}
*/

const example = {
  name: "Dosztojevszki",
  age: 32
};
console.log(example.age);
console.log(example["age"]);
example["Angelina"] = 26;
example.gergo = 28;
console.log(example);

/**
 * PRomise
 */
/*
    - Whate is promise, 3 states
    - Consume promise
    - Chaining promise
    - Error handling
    - Async in promise
    - Async await
    - Promise.race? for timeout for example? 
    - Itearate over promises with await
 */
