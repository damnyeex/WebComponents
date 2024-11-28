document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const paginationItems = document.querySelectorAll(".pagination .ellipse");
  const prevButton = document.querySelector(".slide-arrow-prev").closest("button");
  const nextButton = document.querySelector(".slide-arrow-next").closest("button");
  const continueButton = document.getElementById("continue-btn");
  let currentIndex = 0;

  const updateSlider = (index) => {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });

    paginationItems.forEach((item, i) => {
      item.classList.toggle("active", i === index);
    });

    prevButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
    continueButton.disabled = index !== slides.length - 1;
  };

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateSlider(currentIndex);
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateSlider(currentIndex);
    }
  });

  paginationItems.forEach((item, i) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      currentIndex = i;
      updateSlider(currentIndex);
    });
  });

  updateSlider(currentIndex);
});