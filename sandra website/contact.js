function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // You can add your form submission logic here
    // For now, we'll just show an alert
    alert('Thank you for your message! We will get back to you soon.');
    
    // Clear the form
    event.target.reset();
    
    return false;
}
