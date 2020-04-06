const {
  firstExercise,
  secondExercise,
  thirdExercise,
  forthExercise
} = require("./arraysExercises");
const { expect } = require("chai");

describe("Test", () => {
  it("First Exercise", () => {
    expect(firstExercise()).to.deep.equal([
      { name: "Gergo", nameLength: 5 },
      { name: "Angelina", nameLength: 8 },
      { name: "Istvan", nameLength: 6 },
      { name: "Viktor", nameLength: 6 },
      { name: "Ib", nameLength: 2 },
      { name: "Soren", nameLength: 5 },
      { name: "Gudmundur", nameLength: 9 }
    ]);
  });
  it("Second Exercise", () => {
    expect(secondExercise()).to.deep.equal({
      first: "James",
      second: "Bond",
      age: 55
    });
  });
  it("Third Exercise", () => {
    expect(thirdExercise()).to.deep.equal([
      { first: "Ant", second: "Man", age: 44 },
      { first: "Iron", second: "Man", age: 55 },
      { first: "Super", second: "Man", age: 74 }
    ]);
  });
  it("Forth Exercise", () => {
    expect(forthExercise()).to.deep.equal({
      James: 34,
      Hulk: 55,
      Iron: 44,
      Thor: 600
    });
  });
});
