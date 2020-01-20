// Object Litrals
// const parth = {
//     name: 'parth',
//     age: 23
// }
// console.log(parth);
// console.log(`I am ${parth.name.toUpperCase()}, and I am ${parth.age} old.`);


//----- Constroctor -----

// Person Constroctor
// function Employee(empName,empAge) {
//     this.name = empName;
//     this.age = empAge;
// }

// console.log(this);

// const emp1 = new Employee('Rahul', 22);
// const emp2 = new Employee('Dharmesh', 50);

// console.log(emp1);

//--> Person Constroctor With Calculat age Method inside Constructor
// function Customer(name, dob) {
//     this.cName = name;
//     this.cBirthdate = new Date(dob);
//     this.calcCustAge = function () {
//         const diff = Date.now() - this.cBirthdate.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const customer1 = new Customer('Parth', '04.29.1996');

// console.log(customer1.calcCustAge());


// ==> JS Built In Constructor

// --> String

// const name1 = 'parth';
// const name2 = new String('parth');

// console.log(typeof name1);
// console.log(typeof name2);
// console.log(name2);

// if (name2 == 'parth') {
//     console.log('Yes');
// } else {
//     console.log('no');
// }


// --> Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num1);
// console.log(num2);

// --> Boolean
// const bool1 = true;
// const bool2 = new Boolean(true)

// console.log(bool2);


// --> Function

// const getSum1 = function (x, y) {
//     return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return x + y');

// console.log(getSum1(10,10));
// console.log(getSum2(20,20));


//  --> Objects

// const john = {
//     name: 'John'
// }

// const john1 = new Object({name: 'John'});

// console.log(john);
// console.log(john1);

// --> Arrays
// const arr1 = [1,2,3];
// const arr2 = new Array([123, 236], [10,20]);

// console.log(arr1);
// console.log(arr2);


// --> Regular Expresssion

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re1);
// console.log(re2);


//----- Prototype -----

// //--> Person Constroctor With Calculat age Method inside Constructor
// function Customer(firstName,lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.cBirthdate = new Date(dob);
//     // this.calcCustAge = function () {
//     //     const diff = Date.now() - this.cBirthdate.getTime();
//     //     const ageDate = new Date(diff);
//     //     return Math.abs(ageDate.getUTCFullYear() - 1970);
//     // }
// }

// // calculate age prototype
// Customer.prototype.calcCustAge = function () {
//     const diff = Date.now() - this.cBirthdate.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // get full name prototype
// Customer.prototype.getFullname = function () {
//     return `${this.firstName} ${this.lastName}`
// }

// // get married prototype
// Customer.prototype.getMarried = function (newLastName) {
//     this.lastName = newLastName;
// }

// const cust1 = new Customer('Parth', 'Chaudhary', '04 29 1996');
// const cust2 = new Customer('Yash', 'Thakar', '7-1-1997');
// const cust3 = new Customer('Mary', 'Jhon', '7-1-1997');

// console.log(cust3);
// console.log(cust3.getFullname());

// cust3.getMarried('Smith');

// console.log(cust3.getFullname());

// console.log(cust3.hasOwnProperty('getMarried'));


//----- Prototypel Inheritence -----

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.welCome = function () {
//     return `Hello '${this.firstName} ${this.lastName} !!!'`
// }

// const person1 = new Person('Parth', 'Chaudhary');

// console.log(person1.welCome());


// Customer Constructor

// function Customer(firstName, lastName, phone, membership) {
//     Person.call(this, firstName, lastName);
//     this.phone = phone;
//     this.membership = membership;
// }

// Inherit Person Prootype method
// Customer.prototype = Object.create(Person.prototype);

// Customer.prototype return the Customer
//  Customer.prototype.constructor = Customer;


// const cust1 = new Customer('Rahul', 'Raja', 987654321, 'Standard');

// console.log(cust1);

// Customer.prototype.welCome = function (param) {
//     return `Hello '${this.firstName} ${this.lastName} Welcome to or Company'`
// }

// console.log(cust1.welCome());


//----- Object.Create -----

// const personProto = {
//     welcome: function () {
//         return `Hello There ${this.firstName} ${this.lastName}`
//     },
//     getMarried: function (newLastName) {
//         this.lastName = newLastName;
//     }
// }

// const radha = Object.create(personProto);

// radha.firstName = 'Radha';

// radha.lastName = 'Kuku';

// radha.age = 23;

// radha.getMarried('Rajesh');

// console.log(radha.welcome());

//----- ES CLasses-----

// Person Class
// class Person {
//     // Constructor
//     constructor(firstName, lastName, dob){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthDate = new Date(dob);
//     }

//     calcAge(){
//         const diff = Date.now() - this.birthDate.getTime();
//         const age = new Date(diff);

//         return Math.abs(age.getUTCFullYear() - 1970);
//     }

//     getMarried(newLastName) {
//         this.lastName = newLastName;
//     }

//     static addNumber(x,y) {
//         return x + y;
//     }
// }

// Create New Object
// const mary = new Person('Mary', 'Jhon', '10-10-1990');

// mary.getMarried('Smith');

// console.log(mary);

// console.log(`Merrys Age is ${mary.calcAge()}`);

// console.log(Person.addNumber(10,10));

//----- ES Sub Classes/Inheritance-----

// Pesron Class
// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greeting(){
//         return `Welcome onbord ${this.firstName} ${this.lastName}`;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Customer Class
// class Customer extends Person {
//     constructor(firstName, lastName, phone, membersip) {
//         super(firstName, lastName);

//         this.phone = phone;
//         this.membersip = membersip;
//     }

//     static getMembershiCost = function () {
//         return 500;
//     }
// }

// new Person
// const parth = new Person('Parth', 'Chaudhary');

// create new customer
// const john = new Customer('John', 'Timothy', 9978075757, 'Pro');

// console.log(john.greeting());

// console.log(Customer.getMembershiCost());

// console.log(john.getFullName());