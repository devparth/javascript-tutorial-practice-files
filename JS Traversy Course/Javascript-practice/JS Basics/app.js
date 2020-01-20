// Primitive Type

// // string
// const name = "Parth";
// console.log(typeof(name));

// // Number
// const age = 123456;
// console.log(typeof(age));

// // Boolean
// const hasBike = true;
// console.log(typeof(hasBike));

// // Null
// const car = null;
// console.log(typeof(car));

// // Undefiend
// let house;
// console.log(typeof(house));

// // Symbols
// const sym = Symbol();
// console.log(typeof(sym));


// Refrence Type

// Array
// const fruit = new Array('Banan', 'Strewberry', 'Greps', 'Orange', 'Mango');
// const fruit = ['Banan', 'Strewberry', 'Greps', 'Orange', 'Mango'];
// console.log(typeof fruit);

// Object Literal
// const address = {
//     city: 'Mehsana',
//     state: 'Gujarat',
//     country: 'india'
// }

// Dates
// const today = new Date();
// console.log(typeof today);


// // Type Conversion
// let val;

// // Number to string
// val = String(5);
// val = String(5+10);

// // Bool to string
// val = String(true);

// // Date to string
// val = String(new Date());

// // Array to string
// val = String([1,2,3,4]);

// // String to number
// val = Number('123');
// // Boolean to number
// val = Number(true);
// val = Number(false);

// // Null to number
// val = Number(null);

// // String to number(Not possible - err: NaN(Not a Number))
// val = Number("Parth");

// val = parseInt('100.00');
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed());


// // Numbers 7 Math Objects
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple Math with numbers
// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object

// val = Math.PI; //PI value 3.14...
// val = Math.E; //Eulers Rule
// val = Math.round(20.10); //to round the decimal
// val = Math.ceil(20.10); //To round upper
// val = Math.floor(20.10); //to round lower
// val = Math.sqrt(144); //to get the squre root fo the number
// val = Math.abs(-25); //to get the absolute verstion of the number
// val = Math.pow(10, 2); //To find the power of somthing
// val = Math.min(111,22,33,48,10,45,35,20,55); //To find the Min value
// val = Math.max(11,22,33,48,55,45,35,20,10); //To find the Min value
// val = Math.random(); //To get the random number
// val = Math.random() * 20 + 1; //To get the random number between 20
// val = Math.floor(Math.random() * 20 + 1); //To get the random number between 20 with round value

// console.log(val);


// // Strings & Concatination
// const firstName = 'Parth';
// const lastName = 'Chaudhary';
// let val = firstName + lastName;

// // Concatinate
// val = firstName + ' ' + lastName;

// // Append
// val = 'Darshan ';
// val += 'Dave';

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length property
// val = firstName.length;

// // Conacte Mathod
// val = firstName.concat(' ', lastName);

// // Change case
// val = (firstName+ ' ' + lastName).toUpperCase();
// val = (firstName+ ' ' + lastName).toLowerCase();

// // Stinrg like a array
// val = firstName[4];

// // font indexOf() char
// val = lastName.indexOf("C");
// val = lastName.lastIndexOf("C");

// // cahtAt() find the location of the pertiuclular char
// val = firstName.charAt(4);

// // find the last char of the string
// val = firstName.charAt(firstName.length - 1);

// // subString()
// val = firstName.substring(1,4);

// // slice()
// val = firstName.slice(1,4);
// val = firstName.slice(-3);

// // split()
// const str = 'My name is Parth Chaudhary';
// const tag = 'web design,web development,graphics desing,art';
// val = str.split(' ');
// val = tag.split(',');

// // replace()
// val = str.replace('Parth', 'Rahul');

// // includes() - if the serched thing is exist in the string it provides boolean value
// val = str.includes('Rahul');

// console.log(val);


// // Arrays & Array Mutaion

// const number = [1,2,3,4,5,6];
// const numbers = new Array(1,2,3,4,5,6);
// const fruits = ['apple', 'banana', 'orange', 'mango'];
// const mixedArray = [1, 'string', true, undefined, {a:1, b:2}, new Date()];

// let val;

// // check the length of the array
// val = number.length;

// // check whether its array or not
// val = Array.isArray(number);

// // Get the single value
// val = number[2];

// // Insert into array
// number[2] = 200

// // check the indexOf value
// val = number.indexOf(200);

// // MUTATING ARRAY
// // 1. Add to end of the array
//     number.push(8);

// // 2. Add to start of the array
//     number.unshift(10);

// // 3. Take off from the end fo the array
//     number.pop();

// // 3. Take off from the start fo the array
//     number.shift();

// // 3. Spice values from array
//     number.splice(1,3);

// // 3. Reverse the array
//     number.reverse();

// // Conctinating the array
// val = number.concat(numbers);

// // Sorting the Array
// val = number.sort();
// // 1. Sort array in acending
//     number.sort(function (x,y) { 
//         return x - y;
//      });
// // 2. Sort array in decending
//     number.sort(function (x,y) { 
//         return y - x;
//      });

// // Find in array
// function under50(num) { 
//     return num < 50;
// }

// val = number.find(under50);


// console.table(number);

// console.table(val);


// // Object Literals

// const person = {
//     firstName: 'Parth',
//     lastName: 'Chaudhary',
//     age: 23,
//     email: 'parth@gmail.com',
//     hobbies: ['msuic', 'sports', 'reading'],
//     address: {
//         city: 'Mehsana',
//         state: 'Gujarat',
//         country: 'India'
//     },
//     getBirthYear: function () { 
//         return 2019 - this.age;
//     }
// }

// let val = person;

// val = person.firstName;
// val = person.address.city;
// val = person.age;
// val = person.hobbies[1];
// val = person.getBirthYear();

// console.log(val);

// // Array of object
// const pople = [
//     {name: 'Parth', age: 24},
//     {name: 'Darshan', age: 33},
//     {name: 'Raju', age: 45},
// ];

// for(let i=0; i<pople.length; i++){
//     console.log(pople[i].name);    
// }

// // Templet Literals
// const name = 'Parth Chaudhary';
// const age = 23;
// const job = 'Front-end Developer';
// const county = 'Indai';
// let html;


// // Without Templet Literals
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>Country: ' + county + '</li></ul>';

// html = '<ul>' +
//        '<li> Name: ' + name + '</li>' +
//        '<li> Age: ' + age + '</li>' +
//        '<li> Job: ' + job + '</li>' +
//        '<li> Country: ' + county + '</li>' +
//        '<ul>';

// // With Templet String
// function hello() { 
//     return 'Hello...!';
//  }

// html = `
//         <ul>
//             <li>Name: ${name}</li>
//             <li>Age: ${age}</li>
//             <li>Job: ${job}</li>
//             <li>Country: ${county}</li>
//             <li>${20+10}</li>
//             <li>${hello()}</li>
//             <li>${age > 20 ? 'over20' : 'under 20'}</li>
//         </ul>

// `;

// document.body.innerHTML = html;


// // Dates and Time
// let val;

// const today = new Date();
// let birthDate = new Date('4-29-1996 11:25');

// birthDate = new Date('April 29 1996');
// val = birthDate;
// val = today;

// val = today.getMonth(); //Month are array based, means it starts from 0 to 11
// val = today.getDay();
// val = today.getDate();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // It give Time Stemp

// birthDate.setMonth(4); 
// birthDate.setDate(12);
// birthDate.setFullYear(1998);
// birthDate.setHours(12);
// birthDate.setMinutes(30);
// birthDate.setSeconds(59);


// console.log(val);
// console.log(birthDate);



// If Statements & Comparison Operators

// const id = 100;

// // Equal or Not Equal
// if(id == 100){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }

// if(id == 101){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }

// // Not Equal or Equal
// if(id != 100){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }

// if(id != 101){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }

// // Triple Equal
// if(id === 100){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }

// if(id !== 101){
//     console.log('Correct');
// }else{
//     console.log('In Correct');
// }


// Check if the ID is defiend or undefiend

// Test if Undefiend
//  if(typeof id !== 'undefined'){
//      console.log(`The ID is ${id}`);     
//  }else{
//      console.log('No id');   
//  }

// Else If
// const color = 'red';
// if(color === 'red'){
//     console.log('Color is Red');
// }else if(color === 'yellow'){
//     console.log('Color is Yellow');
// }else{
//     console.log('Color is not Red and Yellow');
// }

// Less or Grater
// const name = 'steve';
// const age = 15;

// AND operator (&&)
// if(age > 20 && age < 15){
//     console.log(`Right`);
// }else{
//     console.log(`Wrong`);
// }

// OR operator (||)
// if(age > 14 || age < 15){
//     console.log(`Right`);
// }else{
//     console.log(`Wrong`);
// }

// Ternary Operator
// const id = 100;
// console.log(id === 100 ? 'RIGHT' : 'WRONG');

// -> In javascript we can write if statement without { brackets }.


// // SWITCH CASE
// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('Color is Red');
//         break;
//     case 'blue':
//         console.log('Color is Blue');
//         break;
//     default:
//         console.log('Color is not Red and Blue.');
//         break;                        
// }

// // Find the current day using SWITCH
// let day;

// switch(new Date().getDay()){
//     case 0: 
//         day = 'Sunday';
//         break;
//     case 1: 
//         day = 'Monday';
//         break;
//     case 2: 
//         day = 'Tuesday';
//         break;
//     case 3: 
//         day = 'Wednesday';
//         break;
//     case 4: 
//         day = 'Thursday';
//         break;
//     case 5: 
//         day = 'Friday';
//         break;
//     case 6: 
//         day = 'Saturday';
//         break;    
// }

// console.log(`Today is ${day}. `);


// Function Declaration and Expression

// FUNCTION DECLARATION
// ES way to check and set the value in parameter if value is not set
// function greet(firstName, lastName) {
//     if(typeof firstName === 'undefined'){
//         firstName = 'Parth'
//     }
//     if(typeof lastName === 'undefined'){
//         lastName = 'Chaudhary'
//     }
    
//     return `Hello ${firstName} ${lastName}`;
// }

// ES6 way to set the value in parapeter
// function greet(firstName = 'Parth', lastName = 'Chaudhary') {    
//     return `Hello ${firstName} ${lastName}`;
// }
// console.log(greet());


// FUNCTION EXPRESSION
// const sqrt = function (x = 8) { 
//     return x*x;
// }

// console.log(sqrt());


// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSION - IFFIEs
// (function() { 
//     console.log('Hello Run..');
// })();

// IFFIEs with parameter
// (function(name) { 
//     console.log('Hello ' + name);
// })('Parth');

// PROPERTY METHODS
// const todo = {
//     add: function () { 
//         console.log('Add todo..');
//     },
//     edit: function (id) { 
//         console.log(`Edited id is: ${id}`);        
//     },    
// }

// todo.delete = function () { console.log('Delete Todo..');}

// todo.add();
// todo.edit(22);
// todo.delete();



// LOOPS AND ITERATION

// FOR LOOP
// for(let i = 0; i <= 10; i++){
//     if(i === 5){
//         console.log(`${i} is my lucky number`);
//         continue;
//     }

//     if(i === 8){        
//         console.log(`Stop loop at number ${i}`);
//         break;
//     }
    
//     console.log(i);
// }


// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log(`Number: ${i}`);
//     i++;
// }

// DO WHILE

// let i = 100;

// do{
//     console.log(`Number ${i}`);
//     i++;
// }while(i < 10);


// FOR EACH

// const fruit = ['apple', 'banana', 'mango', 'orange', 'grapes', 'strewberry'];

// Loop through array using FOR loop
// for(let i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);    
// }

// Loop through array using FOR EACH loop
// forEach(function (1 , 2 ,3) { 
//     1 -> Iterator (array, etc..)
//     2 -> Index 
//     3 -> Array
// });

// fruit.forEach(function (fruit, index, array) { 
//     console.log(`${index} : ${fruit}`);
//     console.log(array);
// });

// MAP

// const user = [
//     {id: 1, name: 'Parth'},
//     {id: 2, name: 'Rahul'},
//     {id: 3, name: 'Harshil'},
//     {id: 4, name: 'Yash'},
//     {id: 5, name: 'Rushabh'},
//     {id: 6, name: 'ketul'},
//     {id: 7, name: 'Tej'}
// ];

// const ids = user.map(function (user) { 
//     return user.id;
// });

// console.table(ids);


// FOR IN LOOP - used for objects

// const user = {
//     firstName: 'Parth',
//     lastName: 'Chaudhary',
//     age: 23
// };

// for(let x in user){
//     console.log(x); // This prints the key of the objects

//     console.log(`${x} : ${user[x]}`);    // This prints the key and vallue of the objects
// }


// WINDOW METHOD / OBJECTS / properties

// Alert
// alert('Hello');

// Prompt
// const input = prompt();
// console.log(input);

// Confirm
// if(confirm('Are you sure ?')){
//     console.log('Yes');    
// }else{
//     console.log("No");
    
// }

// let val;

// OUTER HEIGHT AND WIDTH
// val = window.outerHeight;
// val = window.outerWidth;

// INNER HEIGHT AND WIDTH
// val = window.innerHeight;
// val = window.innerWidth;

// SCROLL POINTS
// val = window.scrollY;
// val = window.scrollX;

// LOCATION OBJECT
// val = window.location;
// val = window.location.host;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// REDIRECT & RELOAD
// window.location.href = 'https://devparth.com'; //Redirect
// window.location.reload(); //Reload

// HISTORY OBJECT
// window.history.go(-1);
// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// val = window.navigator.languages;
// console.log(val);


// Block Scope With let and const
// -> 'var' have Function scope
// -> 'let' and 'const' have Block Level Scope


// What is DOM(Document Object Model)

// PROPERTYS OF DOCUMENT OBJECT
// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;


// val = document.forms;
// val = document.forms.length;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;


// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[0];
// val = document.scripts[0].src;
// val = document.scripts[0].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//     // console.log(script.getAttribute('src'));
//     console.log(script.src);
// });


// console.log(val);


// DOM Selectors For Single Elements

//1. Single Elements (document.getElementById())

//select the element using id
// let val  = document.getElementById('task-title');

// // get thing from selected items
// console.log(val);
// console.log(val.id);
// console.log(val.className);

// // change styling
// val.style.color = '#f2f2f2';
// val.style.backgroundColor = '#020202';
// val.style.padding = '5px 10px';
// val.style.borderRadius = '2px';
// // val.style.textTransform = 'uppercase';

// // change content
// val.innerText = 'Main Title';
// val.textContent = 'My Task';
// val.innerHTML = '<small>Sub Heading</small>';


// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));


// document.querySelector('li').style.color = 'red';
// // nested
// document.querySelector('ul li').style.color = 'blue';
// // using pshudo class
// document.querySelector('ul li:last-child').style.color = '#f2f';

// document.querySelector('ul li:nth-child(3)').style.color = '#f2f';

// document.querySelector('ul li:nth-child(odd)').style.backgroundColor = 'gray';
// document.querySelector('ul li:nth-child(even)').style.backgroundColor = '#f2f2f2';


// DOM Selectors For Multiple Elements

// const item = document.getElementsByClassName('collection-item');
// item[2].style.color = 'red';
// item[3].textContent = 'Hell.. O..';
// console.log(item);

// to select multiple item in nested structure
// const listItem = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItem);

// getElementByTagName()
// let lis = document.getElementsByTagName('li');
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hell.. O..';
// console.log(lis);

// convert HTML collection to array
// lis = Array.from(lis);
 
// for(let i = 0; i < lis.length ; i++){
//     lis[i].textContent = `Item : ${i}`;    
//     console.log(lis[i].className);
// }

// lis.forEach(function (item, index) {
//     console.log(item.className);
//     let i = 1;
//     item.textContent = `Item : ${index}`;
// });


// Query Selector All
// const item = document.querySelectorAll('ul li.collection-item');

// item.forEach(function (li, index) { 
//     console.log(li.className + " "  + index);    
//     li.style.color = 'red';
// });

// const liOdd = document.querySelectorAll('ul li.collection-item:nth-child(odd)');
// const liEven = document.querySelectorAll('ul li.collection-item:nth-child(even)');

// Using forEach

// liOdd.forEach(function (li, index) { 
//     li.style.color = 'green';
// });

// liEven.forEach(function (li, index) { 
//     li.style.color = 'red';
// });


// Using for loop
// for(let i = 0; i < item.length; i++) { 
//     liOdd[i].style.backgroundColor = 'green';
//     liEven[i].style.backgroundColor = 'red';
// }

// liEven.forEach(function (li, index) { 
//     li.style.color = 'red';
// });


// Traversing The DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem =  document.querySelector('li.collection-item');

// val = list;
// val = listItem;

// Get the child node
// val = list.childNodes;

// check the node type
// val = list.childNodes[0].nodeType;
// val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute(depricated)
// 3 - Text Node
// 8 - Comment
// 9 - Document it self
// 10 - Doctyle

// Get childer element node
// val = list.children;
// val = list.children[0].style.color = 'red';

// get childer of the childern
// val = list.children[2].children;
// val = list.children[2].children[0];
// list.children[2].children[0].id = 'close-btn'
// val = list.children[2].children[0].textContent = 'close';
// val = list.children[2].children[0];

// get first child
// val = list.firstChild;
// val = list.firstElementChild;

// get last child
// val = list.lastChild;
// val = list.lastElementChild;

// get child element count
// val = list.childElementCount;


// Get Parent elements/node
// val = listItem.parentNode;
// val = listItem.parentElement;

// get parent node of the parent
// val = listItem.parentElement.parentNode;
// val = listItem.parentElement.parentElement;

// Get next Siblings
// val = listItem.nextSibling;
// val = listItem.nextElementSibling;

// Get next of next Siblings
// val = listItem.nextSibling.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;


// Get prev Siblings
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// Get prev of next Siblings
// val = listItem.nextSibling.previousSibling;
// val = listItem.nextElementSibling.previousElementSibling;

// console.log(val);


// Creating Elements and Append elemet to html

// create element
// const li = document.createElement('li');

// Add CLASS and ID to element
// li.className = 'collection-item'
// li.id = 'list-item'

// Add attribute to element
// li.setAttribute('title', 'list-item');

// Add textNode and append
// li.appendChild(document.createTextNode('Hello World...'));

// Create new link element
// const link = document.createElement('a');

// add classes and attribute
// link.className = 'delete-item secondary-content';
// link.setAttribute('href', '#');

// Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// Append link to li 
// li.appendChild(link);

// add icon to link (to add whole html)
// link.innerHTML = '<i class="fa fa-remove"></i>';

// console.log(li);
// console.log(link);



//  Removing  Replacing Elements

// -> Replace 

// Create new element
// const newHeading = document.createElement('h2');

// add id
// newHeading.id = 'task-title';
// add text
// newHeading.appendChild(document.createTextNode('Task Title'));

// Get the old heading
// const oldHeading = document.getElementById('task-title');
// Get the parent of the old element
// const classAction = oldHeading.parentNode;

// replace element
// classAction.replaceChild(newHeading, oldHeading);

// Remove Element from the DOM

// -> Remove

// const li = document.querySelectorAll('li');
// const ul = document.querySelector('ul');

// li[0].remove();
// ul.removeChild(li[2]);

// Classes and Attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];
// let val;

// classes 
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// add and remove classes
// link.classList.add('test');
// link.classList.remove('test');

// attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'https://google.com');
// val = link.hasAttribute('href'); //true
// val = link.hasAttribute('title'); //false
// val = link.setAttribute('title','google');
// val = link.removeAttribute('title');
// val = link; 
// console.log(val);


// Event Listeners The Event Object

// let clearBtn =  document.querySelector('.clear-tasks');

// clearBtn.addEventListener('click', function (e) { 
    // console.log('clicked');    
    // console.log(e);
// })

// clearBtn.addEventListener('click', btnClick);

// function btnClick(e) {
//     let val;

//     // Event target element
//     val = e;
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     // Event type
//     val = e.type;

//     // Time Stemp
//     val = e.timeStamp;

//     // Co-ordinates event relative to the windows
//     val = e.clientY;
//     val = e.clientX;

//     // Co-ordinates event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;


//     e.target.innerText = 'hello';

//     console.log(val);
    
// }


// Mouse Events

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('#task-title');

// Click
// clearBtn.addEventListener('click', runEvent);

// Double Click
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse Up
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse Enter
// card.addEventListener('mouseenter', runEvent);
// Mouse Leave
// card.addEventListener('mouseleave', runEvent);

// Mouse Over
// card.addEventListener('mouseover', runEvent);
// Mouse Out
// card.addEventListener('mouseout', runEvent);

// Mouse Move
// card.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log(`Event Type: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

//     document.body.style.backgroundColor = `rgba(${e.offsetX}, ${e.offsetY}, 40)`;
// }



// Keyboard Input Events

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.getElementById('task-title');

// Clear INput
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Key Down
// taskInput.addEventListener('keydown', runEvent);

// Key Up
// taskInput.addEventListener('keyup', runEvent);

// Key Press
// taskInput.addEventListener('keypress', runEvent);

// Focus
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

// cut
// taskInput.addEventListener('cut', runEvent);

// paste
// taskInput.addEventListener('paste', runEvent);

// input
// taskInput.addEventListener('input', runEvent);


// const select = document.querySelector('select');

// change (for select)
// select.addEventListener('change', runEvent);

// function runEvent(e) {
//     console.log(`Event Type: ${e.type}`);
//     console.log(e.target.value);
//     heading.innerText = e.target.value;
    
//     // Get input value
//     console.log(taskInput.value);    
//     e.preventDefault();
// }


// Event Bubbling  Delegation

// -> Event Bubbling
// document.querySelector('.card-title').addEventListener('click', function () { 
//     console.log('card-title');
// });

// document.querySelector('.card-content').addEventListener('click', function () { 
//     console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function () { 
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function () { 
//     console.log('col');
// });

// -> Event Delegation
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e) { 
//     // console.log(e.type);
//     console.log();

//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete-item');
//         e.target.parentElement.parentElement.remove();
//     }
// }


// Local and Session storage

// Set local storage item
// localStorage.setItem('name', 'Parth');
// localStorage.setItem('age', '24');

// Set local storage item
// sessionStorage.setItem('name', 'rahul');

// Remove from local storage
// localStorage.removeItem('name');

// Get Form storage
// const person = {
//     name : localStorage.getItem('name'),
//     age : localStorage.getItem('age')
// }

// clear from sorage
// localStorage.clear();

// console.log(`I am ${person.name}, my age is ${person.age}`);

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // add value from input to local storage
    const task = document.getElementById('task').value;    
    // localStorage.setItem(`Task Name ${i}: ` , task);   
    // alert('Task Saved');
    // console.log(task);

    // add multiple values
    let tasks;

    if(localStorage.getItem('tasks') === null) {
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    document.getElementById('task').value = "";
});


const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function (task) {
    console.log(task);    
});

