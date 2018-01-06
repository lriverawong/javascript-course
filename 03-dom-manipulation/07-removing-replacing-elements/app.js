/*
REPLACE ELEMENT
The h5 title to a h2 title
*/
// create element
const newHeading = document.createElement('h2');
// add id
newHeading.id = 'task-title';
// new text-node
newHeading.appendChild(document.createTextNode('New Task List'));
// get old heading
const oldHeading = document.getElementById('task-title');
// parent
const headingParent = document.querySelector('.card-action');
// replace it
headingParent.replaceChild(newHeading, oldHeading);

console.log(newHeading);

/*
Remove element
*/
// get all li's
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// remove list item - the first li
lis[0].remove();
// remove child element - choosen li using lis, from the ul in list
list.removeChild(lis[3]);

/*
Classes
*/
// get the first li
const firstLi = document.querySelector('li:first-child');
console.log(firstLi);
// get the link inside the first li - the icon
const link = firstLi.children[0];
console.log(link);
let val;
// returns DOMTokenList of all classes
val = link.classList;
secondClass = val[1];
console.log(secondClass);
// remove secondary-content class
link.classList.remove(secondClass);
console.log(val);

/*
Attributes
*/
val = link.getAttribute('href');
// makes the first x button - redirect to google
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // outputs: true
link.setAttribute('title', 'Google');
link.removeAttribute('title');
val = link;
console.log(val);

/*
// REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title');
val = link;

console.log(val);

*/