const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}




/*Javascript for signup button */

document.addEventListener('DOMContentLoaded', () => {
    const signUpBtn = document.getElementById('signUpBtn');
    const signUpModal = new bootstrap.Modal(document.getElementById('signUpModal'));
    const signUpForm = document.getElementById('signUpForm');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const passwordError = document.getElementById('passwordError');

    signUpBtn.addEventListener('click', () => {
        signUpModal.show();
    });

    signUpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (passwordInput.value !== confirmPasswordInput.value) {
            passwordError.style.display = 'block';
        } else {
            signUpForm.submit();
        }
    });
});


















