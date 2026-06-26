// Select the form
const form = document.getElementById("orderForm");

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Stop the form from submitting immediately
    event.preventDefault();

    // Get the values entered by the user
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const coffee = document.getElementById("coffee").value;
    const message = document.getElementById("message").value.trim();

    // Check if name is empty
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    // Check if phone number has exactly 10 digits
    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Check if email is valid
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if a coffee is selected
    if (coffee === "") {
        alert("Please select a coffee.");
        return;
    }

    // Check if message is empty
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // If everything is correct
    alert("Thank you! Your order has been submitted successfully.");

    // Clear the form
    form.reset();

});