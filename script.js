// function toggleMenu() {
//   let menu = document.getElementById("nav-menu");
//   menu.classList.toggle("show-menu");
// }

// logos swipper effect animation

// Initialize Swiper for continuous scrolling effect
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6, // Show 6 logos at a time
  spaceBetween: 30, // Space between logos
  loop: false, // Disable infinite loop
  speed: 3000, // Smooth scrolling speed
  autoplay: {
    delay: 0, // No delay
    disableOnInteraction: false, // Keeps autoplay even when user interacts
  },
  allowTouchMove: true, // Disable manual dragging
  on: {
    reachEnd: function () {
      setTimeout(() => {
        swiper.slideTo(0, 0); // Instantly jump back to start
        swiper.autoplay.start(); // Restart autoplay
      }, 500); // Small delay before restarting
    },
  },
});

// animated counter

function animateCounters() {
  const counters = document.querySelectorAll(".counter-number");
  const section = document.querySelector(".counter-section");

  function startCounting(entries) {
    if (entries[0].isIntersecting) {
      counters.forEach((counter) => {
        counter.style.opacity = 1;
        counter.style.transform = "translateY(0px)";

        let target = +counter.getAttribute("data-target");
        let suffix = counter.getAttribute("data-suffix") || "";
        let count = 0;
        let speed = target / 100;

        let updateCounter = () => {
          if (count < target) {
            count += speed;
            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            counter.innerText = target + suffix;
          }
        };

        updateCounter();
      });

      observer.disconnect(); // Stop observing after animation
    }
  }

  let observer = new IntersectionObserver(startCounting, { threshold: 0.5 });
  observer.observe(section);
}

document.addEventListener("DOMContentLoaded", animateCounters);

// swiper js animation for testemonial
// Testimonials Swiper (Separate)
var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3, // Display 3 testimonials at a time
  spaceBetween: 20,
  loop: true, // Infinite loop
  autoplay: {
    delay: 0, // Continuous animation
    disableOnInteraction: false,
  },
  speed: 4000, // Smooth infinite scrolling
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
