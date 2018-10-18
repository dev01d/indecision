//  argumnets object -- no longer bound with arrow func
// const add = (a,b) => {
//   console.log(arguments);
//   return a + b
// }
// add(4,5)

//  this keyword -- no longer bound

const user = {
  name: "Jason",
  states: ["AZ", "WA"],
  printLived() {
    return this.states.map(state => this.name + " has lived in " + state);
  }
};
console.log(user.printLived());

//  make obj and a method that maps over array mutiplying using arrow

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(number => this.multiplyBy * number);
    //  result --> return a new array where the numbers have been multiplied using map
  }
};
console.log(multiplier.multiply()); // [1, 2, 3] 2 [4, 5, 6]
