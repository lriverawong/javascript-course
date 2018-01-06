
console.log(document.getElementById('task-title'));
const taskTitle = document.getElementById("task-title");

// extracting parts of the task-title 
console.log("task-title id = " + taskTitle.id);
console.log("task-title class name = " + taskTitle.className);

// styling
taskTitle.style.background = '#666666';
// taskTitle.style.display = 'none'; //hiding it
taskTitle.style.textAlign = 'center';

// change content
taskTitle.textContent = 'A Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">New Task List</span>';

// query selector -- newer and more powerful
// allows you to put any selector in here - works similar to jQuery
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
// if there are more than 1 - then returns the first one
console.log(document.querySelector('h5'));
document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'yellow';
document.querySelector('li:nth-child(4)').style.color = 'pink';
document.querySelector('li:last-child').textContent = "Hello";
// note: can't use nth-child(odd) or nth-child(even) for alternating colors as querySelector thus far only grabs the first entry


/*
// document.getElementById()

// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';
*/
