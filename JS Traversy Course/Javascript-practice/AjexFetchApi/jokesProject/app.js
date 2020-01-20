document.querySelector('.jokes-list').innerHTML = '<div>No Jokes</div>';

// Listen for the click event
document.querySelector('.get-jokes').addEventListener('click', getJokes);

// get jokes
function getJokes(e) {

    const jokesValue = document.querySelector('#number').value;
    
    if(jokesValue === ''){
        alert('Please Enter Valid Value...!!!')
    }

    // new XHR object
    const jokesXHR = new XMLHttpRequest();

    // set the XHR request parameter
    jokesXHR.open('GET', `https://api.icndb.com/jokes/random/${jokesValue}`, true);

    // onload
    jokesXHR.onload = function () {
        if(this.status === 200){

            const jokes = JSON.parse(this.responseText);

            let jokeList = '';

            if(jokes.type === 'success'){
                jokes.value.forEach(function (joke) {
                    jokeList += `<li>${joke.joke}</li>`;
                });
            }else{
                jokeList += `<div>Something Went Wrong</div>`;
            }

            document.querySelector('.jokes-list').innerHTML = jokeList;
        }
    }

    jokesXHR.send();

    e.preventDefault();
}