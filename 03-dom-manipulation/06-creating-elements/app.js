// Create element
const li = document.createElement('li');
// Add class to it
li.className = 'collection-item';
// Add id
li.id = 'new-item';
// add attribute
li.setAttribute('title', 'New Item');
//create text node and append
li.appendChild(document.createTextNode('A new list item'));

//create new link element
const link = document.createElement('a');
// add classes
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
// append link to li
li.appendChild(link);

// append li child to ul
document.querySelector('ul.collection').appendChild(li);


console.log(li);

/*
// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);
*/