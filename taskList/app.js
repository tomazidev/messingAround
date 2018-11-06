// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove Item
    taskList.addEventListener('click', removeTask);
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // FIlter tasks
    filter.addEventListener('keyup', filterTasks);

}

function addTask (e) {
    taskInput.value === '' ? alert('add task') : console.log('task added');

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create delete icon link
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add i con html
    link.innerHTML = '<i class="fa fa-remove"></i>'
    //Append link to li
    li.appendChild(link);
    //Append lu to ul
    taskList.appendChild(li);

    taskInput.value = '';
    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains ('delete-item')) {
        if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

function clearTasks (e) {
    // taskList.innerHTML = '';
    // Faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

function filterTasks (e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            debugger;
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}