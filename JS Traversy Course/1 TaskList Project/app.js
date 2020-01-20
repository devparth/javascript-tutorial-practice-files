// Define UI variables
const form = document.querySelector("#task-form");
const taskList  = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventLiteners();

// Load all event listeners
function loadEventLiteners() { 
    // DOM Load Event
    document.addEventListener('DOMContentLoaded', getTasks);
    // add  task event 
    form.addEventListener('submit', addTask);

    // remove task event 
    taskList.addEventListener('click', removeTask);

    // clear all the tasks event
    clearBtn.addEventListener('click', clearTasks);

    // Filter Task event
    filter.addEventListener('keyup', filterTasks);
}

// Get Existing task from Local Storage
function getTasks() { 
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) {
        // clearte li elemet
        const li = document.createElement('li');
        // add class to li
        li.className = 'collection-item'; 
        // carete text node and appdent to the li
        li.appendChild(document.createTextNode(task));
        // create new link element
        const link = document.createElement('a');
        // add class to link 
        link.className = 'delete-item secondary-content';
        // add close icon html
        link.innerHTML = "<i class='fa fa-remove'></i>";
        // append link to li 
        li.appendChild(link);

        // append li to the UL
        taskList.appendChild(li);
    });
}

// Add Task Function
function addTask(e) { 
    if(taskInput.value === '' ){ 
        alert('Add a task');
    }

    // clearte li elemet
    const li = document.createElement('li');
    // add class to li
    li.className = 'collection-item'; 
    // carete text node and appdent to the li
    li.appendChild(document.createTextNode(taskInput.value));
    // create new link element
    const link = document.createElement('a');
    // add class to link 
    link.className = 'delete-item secondary-content';
    // add close icon html
    link.innerHTML = "<i class='fa fa-remove'></i>";
    // append link to li
    li.appendChild(link);

    // append li to the UL
    taskList.appendChild(li);

    // store in local storage
    storeTaskInLocalStorage(taskInput.value);
    
    // clear the task after adding task
    taskInput.value = '';

    e.preventDefault();
}

// Strore Task To Local Storage
function storeTaskInLocalStorage(task){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// remove task from list
function removeTask(e){

    if(e.target.parentElement.classList.contains('delete-item') ){
        if(confirm('Are You Sure ?')){
            e.target.parentElement.parentElement.remove();

            // remove from local storage
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// remove task from local Storage
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }
    else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) { 
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear all the tasks
function clearTasks(e) {
    if(confirm("Clear all the tasks, Are you sure ?")){
        // using inner thml
            // taskList.innerHTML = '';
        
        // using while
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        
        clearTasksFromLocalStorage();
    }
}

// clear all tasks from loacl storage
function clearTasksFromLocalStorage() { 
    localStorage.clear();
 }


// Filter Tasks
function filterTasks(e) { 
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function (task) { 
        const item = task.firstChild.textContent;
        
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    });    
}
