// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-task');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    //DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove Item
    taskList.addEventListener('click', removeTask);
    // Clear tasks
    clearBtn.addEventListener('click', clearTasks);
    // FIlter tasks
    filter.addEventListener('keyup', filterTasks);

}

function getTasks (task) {
    let tasks;
    // Check if tasks exist in localStorage
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // if task found get the task and assign it to tasks var
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function () {
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(task));
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
    });


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

    persistItemList(taskInput.value);

    taskInput.value = '';
    e.preventDefault();
}

function persistItemList (task) {
    let tasks;
    // Check if tasks exist in localStorage
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // if task found get the task and assign it to tasks var
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    //push task to tasks array
    tasks.push(task);
    // Set tasks to localStorge
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

function removeTask(e) {
    if (e.target.parentElement.classList.contains ('delete-item')) {
        if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();
            
            deleteTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function deleteTaskFromLocalStorage (taskItem) {
    let tasks;
    // Check if tasks exist in localStorage
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // if task found get the task and assign it to tasks var
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasks (e) {
    // taskList.innerHTML = '';
    // Faster 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

    clearTasksLS();
}

function clearTasksLS() {
    localStorage.clear();
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