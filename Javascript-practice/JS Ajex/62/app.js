const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
];


/*---- This is synchronous way ----*/

// // Creating Post
// function createPost(post) { 
//     setTimeout(function () { 
//         posts.push(post);
//     }, 2000);
// }


// // Get the post
// function getPosts() { 
//     setTimeout(function () { 
//         let output = '';
//         posts.forEach(function (post) { 
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// // class createPost function and adding new post
// createPost({title:'Post Three', body: 'This is post three'});

// // Getting the post
// getPosts();


/*---- This is asynchronous way ----*/

// Creating Post
// function createPost(post, callback) { 
//     setTimeout(function () { 
//         posts.push(post);
//         callback();
//     }, 2000);
// }


// Get the post
// function getPosts() { 
//     setTimeout(function () { 
//         let output = '';
//         posts.forEach(function (post) { 
//             output += `<li>${post.title}</li>`;
//         });

//         document.body.innerHTML = output;
//     }, 1000);
// }

// class createPost function and adding new post
// createPost({title:'Post Three', body: 'This is post three'}, getPosts);


/*---- Replace Callbacks with Promises ----*/

// Creating Post
function createPost(post) { 
    return new Promise(function (resolve, reject){
        setTimeout(function () { 
            posts.push(post);
            const err = true;

            if(!err){
                resolve();
            }else{
                reject("ERROR: Something Went Wrong");
            }
        }, 2000);
    });
}


// Get the post
function getPosts() { 
    setTimeout(function () { 
        let output = '';
        posts.forEach(function (post) { 
            output += `<li>${post.title}</li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

// class createPost function and adding new post
createPost({title:'Post Three', body: 'This is post three'})
.then(getPosts)
.catch(function(err){
    console.log(err);
});