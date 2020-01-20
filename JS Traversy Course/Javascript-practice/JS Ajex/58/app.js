// 058 XHR Object Methods  Working With Text
/*
--> HTTP Status
    -> 200: "OK"
    -> 403: "Forbidden"
    -> 404: "Page Not Found"

--> readyState Values
    -> 0: Request not inititalized
    -> 1: Server Connection Established
    -> 2: request recived
    -> 3: processing request
    -> 4: request finished and response is ready
*/

document.getElementById('button').addEventListener('click', loadData);

function loadData() { 
    // create a XHR Object 
    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);
    

    xhr.onload = function () {

        console.log('READYSTATE', xhr.readyState);

        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    // OPTIONAL - used for spinners/loader
    xhr.onprogress = function () { 
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onerror = function () { 
        console.log('Request Error..');
    }


    // xhr.onreadystatechange = function () { 
    //     console.log('READYSTATE', xhr.readyState);

    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();
}
