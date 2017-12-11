// data-types

 // primitive types
 // string
 const name = 'john';
 console.log(typeof name);
// number
const aNum = 45;
console.log(typeof aNum);
// boolean
const hasKids = true;
console.log(typeof hasKids);
// null
const car = null;
console.log(typeof car);
// undefined
let test = undefined;
console.log(typeof test);
// symbol
const sym = Symbol();
console.log(typeof sym);

/* 
  Reference Types
*/
const hobbies = ['bjj', 'biking'];
const address = {
  province: 'ON',
  city: 'Kingston'
}
const dateToday = new Date();

console.log(typeof hobbies);
console.log(typeof address);
console.log(typeof dateToday);

