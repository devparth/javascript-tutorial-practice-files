const http = new easyHTTP;


// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts'); 

// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) { 
//     if(err){
//         console.log('Status ' + err);
        
//     }else{

//         console.log(posts);

//         // const myPosts = JSON.parse(posts);        
        
//         // let output = '';
        
//         // myPosts.forEach(function (post) { 
//         //     output += `
//         //         <ul>
//         //             <li>Title: ${post.id}</li>
//         //             <li>Title: ${post.title}</li>
//         //             <li>Title: ${post.body}</li>
//         //         </ul>
//         //     `;
//         // });

//         // document.body.innerHTML = output;
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) { 
//     if(err){
//         console.log('Status ' + err);
//     }else{
//         console.log(post);
//     }
// });


//POST Requerst
// Create Data
// const data = {
//     title: 'Custom Post',
//     body: 'This is a Custom Post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) { 
//     if(err){
//     console.log('Status ' + err);
//     }else{
//         console.log(post);
//     }
// });


//UPDATE(PUT) POst
// const data = {
//     title: 'Custom Post',
//     body: 'This is a Custom Post'
// };

// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function (err, post){
//     if(err){
//         console.log('Status ' + err);
//     }else{
//         console.log(post);
//     }
// });

// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) { 
    if(err){
        console.log('Status ' + err);
        
    }else{
        console.log(response);
    }
});
