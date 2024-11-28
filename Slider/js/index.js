document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const paginationItems = document.querySelectorAll(".pagination .ellipse");
  const prevButton = document.querySelector(".slide-arrow-prev").closest("button");
  const nextButton = document.querySelector(".slide-arrow-next").closest("button");
  const continueButton = document.getElementById("continue-btn");
  const slidesWrapper = document.querySelector(".slides-wrapper");
  let currentIndex = 0;

  const adjustSlideHeight = () => {
    const maxHeight = Array.from(slides).reduce((height, slide) => {
      return Math.max(height, slide.offsetHeight);
    }, 0);
    slidesWrapper.style.height = `${maxHeight}px`
  };



  const updateSlider = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
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

  paginationItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  adjustSlideHeight();
  window.addEventListener("resize", adjustSlideHeight);

  updateSlider(currentIndex);
});