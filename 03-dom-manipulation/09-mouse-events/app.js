// grab the clear tasks button
const clearBtn = document.querySelector('.clear-tasks');
// grab the main card
const mainCard = document.querySelector('.card');
// grab the "Tasks" heading
const taskHeading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Double-click
clearBtn.addEventListener('dblclick', runEvent);

// event handler
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
}

// Change the first list item to the mouse coordinates
const firstLi = document.querySelector('ul li:first-child');
mainCard.addEventListener('mouseover', trackMouse);
function trackMouse(e) {
  firstLi.innerText = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
console.log(firstLi);


/*
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
// card.addEventListener('mouseenter', runEvent);
// Mouseleave
// card.addEventListener('mouseleave', runEvent);
// Mouseover
// card.addEventListener('mouseover', runEvent);
// Mouseout
// card.addEventListener('mouseout', runEvent);
// Mousemove
card.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
*/