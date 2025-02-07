const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duation: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".service-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trip-image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".trip-content .section-subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".trip-content .section-header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".trip-list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

///Swiper Slide

ScrollReveal().reveal(".client-content .section-subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".client-content .section-header", {
  ...scrollRevealOption,
  delay: 500,
});

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  autoHeight: true,
  slidesPerView: 1,
});
