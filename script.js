const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const authButtons = document.querySelector('.auth-buttons');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  authButtons.classList.toggle('active');
});


function validateForm() {
    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
      alert('Please enter your name.');
      return false;
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email.');
      return false;
    }
  
    // Validate mobile number
    const mobile = document.getElementById('mobile').value;
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }
  
    // Validate services
    const services = document.getElementById('services').value;
    if (services === '') {
      alert('Please select a service.');
      return false;
    }
  
    // If everything is valid
    alert('Form submitted successfully!');
    return true;
  }
  