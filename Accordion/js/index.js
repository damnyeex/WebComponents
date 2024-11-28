document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".accordion-tab");
  const continueBtn = document.getElementById("continue-btn");

  let tabsOpened = Array(tabs.length).fill(false); 
  let tabsVisited = Array(tabs.length).fill(false); 

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
        tabsVisited[index] = true; 
      }

      checkButtonState();
    });
  });

  function checkButtonState() {
    const allTabsVisited = tabsVisited.every(tab => tab); 
    const allTabsOpened = tabsOpened.every(tab => tab);   
    const allTabsClosed = tabsOpened.every(tab => !tab);  

    continueBtn.disabled = allTabsClosed || !allTabsVisited; 
    continueBtn.classList.toggle("disabled", continueBtn.disabled);
  }
});