document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Simple email validation
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Simple console log to simulate signup (replace with real authentication logic)
    console.log(`Signing up with Username: ${username}, Email: ${email}, Password: ${password}`);

    // Reset the form
    this.reset();
});

// Function to validate email using a simple regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
