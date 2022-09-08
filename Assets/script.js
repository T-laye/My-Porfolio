"use strict";
///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (navlink) {
  navlink.addEventListener("click", function (e) {
    e.preventDefault();
    const href = navlink.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

////////////////////////////////////////////
///////Mobile Navigation Bar///////////////

const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const navBar = document.querySelector(".nav-items");
const navModal = document.querySelector(".nav-items");
const navItems = document.querySelectorAll(".nav-item");

const open = function () {
  navBar.classList.add("show-nav");
  openModal.classList.add("hidden");
  closeModal.classList.remove("hidden");
};

const close = () => {
  navBar.classList.remove("show-nav");
  openModal.classList.remove("hidden");
  closeModal.classList.add("hidden");
};

openModal.addEventListener("click", open);

closeModal.addEventListener("click", close);

navModal.addEventListener("click", close);

navItems.forEach((navItem) => navItem.addEventListener("click", close));
