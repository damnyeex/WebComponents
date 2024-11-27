let tabsOpened = [false, false, false];

function toggleTab(tabIndex) {
  const tabContent = document.getElementById(`tab${tabIndex}`);
  const accordionTab = tabContent.closest(".accordion-tab")
  if (tabsOpened[tabIndex - 1]) {
    tabContent.classList.remove("active");
    accordionTab.classList.remove("active")
    tabsOpened[tabIndex - 1] = false;
  } else {
    tabContent.classList.add("active");
    accordionTab.classList.add("active")
    tabsOpened[tabIndex - 1] = true;
  }
  checkButtonState();
}

function checkButtonState() {
  const allTabsOpened = tabsOpened.every((tab) => tab);
  const continueBtn = document.getElementById("continue-btn");
  if (allTabsOpened) {
    continueBtn.classList.remove("disabled");
    continueBtn.disabled = false;
  } else {
    continueBtn.classList.add("disabled");
    continueBtn.disabled = true;
  }
}