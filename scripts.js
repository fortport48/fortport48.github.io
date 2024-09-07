function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation for empty fields
    if (username === "" || password === "") {
        errorMessage.textContent = "Username and Password are required!";
        return false;
    }

    // For demonstration, check if the username is 'admin' and password is 'password'
    if (username === "admin" && password === "password") {
        alert("Login successful!");
         window.location.href = "welcome.html";
        return true;
    } else {
        errorMessage.textContent = "Invalid Username or Password!";
        return false;
    }
}
