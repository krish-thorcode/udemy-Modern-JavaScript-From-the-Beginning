// Define UI Variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    // Clear tasks event
    clearBtn.addEventListener('click', clearTasks);
    // Filter tasks
    filter.addEventListener('keyup', filterTasks);

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

// removeTask function
function removeTask(e) {

    if(e.target.parentElement.classList.contains('delete-item')) {

        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }

        // console.log(e.target);
    }
}

// clearTasks function
function clearTasks(e) {

    // method 1 - not recommended
    // taskList.innerHTML = ''

    // method 2 - remove children one by one from the list
    while(taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
}

// filterTasks function
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task) {
        console.log(task.firstChild);
        const item = task.firstChild.textContent
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });

    // console.log(text);
}