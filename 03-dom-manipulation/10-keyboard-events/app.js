// grab form
const form = document.querySelector('form');
const taskInput = document.getElementById('task');

// Clear input
taskInput.value = '';

form.addEventListener('submit', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  
  // getting value of input field
  let taskInputVal = taskInput.value;
  console.log("taskInputLog = " + taskInputVal);

  // preventing redirect to action: index.php in html on line 22
  e.preventDefault();
}

/*
const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keyup - only track when key is released up
// taskInput.addEventListener('keyup', runEvent);
// Keypress - a more general clicking of a key
// taskInput.addEventListener('keypress', runEvent);
// Focus - when click on an area and focus on it
// taskInput.addEventListener('focus', runEvent);
// Blur - opposite of focus - losing focus
// taskInput.addEventListener('blur', runEvent);
// Cut - ctrl+x
// taskInput.addEventListener('cut', runEvent);
// Paste - ctrl+v
// taskInput.addEventListener('paste', runEvent);
// Input - fires off on any kind of input event
// taskInput.addEventListener('input', runEvent);
// Change - used for select lists
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  //console.log(e.target.value);

  // heading.innerText = e.target.value;

  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
*/