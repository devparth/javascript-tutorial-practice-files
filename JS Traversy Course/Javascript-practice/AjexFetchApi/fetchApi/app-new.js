// Get Text Button click event
document.querySelector('#getText').addEventListener('click', getText);

// Get JSON Button click event
document.querySelector('#getJson').addEventListener('click', getJson);

// Get API Button click event
document.querySelector('#getApiData').addEventListener('click', getApiData);

// get text from "txt" file using fetch
function getText() {
    fetch('text.txt')
    .then(function (res) {
        return res.text();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
}

// get data from "JSON" File

function getJson() {
    fetch('posts.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (posts) {
        let output = '';
        posts.forEach(post => {
            output += `<li>${post.body}</li>`
        });
        document.querySelector('.output').innerHTML += output;
    })
    .catch(err => console.log(err));
}

// get data from API
function getApiData() {
    fetch('https://api.github.com/users')
    .then(function (res) {
        return res.json();
    })
    .then(function (users) {
        let output = '';
        users.forEach(user => {
            output += `<li>${user.login}</li>`;
        });
        document.querySelector('.output').innerHTML += output;
    })
}