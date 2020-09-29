var cards = document.querySelectorAll('.clip-card');
cards.forEach(card => {
    card.addEventListener('mouseover', function () {
        card.classList.toggle('is-flipped');
    });
}) 
