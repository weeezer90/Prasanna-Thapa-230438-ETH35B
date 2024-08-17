document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username === "" || password === "") {
        alert("Please fill out both fields.");
        return;
    }

    // Simple console log to simulate login (replace with real authentication logic)
    console.log(`Logging in with Username: ${username}, Password: ${password}`);

    // Reset the form
    this.reset();
});
