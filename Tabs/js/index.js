document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-buttons li");
  const contents = document.querySelectorAll(".tab-content");
  const continueButton = document.getElementById("continue-btn");

  let visitedTabs = new Set();

  tabs[0].classList.add("active");
  contents[0].classList.add("active");

  visitedTabs.add(0);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      contents.forEach((content, i) => {
        content.classList.remove("active")
        if (i === index) content.classList.add("active")
      });

      visitedTabs.add(index);

      if (visitedTabs.size === tabs.length) {
        continueButton.disabled = false;
      }
    });
  });
});