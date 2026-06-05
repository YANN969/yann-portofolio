// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Custom cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
});

document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    cursorFollower.style.opacity = '1';
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// AUTO CLOSE MENU SAAT LINK DIKLIK
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
            contactForm.reset();
        } else {
            alert('Mohon lengkapi semua field.');
        }
    });
}

// Hover effect on buttons
const btns = document.querySelectorAll('.btn');

if (cursorFollower) {

    btns.forEach(btn => {

        btn.addEventListener('mouseenter', () => {
            cursorFollower.style.transform = 'scale(1.5)';
        });

        btn.addEventListener('mouseleave', () => {
            cursorFollower.style.transform = 'scale(1)';
        });

    });

}




// NAVBAR SCROLL EFFECT
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* TIMELINE SCROLL PROGRESS */

const timeline = document.querySelector('.timeline');
const timelineProgress = document.getElementById('timelineProgress');

window.addEventListener('scroll', () => {

    if (!timeline || !timelineProgress) return;

    const rect = timeline.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    const timelineHeight = timeline.offsetHeight;

    const visible = windowHeight - rect.top;

    const percent = Math.min(
        Math.max((visible / timelineHeight) * 100, 0),
        100
    );

    timelineProgress.style.height = percent + '%';
});

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.classList.add("loaded");

    }, 2200); // samakan dengan durasi loading bar

});