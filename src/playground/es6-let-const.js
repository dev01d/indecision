var nameVar = 'Jason'
var nameVar = 'Behnke'
console.log(nameVar);

let namelet = 'jason'
namelet = 'dsf'
console.log(namelet);

const nameConst = 'frank'
// nameConst = 'joe'
console.log(nameConst);

// const and let  operate at block level so they cant be called in the global scope

const fullName = 'Jason Behnke'
let firstname

if (fullName) {
  firstname = fullName.split(' ')[0]
  console.log(firstname);
}
console.log(firstname);
