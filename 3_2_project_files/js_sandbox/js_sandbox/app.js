// var card = document.querySelector('.card-action');
// var heading = document.querySelector('h5');

// card.addEventListener('mousemove', trackMove);

// function trackMove(e) {
//   console.log(`EVENT TYPE: ${e.type}`)
//   heading.textContent = `Xposition: ${e.offsetX} || Yposition: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 80`;
// }

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// let heading = document.querySelector('h5');
// // ClearInput
// taskInput.value = '';

// // form.addEventListener('submit', runEvent);
// taskInput.addEventListener('keydown', runEvent);

// function runEvent (e) {
//     console.log(`EVENT TYPE: ${e.type}`);
//     // console.log(taskInput.value);
//     console.log(e);
//     console.log(e.target.value);
//     heading.innerText = e.target.value;
//     // e.preventDefault();
// }

// document.querySelector('.card-title').addEventListener('click', function () {
//   console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function () {
//   console.log('Card Content');
// });

const delItem = document.querySelectorAll('.delete-item');
console.log(delItem);
delItem.addEventListener('click', function () { 
  console.log('delete item')
});
