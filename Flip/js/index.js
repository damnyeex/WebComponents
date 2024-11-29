document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const continueBtn = document.getElementById("continue-btn");

    cards.forEach(card => {
        const cardInner = card.querySelector(".card-inner");
        const flipButtons = card.querySelectorAll(".flip");

        flipButtons.forEach((buttons) => {
            buttons.addEventListener("click", () => {
                isFlipped = card.getAttribute('data-flipped') === 'true';

                if (isFlipped) {
                    card.setAttribute('data-flipped', "false");
                    cardInner.classList.remove('flipped');

                } else {

                    card.setAttribute("data-flipped", "true");
                    cardInner.classList.add('flipped')
                }

                checkCardStates();
            });
        });

        card.addEventListener('mouseenter', () => {
            card.setAttribute("data-flipped", "true");
            cardInner.classList.add("flipped");
            checkCardStates();
        });
    });

    function checkCardStates() {
        const allFlipped = Array.from(cards).every(
            (card) => card.getAttribute("data-flipped") === "true"
        );

        const allUnflipped = Array.from(cards).every(
            card => card.getAttribute("data-flipped") === "false"
        );

        if (allFlipped) {

            continueBtn.disabled = false;

        } else if (allUnflipped) {

            continueBtn.disabled = true;
        }
    }
});