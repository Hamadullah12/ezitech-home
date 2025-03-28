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
