// const sayHello = function () { 
//     console.log('Hello!');
// }
// sayHello();

// ES6 arrow Function
// const sayHello = () => { 
//     console.log('Hello!');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello!');

// One line return
// const sayHello = () => 'Hello!';

// Return Object
// const sayHello = () => ({ msg: 'Hello' });

// Single Para not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multiple Para need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// console.log(sayHello('Parth', 'Chaudhary'););
// sayHello('Parth', 'Chaudhary');

// Array of users
const users = ['Nathan', 'Jhon', 'William'];

// Map without arrow
// const nameLength = users.map(function(name){
//     return name.length;
// });

// Map with arrow(Shorter)
// const nameLength = users.map((name) => {
//     return name.length;
// });

// Map with arrow(Shortest)
const nameLength = users.map(name => name.length);

console.log(nameLength);
