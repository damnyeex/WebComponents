document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const pagination = document.querySelectorAll(".pagination");
  const prevBtn = document.querySelector(".slide-arrow-prev");
  const nextBtn = document.querySelector(".slide-arrow-next");
  const continueBtn = document.querySelector("#continue-btn");


  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
    });

    pagination.forEach((ellipse, index) => {
      ellipse.classList.toggle("active", index === currentSlide);
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === 0;

    if (currentSlide === slides.length - 1) {
      continueBtn.disabled = false;
    }
  }

  nextBtn.addEventListener("click", () => {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  pagination.forEach((ellipse, index) => {
    ellipse.addEventListener("click", () => {
      currentSlide = index;
      updateSlider();
    });
  });

  updateSlider();
});