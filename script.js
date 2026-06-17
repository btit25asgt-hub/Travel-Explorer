// Search Destinations
const searchInput = document.getElementById('searchInput');
const destinationItems = document.querySelectorAll('.destination-item');

searchInput.addEventListener('keyup', () => {
  const value = searchInput.value.toLowerCase();

  destinationItems.forEach(item => {
    const text = item.innerText.toLowerCase();

    if(text.includes(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

// Booking Form
const bookingForm = document.getElementById('bookingForm');
const successMessage = document.getElementById('successMessage');

bookingForm.addEventListener('submit', function(e) {
  e.preventDefault();

  successMessage.classList.remove('hidden');

  bookingForm.reset();

  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 4000);
});

// Contact Form
const contactForm = document.getElementById('contactForm');
const contactMessage = document.getElementById('contactMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();

  contactMessage.classList.remove('hidden');

  contactForm.reset();

  setTimeout(() => {
    contactMessage.classList.add('hidden');
  }, 4000);
});

// Auto Scroll Booking Section
const bookButtons = document.querySelectorAll('.book-btn');

bookButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById('booking').scrollIntoView({
      behavior: 'smooth'
    });
  });
});
