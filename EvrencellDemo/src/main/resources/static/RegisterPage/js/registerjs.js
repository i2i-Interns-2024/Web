document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const nationalId = document.getElementById('nationalid').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const packageSelected = document.getElementById('package').value;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,32}$/;


 const password = document.getElementById('password').value;
 if (!passwordPattern.test(password)) {
     alert('Your password must be 8-32 characters long and include uppercase, lowercase, digits, and special characters.');
        return;
 }

    
    fetch('kaan-api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            surname: surname,
            nationalId: nationalId,
            phone: phone,
            email: email,
            package: packageSelected
        }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            
            alert('Registration successful!');
            window.location.href = '/EvrencellDemo/src/main/resources/static/LoginPage/index.html';
        } else {
            
            alert('Registration failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
