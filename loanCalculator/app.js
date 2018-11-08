// Listen to submit button
document.getElementById('loan-form').addEventListener('submit', function (e) {

    // Show loader
    document.getElementById('loading').style.display = 'block';
    
    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults() {

    // Grab UI's
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalIntrest = document.getElementById('total-intrest');

    principle = parseFloat(amount.value);
    calculatedInterest = parseFloat(interest.value) / 100 / 12;
    caluclatedPayments = parseFloat(years.value) * 12;

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, caluclatedPayments);
    const monthly = (principle * x * calculatedInterest) / (x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * caluclatedPayments).toFixed(2);
        totalIntrest.value = ((monthly * caluclatedPayments)-principle).toFixed(2);

        // Show results
        document.getElementById('results').style.display = 'block';
        // Hide spinner
        document.getElementById('loading').style.display = 'none';
    } else {
        showError('Please check your numbers');
    }
}

function showError(error) {

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'none';

    const errorDiv = document.createElement('div');

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    errorDiv.className = 'alert alert-danger';

    //Create Node and append child
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above title
    card.insertBefore(errorDiv, heading);

    //Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError () {
    document.querySelector('.alert').remove();
}
