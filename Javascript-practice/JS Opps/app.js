/* ----------------------------
 Constructor and This Keyword
---------------------------- */

// Object Literals
// const person = {
//     name: 'Parth',
//     age: 23
// }

// console.log(person);
// console.log(person.name);

//Constructors are used to create multiple instans of object

// Person constructor

// function Person() { 
//     this.name = 'Parth';
// }
// const parth = new Person();
// console.log(parth);

// function Person(name, dob) { 
//     this.name = name;
//     this.birthday = new Date(dob);
//     this.getCalcAge = function () { 
//         const diff = Date.now() - this.birthday.getTime();
//         const ageDate = new Date(diff);

//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// Global This is retuns the windown object
// console.log(this);
// this.alert(123);

// const parth = new Person('Parth', '4-29-1996');
// const Rahul = new Person('Rahul', '6-29-1995');

// console.log(parth.getCalcAge());
// console.log(Rahul.getCalcAge());



// Built In Constructors

// String

// const name1 = 'jeff';
// const name2 = new String('jeff');

// name2.age = 23;

// console.log(name2);
// console.log(typeof name1);
// console.log(typeof name2);


// if(name1 == 'jeff'){
//     console.log('YES');
    
// }else{
//     console.log('NO');
// }


// Number

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1);
// console.log(num2);
// console.log(typeof num2);

// Boolean

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool1);
// console.log(bool2);
// console.log(typeof bool2);


// Function
// const getSum1 = function (x,y) { 
//     return x + y;
// }

// const getSum2 = new Function('x','y', 'return x + y');

// console.log(getSum1(5,5));
// console.log(getSum2(4,4));


// Objects
// const person1 = {
//     name: 'Parth'
// };

// const person2 = new Object({
//     name: 'Parth'
// })

// console.log(person1);
// console.log(person2);


// Arrays
// const arr1 = [1,2,3,4,5,6,7,8,9];

// const arr2 = new Array(1,2,3,4,5,6,7,8,9,10);

// console.log(arr1);
// console.log(arr2);

// Regular Expression
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);



// Prototypes Explained
/*  
    --> Each Object in javascipt have prototype
    --> prototype is object it self
*/

// function Person(firstName,lastName, dob) { 
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//     // this.getCalcAge = function () { 
//     //     const diff = Date.now() - this.birthday.getTime();
//     //     const ageDate = new Date(diff);

//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// Calc Age
// Person.prototype.getCalcAge = function () { 
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);

//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// Get Full Name
// Person.prototype.getFullName = function () { 
//     return `${this.firstName} ${this.lastName}`;
// }

// get Married
// Person.prototype.getMarried = function (newLastName) { 
//     this.lastName = newLastName;
// }

// const parth = new Person('Parth', 'Chaudhary', '4-29-1996');
// const reachal = new Person('Reachal', 'John', '01-1-1975');


// console.log(reachal);

// console.log(parth.getCalcAge());

// console.log(parth.getFullName());

// console.log(reachal.getFullName());

// reachal.getMarried('Doe');

// console.log(reachal.getFullName());

// console.log(reachal.hasOwnProperty('firstName'));
// console.log(reachal.hasOwnProperty('getFullName'));



// Prototypal Inheritance

// Perosn COnstructor
// function Person(firstName, lastName) { 
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function () { 
//     return `Hello ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Parth', 'Chaudhary');

// console.log(person1.greeting());

// Customer Constructor 
// function Customer(firstName, lastName, phone, membership) { 
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// Inherit the personn prototype method
// Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer; 

// Create Customer 
// const customer1 = new Customer('Raju', 'Raghav', '97251-75125', 'Pro');

// Customer Greetings
// Customer.prototype.greeting = function () { 
//     return `Hello ${this.firstName} ${this.lastName}, Welcome to our Company.`;
// }

// console.log(customer1);
// console.log(customer1.greeting());


// 47 Using Object

// const personPrototype = {
//     greeting: function () { 
//         return `Hello ${this.firstName} ${this.lastName}`;
//     },
//     getMarried: function (newLastName) { 
//         this.lastName = newLastName;
//     }
// }

// const reachal = Object.create(personPrototype);

// reachal.firstName = 'Reachel';
// reachal.lastName = 'Toni';
// reachal.age = 30;

// console.log(reachal);
// console.log(reachal.greeting());
// reachal.getMarried('Rajesh');
// console.log(reachal.greeting());


// const parth = Object.create(personPrototype, {
//     firstName: {value:'Parth'},
//     lastName: {value:'Chaudhary'},
//     age: {value:30},
// });

// console.log(parth);

// console.log(parth.greeting());


// 48 ES6 Classes

// class Person {
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthDay = new Date(dob);
//     }

//     greeting(){
//         return `Hello ${this.firstName} ${this.lastName}`;
//     }

//     calcAge(){
//         const diff = Date.now() - this.birthDay.getTime();
//         const ageDate = new Date(diff);

//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     getMarried(newLastName){
//         this.lastName = newLastName;
//     }

    
    // Static Method
//     static addNumber(x, y){
//         return x + y;
//     }
// }

// const person1 = new Person('Reachel', 'Raghav', '4-29-1996');

// console.log(person1);

// console.log(person1.greeting());
// console.log(person1.calcAge());

// person1.getMarried('Raju')
// console.log(person1);

// Static Methoud can used by class name.
// console.log(Person.addNumber(1,2));

// 49 Sub Classes

// class Person{
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting(){
//         return `Hello ${this.firstName} ${this.lastName}!!!`;
//     }
// }

// class Customer extends Person {
//     constructor(firstName, lastName, phone, membership) {
//         super(firstName, lastName);
//         this.phone = phone;
//         this.membership = membership;
//     }

//     static getMemCost(){
//         return 500;
//     }
// }

// const parth = new Customer('Parth', 'Chaudhary', '9725171322', 'Pro');

// console.log(parth);
// --> calling greeeting method of Person in Customer(because we extened this Perons)
// console.log(parth.greeting());
// console.log(Customer.getMemCost());


// // Async & Await
// async function myFunc() {
//     return 'Hello...!';
// }

// // console.log(myFunc());

// myFunc()
// .then(res => console.log(res)); 

// Async & Await
// async function myFunc() {

//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const err = true;

//     if(!err){
//         const res = await promise; //wait untill promise is resolved
//         return res;
//     }else{
//         await Promise.reject(new Error('Somthing went wrong...'))
//     }    
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err))

// Async & Await with Fetch
async function getUsers() { 
    // await the response of the fetch call
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    // only proceed once its resloves
    const data = await response.json();

    // only proceed once second promise is resolved
    return data;
}

getUsers()
.then(users => console.log(users))