const logout = async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/login');
    } else {
        alert('Failed to log out');
    }
};

const logoutButton = document.querySelector('#logout');
console.log(logoutButton);
logoutButton.addEventListener('click', logout);
