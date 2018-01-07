// Making the delete icon click to actually delete the list item
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    // e.target = the <i></i> tag
    // .parentElement = <a></a> tag
    // .parentElement = <li class="collection-item"></li>
    e.target.parentElement.parentElement.remove();
  }
}


/*
// EVENT BUBBLING - from child up to parent

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION - from parent down to child

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}
*/