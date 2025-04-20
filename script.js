// Single instance of scroll handler
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    navbar.classList.toggle('scrolled', window.scrollY > headerHeight);
});

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slide");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
    }
}

// Smooth scroll
/*document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
*/

// Why Choose Us animation
window.addEventListener('scroll', () => {
    const section = document.getElementById('why-choose-us');
    const position = section.getBoundingClientRect();
    
    if(position.top < window.innerHeight) {
        section.querySelector('.cards').style.opacity = '1';
        section.querySelector('.cards').style.transform = 'translateY(0)';
    }
});