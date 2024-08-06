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
document.addEventListener("DOMContentLoaded", function() {
  console.log("Services page loaded");
});
document.addEventListener("DOMContentLoaded", function() {
  const toggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelector(".navbar-nav");

  toggler.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  console.log("Services page loaded");
});
