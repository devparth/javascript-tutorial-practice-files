// all ui varibales
const taskForm = document.querySelector('#task-list');
const taskInput = document.querySelector('#task-input');
const taskFilter = document.querySelector('.filter-task');
const taskList = document.querySelector('.task-container');
const clearTasks = document.querySelector('.clear-tasks');

loadAllEvents();

// load all event function
function loadAllEvents() { 
    // Listen to the form submit event
    taskForm.addEventListener('submit', addTask);

    // Listen for delete event
    taskList.addEventListener('click', deleteTask);

    // Load tasks when DOM loada
    document.addEventListener('DOMContentLoaded', getTasks);

    // clearTasks
    clearTasks.addEventListener('click', clearAllTasks);

    // filter tasks
    taskFilter.addEventListener('keyup', filterTasks);
}

function getTasks() { 
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function (task) { 
        // create list element
        const li = document.createElement('li');
        // add class to list element
        li.className = 'task-item';

        // add Task content to LIst
        li.textContent = task;

        // Create delete link
        const deleteLink = document.createElement('a');

        // add href element to link 
        deleteLink.setAttribute('href', '#0');
        deleteLink.textContent = '×';
        deleteLink.className = 'delete-task badge alert float-right';

        // append delete link to task list
        li.appendChild(deleteLink);

        // add task to task list container
        taskList.appendChild(li);
    });
}


// add task
function addTask(e) { 
    if(taskInput.value === ''){
        alert('Please Enter Task!!!');
    }else{
        // create list element
        const li = document.createElement('li');
        // add class to list element
        li.className = 'task-item';

        // add Task content to LIst
        li.textContent = taskInput.value;

        // Create delete link
        const deleteLink = document.createElement('a');

        // add href element to link 
        deleteLink.setAttribute('href', '#0');
        deleteLink.textContent = '×';
        deleteLink.className = 'delete-task badge alert float-right';

        // append delete link to task list
        li.appendChild(deleteLink);

        // add task to task list container
        taskList.appendChild(li);

        // add to local storage
        addToLocalStorage(taskInput.value);        
    }

    // clear task input after adding task to task list
    taskInput.value = '';        

    e.preventDefault();
}

// Add task to local Storage
function addToLocalStorage(task) { 
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    // push new task to ls
    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// delete task
function deleteTask(e) { 
    let deleteTask = e.target;
    if(deleteTask.classList.contains('delete-task')){        
        deleteTask.parentElement.remove();
    }
    
    // delete Form ls
    deleteTaskFromLs(deleteTask.parentElement.firstChild.textContent);
}

// delete from ls
function deleteTaskFromLs(deleteTask){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    tasks.forEach(function (task, index) {
       if(task === deleteTask) {
           tasks.splice(index, 1);
           localStorage.setItem('tasks', JSON.stringify(tasks));
       }
    });
}

// Delete All Tasks
function clearAllTasks(e) {
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.firstChild.remove();
    }

    localStorage.clear();

    e.preventDefault();
}

// filter taksk

function filterTasks(e) {
    const filterVal = e.target.value.toLowerCase();
    document.querySelectorAll('.task-item').forEach(function (task) {
        if(task.firstChild.textContent.toLowerCase().indexOf(filterVal) !== -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }        
    });
}