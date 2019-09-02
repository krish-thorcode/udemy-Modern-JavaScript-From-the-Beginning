// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

/* Load all event listeners */
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
}
// addTask function
function addTask(e) {

    if(taskInput.value === '') {
        alert('Add a task');
    }

    // if something is entered in the taskInput, add a list item by creating an li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    // console.log(li);
    // Append li to ul
    taskList.appendChild(li);
    // clear the input
    taskInput.value = '';

    e.preventDefault(); // prevents default form-submit behaviour (ie, do what is in action attribute of form)
}