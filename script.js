document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const comments = document.getElementById('comments').value;
    const responseMessage = document.getElementById('responseMessage');

    if (name && email && rating && comments) {
        // Simulate form submission
        setTimeout(() => {
            responseMessage.textContent = 'Thank you for your feedback!';
            responseMessage.style.color = 'green';

            // Clear the form
            document.getElementById('feedbackForm').reset();
        }, 1000);
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.style.color = 'red';
    }
});