const user = {email: 'parth@gmail.com'};

try{
    // produce ReferenceError
    // myFunc();

    // produce TypeError
    // null.myFunction();

    // produce SyntaxError
    // console.log(eval('Hello World'));

    // produce URIError
    // decodeURIComponent('%');

    if(!user.name){
        // throw 'User has no name';

        throw new SyntaxError('User has no name..');
    }
}catch(err){
    // console.log(err);
    // console.log(err.message);
    // console.log(err.name);
    // console.log(err instanceof ReferenceError);
    // console.log(err instanceof TypeError);
    console.log(err);
}finally{
    console.log('Finally Runs Shits..');

}

console.log('This shit also runs...');
