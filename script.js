// logos swipper effect animation

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  loop: false,
  speed: 3000,
  autoplay: {
    delay: 0, // No delay
    disableOnInteraction: false, // Keeps autoplay even when user interacts
  },
  allowTouchMove: true, //
  on: {
    reachEnd: function () {
      setTimeout(() => {
        swiper.slideTo(0, 0);
        swiper.autoplay.start(); // Restart autoplay
      }, 500);
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
var testimonialSwiper = new Swiper(".testimonialSwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 4000,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
