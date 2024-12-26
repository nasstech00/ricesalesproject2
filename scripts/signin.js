function signIn() {
    const nin = document.getElementById('nin').value;
    const password = document.getElementById('password').value;

    if (!nin || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Simulated authentication check
    if (nin === "12345678901" && password === "password123") {
        alert("Sign In Successful!");
        // Redirect to the dashboard or home page (simulated here)
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid NIN or password. Please try again.");
    }
}

function navigateToprofile() {
    window.location = "profile.html";
}