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


        })
    })


    card.addEventListener('mouseenter', () => {
        card.setAttribute("data-flipped", "true");
        checkAllFlipped();

    })

});

function checkAllFlipped() {
    const allFlipped = Array.from(cards).every(
        (card) => card.getAttribute("data-flipped") === "true"

    );
    continueBtn.disabled = !allFlipped;

}