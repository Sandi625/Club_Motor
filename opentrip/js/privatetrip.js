// JavaScript
const images = document.querySelectorAll('.image-card img');
const modalImage = document.getElementById('modal-image');

images.forEach(image => {
    image.addEventListener('click', () => {
        modalImage.src = image.src;
        document.getElementById('modal-toggle').checked = true;
    });
});
