const http = new EasyHttp;

// get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));


// new post data
const userData = {
    name: "Parth Chaudahry",
    username : 'parth1996',
    email : 'parth1996@mail.com'
}

// add new user
// http.post('https://jsonplaceholder.typicode.com/users', userData)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// update existing user
// http.put('https://jsonplaceholder.typicode.com/users/8', userData)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// delete the user
http.delete('https://jsonplaceholder.typicode.com/users/8')
.then(data => console.log(data))
.catch(err => console.log(err));