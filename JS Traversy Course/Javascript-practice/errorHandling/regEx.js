// let re;

// re = /Hello/;
// re = /Hello/i; // 'i' case inSensitive
// re = /Hello/g; // 'g' Global search


// console.log(re);
// console.log(re.source);

// Function used to evaluate RE

// --> exec() - if math then returns esult in array or null if not match

// const result = re.exec('Parth Hello');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// --> test() - return true or false if finds the match
// const result = re.test('hello Raja');

// --> match() - return result array or null
// const str = 'There Hello'
// const result = str.match(re);

// --> search() - Returns index of the firts mathc if not found returns -1
// const str = 'There Hello'
// const result = str.search(re);

// --> replace() - Returns new string with some or all of match patterns
// const str = 'Hello there Hello lao Hello There Hello';
// const newStr = str.replace(re, 'Hi');

// console.log(newStr);


/*    Metacharecter Symbols    */
let re;
// Literal Charecters

re = /hello/;
re = /hello/i;

// meta cherector symbols
re = /^h/i;  //Must start with
re = /world$/i;  //Must ends with
re = /^hello$/i; //must begin and end with
re = /h.llo/i; //Matches only ONE character
re = /h*llo/i; //Matches any chr 0 or more times
re = /gra?e?y/i; //optional char
re = /gra?e?y\?/i; //escape char

// Brackets [] - Character Sets
re = /gr[ae]y/i; //Musr be and a or e
re = /[A-Z]ray/; //any upper case later
re = /[a-z]ray/; //any lower case later
re = /[A-Za-z]ray/; //any case later
re = /[0-9]ray/; //match any digit

// Braces {} - Quantifiers
re = /hel{2}o/i;  //must occur exactly {m} amout of times
re = /hel{2,4}o/i;  //must occur exactly {m} amout of times
re = /hel{2,}o/i;  //must occur at least {m} amout of times

// parentheses () - Grouping
re = /([0-9]x){3}/

// Shorthand Character Classes
re = /\w/; //word char - alphanumeric or _
re = /\w+/; //+ = One or more char
re = /\W/; //non-word char
re = /\d+/; //match any digit
re = /\D/; //non-digit char
re =/\s/; //match white space
re =/\S/; //non-white space
re = /hell\b/i; //word boundary

// Assertions
re = /x(?=y)/; // match x only if followed by y
re = /x(?!y)/; // match x only if not followed by y

// String to match
const str = 'xray';

// Log Results
const result = re.exec(str);
console.log(result);


function reTest(re, str) {
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} dose not match ${re.source}`);
    }
}

reTest(re, str);