// js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) { // Only run if the form exists on the page
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all fields.');
                event.preventDefault(); // Prevent form submission if validation fails
                return;
            }

            // Optional: Basic email format check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                event.preventDefault();
                return;
            }

            // If validation passes, you could show a success message
            // or proceed with actual form submission (e.g., using fetch API)
            alert(`Thank you, ${name}! Your message has been sent.`);
            // contactForm.reset(); // Optionally clear the form after successful submission
        });
    }

    // Example: Simple "Alert" button (you can add a button to any page)
    // const alertButton = document.querySelector('#alertButton'); // Find your button
    // if (alertButton) {
    //     alertButton.addEventListener('click', function() {
    //         alert('Button clicked!');
    //     });
    // }
});
