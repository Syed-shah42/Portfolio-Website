
// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add event listeners to navigation links
const homeLink = document.querySelector('.navlist a[href="#"]');
const skillsLink = document.querySelector('.navlist a[href="#skills-section"]');
const contactLink = document.querySelector('.navlist a[href="#contact-section"]');

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('body', 1000); // Scroll to the top of the page
});

skillsLink.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('#skills-section', 1000); // 1000ms = 1 second
});

contactLink.addEventListener('click', (event) => {
    event.preventDefault();
    smoothScroll('#contact-section', 1000); // 1000ms = 1 second
});

document.getElementById('resumeBtn').addEventListener('click', function() {
    console.log('Resume download clicked');
});

var typed = new Typed(".input", {
    strings:["Full Stack Developer."],
    typeSpeed: 80,
    backSpeed: 70,
    loop:false
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}