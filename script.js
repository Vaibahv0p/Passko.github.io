document.getElementById('checkstrength').addEventListener('click', function () {

  const password = document.getElementById('password').value;

  const strength = checkPasswordStrength(password);

  updateStrengthMeter(strength);

  updateFeedback(strength);

});

function checkPasswordStrength(password) {

  let strength = 0;

  if (password.length >= 8) strength++;

  if (/[A-Z]/.test(password)) strength++;

  if (/[a-z]/.test(password)) strength++;

  if (/\d/.test(password)) strength++;

  if (/[^A-Za-z0-9]/.test(password)) strength++;

  return strength;

}

function updateStrengthMeter(strength) {

  const strengthBar = document.getElementById('strengthbar');

  const colors = ['red', 'orange', 'yellow', '#9ACD32', 'green'];

  strengthBar.style.width = `${strength * 20}%`;

  strengthBar.style.backgroundColor = colors[strength - 1] || 'transparent';

}

function updateFeedback(strength) {

  const feedback = document.getElementById('feedback');

  const messages = [

    'Too weak!',

    'Very weak!',

    'Weak!',

    'Fair!',

    'Strong!',

    'Very strong!',

  ];

  feedback.textContent = messages[strength] || '';

}