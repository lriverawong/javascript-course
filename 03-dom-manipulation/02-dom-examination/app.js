let val;
val = document;
val = document.all;
val = document.all[0]; //<html lang="en">
val = document.all.length; //43 -> # of elements in DOM

// getting parts of the page without selectors (not recommended)
val = document.forms; // all forms
val = document.forms[0];

// gives us collection of links
val = document.links;

// gives us collection of images
val = document.images;

// scripts
let scripts = document.scripts;
// forEach takes in a callback function
// the following gives error: TypeError: scripts.forEach is not a function
// This is because forEach for works arrays not collection
/*
scripts.forEach(function(script){
  console.log(script);
})
*/
// converting html collection to array
let scriptsArr = Array.from(scripts); 
scriptsArr.forEach(function(script){
  console.log(script.getAttribute('src'));
});

console.log(val);

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);