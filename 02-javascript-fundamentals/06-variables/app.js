// var, let, const
// using newer conventions "let" and "const"

// // var
// var name = "john doe";
// console.log(name);
// name = 'jake smith';
// console.log(name);

// init var
var greeting;
console.log(greeting);
greeting = 'hello there';
console.log(greeting);

// legal chars for variables: letters, numbers, _, $
// cannot start with a number

// // Multiline word vars
// var firstName = 'John';       // camel case
// var first_name = 'sarah';     // snake case
// var FirstName = 'Johnathan';  // pascal case

// // LET
// let name;
// name = 'john';
// console.log(name);
// name = 'jake';
// console.log(name);

// CONST
// Have to assign value to CONST
const name = "john";
console.log(name);
// name = "jake";
// console.log(name);

// values cannot be changed, although with objects,
// object attributes can be changed - just not have another with the same name
const person = {
  name: 'john',
  age: 60
}
console.log(person.name);
person.name = 'sarah';
console.log(person.name);

// the same holds true for arrays
const nums = [1,2,3,4,5];
console.log(nums);
nums.push(6);
console.log(nums);

