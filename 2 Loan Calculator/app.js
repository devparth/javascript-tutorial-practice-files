// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function (e) { 
    // hide results
    document.getElementById('results').style.display = 'none';

    // show loader
    document.getElementById('loading').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});


// Calculate Results
function calculateResults() {
    // get UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedIntrest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedIntrest, calculatedPayments);
    const monthly = (principal*x*calculatedIntrest)/(x-1); 

    // check is finite or not
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // show result
        document.getElementById('results').style.display = 'block';

        // hide loader
        document.getElementById('loading').style.display = 'none';
    }else{
        showError('Please check youre nuymbers');

        // hide loader
        document.getElementById('loading').style.display = 'none';
    }    
}

// show err
function showError(err) {

    // show result
    document.getElementById('results').style.display = 'none';

    // hide loader
    document.getElementById('loading').style.display = 'none';

    // create a div
    const errDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add class
    errDiv.className = 'alert alert-danger';

    // create text node and apped it to div
    errDiv.appendChild(document.createTextNode(err));

    // insert err above heading
    card.insertBefore(errDiv, heading);

    // set time to remove alert after 3sec
    setTimeout(clearErr, 3000);
}

// clear err
function clearErr() { 
    document.querySelector('.alert').remove();
}