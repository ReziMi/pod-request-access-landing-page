const form = document.querySelector('.access-form');
const emailInput = document.getElementById('input-field');
const alertOutput = document.getElementById('alert-output');
const submitButton = document.querySelector('button'); 

submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '' || !emailRegex.test(emailValue)) {
        alertOutput.style.display = 'block';
        console.log('working');
    } else {
        alertOutput.style.display = 'none';
        console.log("dfdsfds");
    }

    return false;
});
