console.log("JavaScript is running"); 

function toggleDropdown(btn) {
  const menu = btn.nextElementSibling;
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', !expanded);
  menu.style.opacity = expanded ? '0' : '1';
  menu.style.visibility = expanded ? 'hidden' : 'visible';
} 


// sideshow //

const slideshows = document.querySelectorAll('.slideshow');

slideshows.forEach(slideshow => {
  const slides = slideshow.querySelectorAll('img');
  let current = 0;

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(nextSlide, 3000); // change every 3 seconds
});


// Contact Form Notifaction //

const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload


  // show success message
  successMessage.style.display = 'block';

  // clear form fields
  form.reset();

  // hides message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);
});
