"use strict";
const btnNextEl = document.querySelector(".carousel-btn-next");
const btnPrevEl = document.querySelector(".carousel-btn-prev");
const termsDate = document.querySelector(".terms-date");
var swiper = new Swiper(".carousel-content", {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".carousel-btn-next",
    prevEl: ".carousel-btn-prev",
  },
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 3.5,
    },
    900: {
      slidesPerView: 3.2,
    },
    700: {
      slidesPerView: 2.5,
    },
    620: {
      slidesPerView: 2.2,
    },
    560: {
      slidesPerView: 1.8,
    },
    400: {
      slidesPerView: 1.8,
    },
    300: {
      slidesPerView: 1.6,
    },
  },
});

btnPrevEl.addEventListener("click", function () {
  btnNextEl.classList.remove("carousel-btn-disable");
  if (btnPrevEl.classList.contains("swiper-button-disabled")) {
    btnPrevEl.classList.add("carousel-btn-disable");
  }
});
btnNextEl.addEventListener("click", function () {
  btnPrevEl.classList.remove("carousel-btn-disable");
  if (btnNextEl.classList.contains("swiper-button-disabled")) {
    btnNextEl.classList.add("carousel-btn-disable");
  }
});
// Date for terms and conditions
function updateTermsDate() {
  const currentYear = new Date().getFullYear();
  termsDate.textContent = `${currentYear}`;
}
updateTermsDate();

//Sticky navigation
const sectionIntroEl = document.querySelector(".section-intro");
const obs = new IntersectionObserver(
  function (entries) {
    console.log(entries[0]);
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "100px",
  }
);
obs.observe(sectionIntroEl);
//////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const mainNavEl = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".links:link");
btnNavEl.addEventListener("click", function () {
  mainNavEl.classList.toggle("nav-open");
});
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (mainNavEl.classList.contains("nav-open"))
      mainNavEl.classList.toggle("nav-open");
  });
});
/////////////////////////////////////////////
