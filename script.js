AOS.init();

gsap.registerPlugin(ScrollTrigger);

let horizontalSection = document.querySelector('.horizontal');

console.log(horizontalSection.scrollWidth);

gsap.to('.horizontal', {
  x: () => horizontalSection.scrollWidth * -1,
  xPercent: 100,
  scrollTrigger: {
    trigger: '.horizontal',
    start: 'center center',
    end: '+=2000px',
    pin: '#horizontal-scoll',
    scrub: true,
    invalidateOnRefresh: true
  }
});



// Navbar

window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > window.innerHeight / 2) {
    navbar.style.display = 'flex';
  } else {
    navbar.style.display = 'none';
  }
});

// gallery

function navigateToPage(pageUrl) {
  window.location.href = pageUrl;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');

  // Define scroll speed and interval
  const scrollSpeed = 10; // Adjust scroll speed (higher value for faster scrolling)
  const scrollInterval = 30; // Adjust scroll interval in milliseconds
  let scrollDirection = 'right'; // Initial scroll direction

  // Function to scroll container automatically
  function autoScroll() {
    if (scrollDirection === 'right') {
      container.scrollLeft += scrollSpeed;
      // Check if reached end of scroll
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        scrollDirection = 'left';
      }
    } else if (scrollDirection === 'left') {
      container.scrollLeft -= scrollSpeed;
      // Check if scrolled back to start
      if (container.scrollLeft <= 0) {
        scrollDirection = 'right';
      }
    }
  }

  // Start auto-scrolling
  let scrollIntervalId = setInterval(autoScroll, scrollInterval);

  // Stop auto-scrolling when mouse enters container
  container.addEventListener('mouseenter', () => {
    clearInterval(scrollIntervalId);
  });

  // Resume auto-scrolling when mouse leaves container
  container.addEventListener('mouseleave', () => {
    scrollIntervalId = setInterval(autoScroll, scrollInterval);
  });

  // Optional: Stop auto-scrolling when clicking on a card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      clearInterval(scrollIntervalId);
    });
  });
});





