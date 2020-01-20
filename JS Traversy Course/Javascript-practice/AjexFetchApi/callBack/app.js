const posts = [
    {title: 'Post 1', body: 'This is Post'},
    {title: 'Post 2', body: 'This is Post'},
    {title: 'Post 3', body: 'This is Post'}
];

// // create post
// function createPost(post) {
//     setTimeout(function() {
//         posts.push(post);
//     }, 2000);
// }

// // getPost
// function getPost() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'POst 4', body: 'This is post'});

// getPost();

// create post with callbacks
// function createPost(post, callback) {
//     setTimeout(function() {
//         posts.push(post);
//         callback();
//     }, 2000);
// }

// // getPost
// function getPost() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// createPost({title: 'Post 4', body: 'This is post'}, getPost);


// promises
function createPost(post) {
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            let err = true;

            if(!err){
                resolve();
            }else{
                reject('Error: Something went wrong..!!!');
            }

        }, 2000);
    });
}

// getPost
function getPost() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post 4', body: 'This is post'})
.then(getPost)
.catch(function (err) {
    console.log(err);
    
});