$(document).ready(function() {
    $(".hamburger").click(function() {
        $(".nav-links").toggleClass("active");
    });
});


// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function changeSlide() {
    slides.forEach((slide, index) => {
        slide.style.display = 'none'; // Hide all slides
    });

    currentSlide = (currentSlide + 1) % totalSlides; // Move to next slide, loop around
    slides[currentSlide].style.display = 'block'; // Show current slide
}

// Automatically change slides every 3 seconds
setInterval(changeSlide, 3000);

// Initially display the first slide
slides.forEach((slide, index) => {
    if (index !== currentSlide) {
        slide.style.display = 'none';
    }
});
// Search Functionality
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search');

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        console.log('Searching for:', query);
        // Implement search logic here
        // You can use the query to filter products or redirect to a search results page
    } else {
        console.log('Please enter a search term');
    }
});

/* Video Control Functionality */
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

/* Star Rating Functionality */
const stars = document.querySelectorAll('.star-rating .fa');
const ratingMessage = document.getElementById('rating-message');

// Function to handle the hover effect
function handleHover(index) {
    stars.forEach((star, i) => {
        if (i < index) {
            star.classList.add('hover');
        } else {
            star.classList.remove('hover');
        }
    });
}

// Function to handle the rating click
function handleClick(index) {
    // Clear the previous rating
    stars.forEach(star => {
        star.classList.remove('checked');
    });

    // Set the new rating
    for (let i = 0; i < index; i++) {
        stars[i].classList.add('checked');
    }

    // Show the rating message
    ratingMessage.textContent = `You rated this product ${index} out of 5 stars!`;
}

// Add event listeners to each star
stars.forEach(star => {
    const index = parseInt(star.getAttribute('data-index'), 10);

    // Hover effect
    star.addEventListener('mouseover', () => handleHover(index));

    // Click event to set the rating
    star.addEventListener('click', () => handleClick(index));
});

// Reset the hover effect when the mouse leaves the stars
stars.forEach(star => {
    star.addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.classList.remove('hover');
        });
    });
});


// Get references to the "Order Now" button and the modal form
const orderBtn = document.getElementById('orderBtn');
const orderModal = document.getElementById('orderModal');
const closeBtn = document.querySelector('.close-btn');

// Show the order form when the button is clicked
orderBtn.addEventListener('click', () => {
    orderModal.style.display = 'block'; // Show the order modal
});

// Hide the order form when the close button (X) is clicked
closeBtn.addEventListener('click', () => {
    orderModal.style.display = 'none'; // Hide the order modal
});

// Also hide the modal if the user clicks outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === orderModal) {
        orderModal.style.display = 'none';
    }
});


// Get references to the buttons and the input field
const addButton = document.getElementById('add-item-rows');
const subtractButton = document.getElementById('subtract-item-rows');
const quantityInput = document.getElementById('order');

// Event listener for the + button
addButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  quantityInput.value = currentQuantity + 1; // Increment the quantity
});

// Event listener for the - button
subtractButton.addEventListener('click', () => {
  let currentQuantity = parseInt(quantityInput.value);
  if (currentQuantity > 0) {
    quantityInput.value = currentQuantity - 1; // Decrement the quantity, but not below 0
  }
});


