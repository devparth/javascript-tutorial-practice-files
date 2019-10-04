document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get Text from text file
function getText() { 
    fetch('test.txt')
        .then(res => res.text())
         .then(data => { 
             console.log(data);
             document.getElementById('output').innerHTML = data;
          })
          .catch(err => console.log(err));
}

// Get posts from JSON file
function getJson() { 
    fetch('posts.json')
    .then(res => res.json())
    .then(data => { 
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `
            <ul>
                <li>Title: ${post.title}</li>
                <li>Bosy: ${post.body}</li>
            </ul>
            `;
        });

        document.getElementById('output').innerHTML = output;

     }).catch(err => console.log(err));
}

// Get from external API
function getExternal() { 
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => { 
        console.log(data);
        let output = '';
        data.forEach(user => {
            output += `
            <ul>
                <li>Id: ${user.id}</li>
                <li>Login: ${user.login}</li>
            </ul>
            `;
        });

        document.getElementById('output').innerHTML = output;

     }).catch(err => console.log(err));
}