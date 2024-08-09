document.getElementById('phone').addEventListener('input', function (e) {

    this.value = this.value.replace(/[^0-9]/g, '');
});

document.getElementById('submitButton').addEventListener('click', function () {
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;
    if (!passwordPattern.test(password)) {
        alert('Your password must be 8-32 characters long and include uppercase, lowercase, digits, and special characters.');
        return;
    }

    fetch('kaanapi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            phone: phone,
            password: password,
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/EvrencellDemo/src/main/resources/static/UserInformationPage/UserInformationPage.html';
        } else {
            alert('Login failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
