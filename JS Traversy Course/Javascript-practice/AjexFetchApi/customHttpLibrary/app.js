// create new object
const http = new Http();

// get Requet
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {

//     if(error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }
// });


// get Requet
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, response) {

//     if(error){
//         console.log(error);
//     }else{
//         console.log(response);
//     }
// });


// post Requet
const newPost = {
    title: 'Custom Post',
    body: 'This is custom post body',
}

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', newPost, function (err, post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

// Update post using put

// http.put('https://jsonplaceholder.typicode.com/posts/1', newPost, function (err, post) {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);

//     }
// })

// get Requet
http.delete('https://jsonplaceholder.typicode.com/posts/51', function (error, response) {

    if(error){
        console.log(error);
    }else{
        console.log(response);
    }
});