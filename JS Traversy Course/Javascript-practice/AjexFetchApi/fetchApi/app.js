// Listen to the getText button event
document.querySelector('#getText').addEventListener('click', getText);


// Listen to the getJSON button event
document.querySelector('#getJson').addEventListener('click', getJson);

// Listen to the getAPI button event
document.querySelector('#getApiData').addEventListener('click', getApiData);

// getText
function getText() {
    fetch('text.txt')
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        document.querySelector('.output').innerHTML += `<h3>${data}</h3>`;
    })
    .catch(function (err) {
        console.log(err);
    });
}

// getJson
function getJson() {
    fetch('posts.json')
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        data.forEach(function (post) {
            document.querySelector('.output').innerHTML += `<li>${post.body}</li>`;
        });
    })
    .catch(function (err) {
        console.log(err);
    })
}


// getApiData
function getApiData() {
    fetch('https://api.github.com/users')
    .then(function (res) {
        return res.json();
    })
    .then(function (users) {
        users.forEach(function (user) {
            document.querySelector('.output').innerHTML += `<li>${user.login}</li>`;
        });
    })
    .catch(function (err) {
        console.log(err);
    });
}