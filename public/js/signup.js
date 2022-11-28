const signupFormHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const firstName = document.querySelector('#firstName-signup').value.trim();
    const lastName = document.querySelector('#lastName-signup').value.trim();
    const gender = document.querySelector('#gender-signup').value.trim();
    const telephone = document.querySelector('#telephone-signup').value.trim();
    if (email && password && firstName && lastName && gender) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ email, password, firstName, lastName, gender, telephone }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to sign up');
        }
    }
};

const form = document.querySelector('#signup-form');
form.addEventListener('submit', signupFormHandler);
