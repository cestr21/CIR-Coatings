//Dropdown Menu
  $(document).ready(function() {
    $('.navbar-toggler').on('click', function() {
      $(this).toggleClass('active');
    });
  });
  
  // Smooth scrolling using jQuery easing
$('a.nav-link').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {
      window.location.hash = hash;
    });
  }
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Fetch form input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validate form fields
  if (name === '' || email === '' || phone === '' || message === '') {
    alert('Please fill out all required fields: Name, Email, Phone, and Message.');
    return;
  }

  // Prepare form data
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('phone', phone);
  formData.append('message', message);

  // Send the form data via AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formsubmit.co/martinezaaron78@outlook.com', true);
  xhr.setRequestHeader('accept', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // Success callback
        alert('Thank you for your message. We will get back to you shortly!');
        // Optionally, clear the form
        document.getElementById('contactForm').reset();
      } else {
        // Error callback
        alert('There was a problem with sending your message. Please try again later.');
      }
    }
  };
  xhr.onerror = function() {
    // Error callback
    alert('There was a problem with sending your message. Please try again later.');
  };
  xhr.send(formData);
});

