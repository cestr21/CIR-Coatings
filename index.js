$(document).ready(function() {
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

  // Hover animation for feature items and service items
  $('.feature-item, .service-item').hover(function() {
    $(this).addClass('animated pulse');
  }, function() {
    $(this).removeClass('animated pulse');
  });

  // Redirect to Services.html on clicking service cards
  $('.service-link').on('click', function(event) {
    event.stopPropagation(); // Prevent any parent click events
    window.location.href = $(this).attr('href');
  });
});
