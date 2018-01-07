// use selector
// using an event listener for a click that uses an anonymous function
// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//   console.log('Hello world');
//   // e.preventDefault();
// });

// instead of using an anonymous function we can define one
// it now looks for the click and looks for the function onClick
document.querySelector('.clear-tasks').addEventListener('click',onClick);
function onClick(e){
  // console.log("Clicked");
  let val;
  val = e;

  // event target element
  val = e.target;
  // get target id
  val = e.target.id;
  // get all classes as DOMTokenList
  val = e.target.classList;
  // change text
  e.target.innerText = 'You clicked it!';
  

  console.log(val);
}

document.querySelector(".clear-tasks").addEventListener("mouseover", onClick);
function onClick(e) {
  // console.log("Clicked");
  let val;
  val = e;

  // event target element
  val = e.target;
  // get target id
  val = e.target.id;
  // get all classes as DOMTokenList
  val = e.target.classList;
  // change text
  e.target.innerText = "You are mousing over me!";

  console.log(val);
}

/*
// document.querySelector('.clear-tasks').addEventListener('click', function(e){
//   console.log('Hello World');

//   //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');

  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coords event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coords event relative to the element
  val = e.offsetY;
  
  val = e.offsetX;

  console.log(val);
}

*/