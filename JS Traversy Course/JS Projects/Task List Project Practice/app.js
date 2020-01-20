// UI Variables
const addTask = document.querySelector('#task-add'); //add task btn
const taskInput = document.querySelector('#task-input'); // add task input
const filter = document.querySelector('#filter-task'); //filter task input 
const taskList = document.querySelector('.list-group'); // task list ul
const clearTasks = document.querySelector('#clear-tasks'); //clear task btn

// load all the events
loadEvenListener();

function loadEvenListener() { 

    // Dom loca event 
    document.addEventListener('DOMContentLoaded', getTasks);

    // form submit event
    addTask.addEventListener('submit', addTaskEvent);

    // taskList event
    taskList.addEventListener('click', removeTask);
    
    // clearTasks Events
    clearTasks.addEventListener('click', clearAllTasks);

    // filter event
    filter.addEventListener('keyup', filterTasks);

}

// get tasks from local storage
function getTasks() { 
    let tasks;

    if(localStorage.getItem('tasks') === ''){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task) { 
         // create li 
         const taskItem = document.createElement('li');
         // add class to the element
         taskItem.className = 'list-group-item';
 
         // add task text in li
         taskItem.appendChild(document.createTextNode(task));
 
         // add close link
         const closeLink = document.createElement('a');
         closeLink.setAttribute('href', '#');
 
         // add class and append close icon
         closeLink.className = 'delete-task float-right';
         closeLink.innerHTML = '<i class="fa fa-times text-danger"></i>';         
         
         // append close link to task link
         taskItem.appendChild(closeLink);
 
         // append task to Task List
         taskList.appendChild(taskItem);
    });
}


// add task event
function addTaskEvent(e) {
    e.preventDefault();            

    if(taskInput.value === ''){
        alert('Please Add Task!!!')
    }else{
        // create li 
        const taskItem = document.createElement('li');
        // add class to the element
        taskItem.className = 'list-group-item';

        // add task text in li
        taskItem.appendChild(document.createTextNode(taskInput.value));

        // add close link
        const closeLink = document.createElement('a');
        closeLink.setAttribute('href', '#');

        // add class and append close icon
        closeLink.className = 'delete-task float-right';
        closeLink.innerHTML = '<i class="fa fa-times text-danger"></i>';
        
        // append close link to task link
        taskItem.appendChild(closeLink);

        // append task to Task List
        taskList.appendChild(taskItem);

        // store to local storage
        storeToLocalStorage(taskInput.value);

        // Clear Task Input after adding task
        taskInput.value = '';
    } 
}

// storeToLocalStorage
function storeToLocalStorage(task) { 
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    // push new task to loca storage
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-task')){
        if(confirm('Are you sure about that ??')){
            e.target.parentElement.parentElement.remove();

            // remove task item from local storage
            deleteFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
    
}

function deleteFromLocalStorage(taskItem){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function (task, index) { 
        if(task === taskItem.textContent){
            tasks.splice(index, 1);
        }
    });


    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear all tasks
function clearAllTasks() { 
    // taskList.innerHTML = '';
    
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }

    // Remove All tasks from local Storage
    localStorageRemoveTaska();
}

function localStorageRemoveTaska() {
    localStorage.clear();   
}


// filter tasks
function filterTasks(e) { 
    const filterText = e.target.value.toLowerCase();

    document.querySelectorAll('.list-group-item').forEach(function (task) { 
        const item = task.firstChild;

        if(item.textContent.toLowerCase().indexOf(filterText) != -1){    
            item.parentElement.style.display = 'block';
        }else{
            item.parentElement.style.display = 'none';
        }
    })
}