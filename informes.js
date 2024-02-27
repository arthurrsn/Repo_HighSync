document.addEventListener('DOMContentLoaded', function() {
    var images = ['juri.jpg', 'juri2.jpg',]; 
    var currentIndex = 0;
    var banner = document.getElementById('banner');

    function changeBackground() {
        banner.style.backgroundImage = 'url(' + images[currentIndex] + ')';
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); 
});