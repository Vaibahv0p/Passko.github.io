document.getElementById('checkstrength').addEventListener('click', function() {

    const password = document.getElementById('password').value;

    const strengthBar = document.getElementById('strengthbar');

    

    const strength = checkPasswordStrength(password);

    updateStrengthMeter(strength);

    updateFeedback(strength);

});

function checkPasswordStrength(password) {

    let strength = 0;

    // Length check (at least 8 characters)

    if (password.length >= 8) strength += 1;

    // Uppercase letter check

    if (/[A-Z]/.test(password)) strength += 1;

    // Lowercase letter check

    if (/[a-z]/.test(password)) strength += 1;

    // Number check

    if (/\d/.test(password)) strength += 1;

    // Special character check

    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return strength;

}

function updateStrengthMeter(strength) {

    const strengthBar = document.getElementById('strengthbar');

    

    switch (strength) {

        case 1:

            strengthBar.style.width = '20%';

            strengthBar.style.backgroundColor = 'red';

            break;

        case 2:

            strengthBar.style.width = '40%';

            strengthBar.style.backgroundColor = 'orange';

            break;

        case 3:

            strengthBar.style.width = '60%';

            strengthBar.style.backgroundColor = 'yellow';

            break;

        case 4:

            strengthBar.style.width = '80%';

            strengthBar.style.backgroundColor = '#9ACD32'; // YellowGreen

            break;

        case 5:

            strengthBar.style.width = '100%';

            strengthBar.style.backgroundColor = 'green';

            break;

        default:

            strengthBar.style.width = '0';

            break;

    }

}

function updateFeedback(strength) {

    const feedback = document.getElementById('feedback');

    

    switch (strength) {

        case 0:

            feedback.textContent = 'Password is too weak.';

            feedback.style.color = 'red';

            break;

        case 1:

            feedback.textContent = 'Very weak. Add more characters.';

            feedback.style.color = 'red';

            break;

        case 2:

            feedback.textContent = 'Weak. Add a mix of uppercase and numbers.';

            feedback.style.color = 'orange';

            break;

        case 3:

            feedback.textContent = 'Fair. Add special characters for better strength.';

            feedback.style.color = 'yellow';

            break;

        case 4:

            feedback.textContent = 'Strong. You\'re almost there!';

            feedback.style.color = '#9ACD32'; // YellowGreen

            break;

        case 5:

            feedback.textContent = 'Very strong! Great job!';

            feedback.style.color = 'green';

            break;

    }

}