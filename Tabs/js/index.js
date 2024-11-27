document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab-buttons li");
  const contents = document.querySelectorAll(".tab-content");
  const continueButton = document.getElementById("continue-btn");

  let visitedTabs = new Set();

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.tab;
      contents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === target) content.classList.add("active");
      });

      visitedTabs.add(target);

      if (visitedTabs.size === tabs.length) {
        continueButton.disabled = false;
      }
    });
  });
});
