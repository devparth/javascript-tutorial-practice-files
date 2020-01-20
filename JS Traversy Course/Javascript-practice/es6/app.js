// // Iterator Examplte
// function nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < names.length ?
//             { value: names[nextIndex++], done: false } :
//             { done: true}
//         }
//     }
// }

// // create arr of names
// const namesArr = ['Parth', 'Darshan', 'Vishal'];

// // initialize the Iterator
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());


// Generator Example
// function* sayNames() {
//     yield 'Parth';
//     yield 'Darshan';
//     yield 'Vishal';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());


// ID Generator

// function* createIds() {
//     let index = 0;

//     while(true){
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);


// Symbols
/*
--> Every symbol is very Unique
*/

// Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym2);

// Unique Object Key

// const key1 = Symbol();
// const key2 = Symbol('key2');

// const myObj = {};

// myObj[key1] = 'prop1';
// myObj[key2] = 'prop2';
// myObj.key3 = 'prop3';
// myObj.key4 = 'prop4';


// // console.log(myObj[key1]);
// // console.log(myObj[key2]);

// // sybmols are not enumerable in for...in
// for(let i in myObj){
//     // console.log(`${i}: ${myObj[i]}`);
// }

// // Symbols are ignored in JSON.Stringify()
// console.log(JSON.stringify({[Symbol('sy1')]: 'prop'}));


/*
    Destructuring
*/

// Destructuring Assignment

//--> with array
// let a,b;
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];

// console.log(rest);

//--> with object
// ({a,b} = {a: 100, b: 200, c: 300, d: 400});
// ({a,b, ...rest} = {a: 100, b: 200, c: 300, d: 400});

// console.log(a, b);
// console.log(rest);

// Array Destructuring
// const pople = ['Parth', 'Darshan', 'Vishal'];

// const [person1, person2, person3] = pople;

// console.log(person1, person2, person3);

// Parse Array resturned from function
// function getPople() {
//     return ['Parth', 'Darshan', 'Vishal'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getPople();

// console.log(person1, person2, person3);

// Object Destructuring
// const person = {
//     name: 'Parth',
//     age: 23,
//     gender: 'male',
//     country: 'INdia',
//     sayHello: function () {
//         return 'Hello';
//     }
// }


// Old ES5
// const name = person.name,
//       age = person.age,
//       country = person.country;

// New ES6 Destructuring
// const {
//     name,
//     age,
//     country,
//     sayHello
// } = person;

// console.log(name, age, country, sayHello());


// Maps
//--> MAPS are "key -> value" pairs - can use ANY type as key or value

const map1 = new Map();

// set kets
const key1 = 'Some String',
      key2 = {},
      key3 = function () {};

//set map values
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

// get values by key
// console.log(map1.get(key1));
// console.log(map1.get(key2));
// console.log(map1.get(key3));

// map size
// console.log(map1.size);

// Iterting through map

// -> Loop using for-of
// for(let [key, value] of map1){
//     console.log(`${key} = ${value}`);
// }

// Iterate keys only
// for(let key of map1.keys()){
//     console.log(key);
// }

// Iterate values only
// for(let value of map1.values()){
//     console.log(value   );
// }

// Loop with forEach
// map1.forEach(function (value, key){
//     console.log(`${key} = ${value}`);
// });

// Convert To Array

//1. Create an array of key value pair
// const keyValArr = Array.from(map1);
// console.log(keyValArr);

// 2. create an array of values
// const valArr = Array.from(map1.values());
// console.log(valArr);

// 2. create an array of keys
// const keyArr = Array.from(map1.keys());
// console.log(keyArr);

// ES6 SETS
// -> List or Set of unique value

const set1 = new Set();

// add values to set1
set1.add(100);
set1.add('A String');
set1.add({name: 'John', age: 23});
set1.add(true);

// console.log(set1);

// get Size
// console.log(set1.size);

// check for value
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name: 'John', age: 23}));

// Delete from the set
// set1.delete(100);

// console.log(set1);

// Iterate through set

//-> For of
// for(let item of set1.entries()){
//     console.log(item);
// }

//-> forEach
// set1.forEach(function (item) {
//     console.log(item);
// });

// Convert set into arrays

// const setArr = Array.from(set1);

// console.log(setArr);
