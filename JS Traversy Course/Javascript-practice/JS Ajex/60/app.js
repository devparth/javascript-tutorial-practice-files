// Grab the Form button
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// Get Jokes
function getJokes(e) { 
    // grab number for jokes
    const number = document.getElementById('number').value;

    // Creating XHR Object
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () { 
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            console.log(response.value[4].joke);

            let output = '';

            if(response.type === "success"){
                response.value.forEach(function(joke){
                    output += `
                        <li>${joke.joke}</li>
                    `;
                });
            }else{
                output += '<li>Somthing went Wrong</li>';
            }

            document.querySelector('.jokes').innerHTML = output;
        }
    }

    xhr.send();    
    
    e.preventDefault();
}