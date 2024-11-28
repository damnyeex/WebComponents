document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".accordion-tab");
  const continueBtn = document.getElementById("continue-btn");

  let tabsOpened = Array(tabs.length).fill(false);

  tabs.forEach((tab, index) => {
    const button = tab.querySelector(".tab");
    const content = tab.querySelector(".tab-content");

    button.addEventListener("click", () => {
      if (tabsOpened[index]) {
        content.classList.remove("active");
        tab.classList.remove("active");
        tabsOpened[index] = false;
      } else {

        content.classList.add("active");
        tab.classList.add("active");
        tabsOpened[index] = true;
      }

      checkButtonState();
    });

  });

  function checkButtonState() {
    const allTabsOpened = tabsOpened.every(tab => tab);
    continueBtn.disabled = !allTabsOpened;
    continueBtn.classList.toggle("disabled", !allTabsOpened);
  }
});