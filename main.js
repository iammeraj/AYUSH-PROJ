// Get modal elements
const modal = document.getElementById('modal');
const loginSignupBtn = document.getElementById('login-signup-btn');
const closeBtn = document.getElementsByClassName('close')[0];
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

// Open modal when button is clicked
loginSignupBtn.onclick = function() {
    modal.style.display = 'block';
}

// Close modal when 'x' is clicked
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Switch to Sign Up form
signupLink.onclick = function(e) {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

// Switch to Login form
loginLink.onclick = function(e) {
    e.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';
}
