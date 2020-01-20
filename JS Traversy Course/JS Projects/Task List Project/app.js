// Define UI vars
const form = document.getElementById("task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".list-group");
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-task');


// Load All Event Listener
loadEvenListener();

// Load All Event Listener
function loadEvenListener() { 
    // Dom Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add task event
    form.addEventListener('submit', addTask);

    // Remove task event
    taskList.addEventListener('click', removeTask);

    // clear task event
    clearBtn.addEventListener('click', clearTask);

    // Filter tasks event
    filter.addEventListener('keyup', filterTasks);
}

// get Tasks from local Storage
function getTasks(e) {
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) { 
        // Create li element
        const li = document.createElement('li');
        // add Class to element
        li.className = 'list-group-item';
        // create text node and append to the li
        li.appendChild(document.createTextNode(task));
        // Create New Link 
        const link = document.createElement('a');
        // add class name to link
        link.className = 'delete-item float-right text-danger';
        // add close icon html
        link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        // append the link to li
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);        
    });
}

// add task
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }else{
        // Create li element
        const li = document.createElement('li');
        // add Class to element
        li.className = 'list-group-item';
        // create text node and append to the li
        li.appendChild(document.createTextNode(taskInput.value));
        // Create New Link 
        const link = document.createElement('a');
        // add class name to link
        link.className = 'delete-item float-right text-danger';
        // add close icon html
        link.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
        // append the link to li
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);

        // Store in local storage
        storeTaskInLocalStorage(taskInput.value);        
    }

    // Clear input after task addded
    taskInput.value = '';

    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // pushing new task to localStorage
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) { 
    // console.log();
    
    if(e.target.parentElement.classList.contains('delete-item')){
        
        if(confirm('Are You Sure')){
            // Remove from DOM
            e.target.parentElement.parentElement.remove();

            // remove from LocalStorage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    e.preventDefault();
} 

// Remove From Local Storage
function removeTaskFromLocalStorage(taskItem){
    
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function (task, index) { 
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear all task 
function clearTask() { 
    // taskList.innerHTML = '';

    // another way to clear tasks
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // clear task
    clearTasksFromLocalStorage();
}

// clearTasksFromLocalStorage
function clearTasksFromLocalStorage() { 
    localStorage.clear();
}

// Filter tasks
function filterTasks(e) { 
    const text = e.target.value.toLowerCase();    
    
    document.querySelectorAll('.list-group-item').forEach(function (task) { 
        const item = task.firstChild.textContent;
        
        // Check the search term is in task or not

        if(item.toLowerCase().indexOf(text) != -1){
            // if is in task returns -1
            task.style.display = 'block';
        }else{
            task.style.display = 'none ';

        }
    });
}