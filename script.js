function validateForm() {
    const form = document.getElementById('contactForm');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    
    let isValid = true;
    
    [name, email, subject, message].forEach(field => {
        field.classList.remove('is-invalid');
    });
    
    if (name.value.trim() === '') {
        name.classList.add('is-invalid');
        isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        email.classList.add('is-invalid');
        isValid = false;
    }
    
    if (subject.value.trim() === '') {
        subject.classList.add('is-invalid');
        isValid = false;
    }
    
    if (message.value.trim() === '') {
        message.classList.add('is-invalid');
        isValid = false;
    }
    
    if (isValid) {
        alert('Pesan berhasil dikirim! Terima kasih telah menghubungi saya.');
        form.reset();
    }
    
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            validateForm();
        });
    }
});