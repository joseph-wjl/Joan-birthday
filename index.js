const giftImages = document.querySelectorAll('.gift-img');

giftImages.forEach((giftImg) => {
    giftImg.addEventListener('click', () => {
        // Toggle the "clicked" class on the element
        giftImg.classList.toggle('clicked');
    });
});