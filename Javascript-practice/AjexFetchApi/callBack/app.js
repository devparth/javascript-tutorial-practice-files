// posts
const posts = [
    {title: 'Post 1', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, dicta.'},
    {title: 'Post 2', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    {title: 'Post 3', body: 'Lorem ipsum dolor sit amet dolor sit ametdolor sit ametdolor sit amet.'},
    {title: 'Post 4', body: 'Lorem ipsum dolor sit.'},
    {title: 'Post 5', body: 'Lorem ipsum amet.'},
];

// // Synchronus Way

// // Ceate POsts
// function createPost() {
//     setTimeout(function (post) {
//         posts.push(post);
//     }, 2000);
// }

// // Get Posts
// function getPosts() {
//     setTimeout(function () {
//         let output = '';
//         posts.forEach(function (post) {
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// // create post
// createPost({tite: 'Post 6', body: 'Lorem ipsum amet.'});

// // call get post
// getPosts();


// Asynchronus Way

// Ceate POsts
function createPost(post, callback) {
    setTimeout(function () {
        posts.push(post);
        callback();
    }, 2000);
}

// Get Posts
function getPosts() {
    setTimeout(function () {
        let output = '';
        posts.forEach(function (post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// create post
createPost({title: 'Post 6', body: 'Lorem ipsum amet.'}, getPosts);

// // call get post
// getPosts();