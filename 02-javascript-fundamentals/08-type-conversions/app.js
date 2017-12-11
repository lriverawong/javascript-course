// type conversions

let val;

// number to string
val = 5;
val = String(val);
val = String(4+4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to stirng
val = String([1,2,3,4])
// toString() method
val = (5).toString();
val = (true).toString();

// string to number
// val = '5'
// val = Number(val);
val = Number('5');
val = Number(true);
val = Number(false);
val = Number('hello');

val = parseInt('100'); // number -> 100
val = parseInt('100.30'); // number -> 100
val = parseFloat('100.30'); // number -> 100.30

// console output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2))

/*
  Type coersion
*/
// const val1 = 5; // results in (number) 11
const val1 = String(5); // results in (string) 56
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);
