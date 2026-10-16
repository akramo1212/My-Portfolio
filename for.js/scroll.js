/* ==========================================================
   SCROLL SPY + CONTACT FORM
   
   TWO OPTIONS — pick one:
   
   OPTION A) If you have a separate main.js file:
             Paste everything below into your main.js
   
   OPTION B) If you prefer inline:
             Paste this inside a <script> tag just before </body>
             (after the Swiper and Anime script tags)
   ========================================================== */

/* ---- Scroll Spy: highlight nav link for visible section ---- */
const sections    = document.querySelectorAll('section[id]');
const navLinks    = document.querySelectorAll('.nav__link');

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop    = section.offsetTop - 120;   /* offset for fixed header */
        const sectionHeight = section.offsetHeight;
        const sectionId     = section.getAttribute('id');

        const link = document.querySelector('.nav__link[href*=' + sectionId + ']');
        if (!link) return;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);

/* ---- Smooth scroll when nav link is clicked ---- */
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        /* Only intercept hash links (#about, #contact …) */
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

/* ---- Contact form: simple success feedback ---- */
emailjs.init('QBXCgihC3SM_AiCFO');

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        emailjs.sendForm('service_v7mq4vu', 'template_l7stasa', contactForm)
            .then(() => {
                formSuccess.textContent = '✅ Message sent!';
                formSuccess.classList.add('show');
                contactForm.reset();
                setTimeout(() => formSuccess.classList.remove('show'), 4000);
            })
            .catch(() => {
                formSuccess.textContent = '❌ Something went wrong. Try again.';
                formSuccess.classList.add('show');
                setTimeout(() => formSuccess.classList.remove('show'), 4000);
            });
    });
}

window.addEventListener('load', function() {

    const navList  = document.querySelector('.nav__list');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');

    /* Create the indicator div and add it to nav__list */
    const indicator = document.createElement('div');
    indicator.classList.add('nav__indicator');
    navList.style.position = 'relative';
    navList.appendChild(indicator);

    function isDesktop() {
        return window.innerWidth >= 1150;
    }

    function moveIndicator(link) {
        const listRect = navList.getBoundingClientRect();
        const linkRect = link.getBoundingClientRect();

        if (isDesktop()) {
            indicator.style.width  = linkRect.width + 'px';
            indicator.style.height = '2px';
            indicator.style.left   = (linkRect.left - listRect.left) + 'px';
            indicator.style.top    = 'auto';
            indicator.style.bottom = '-6px';
            indicator.style.right  = 'auto';
        } else {
            indicator.style.width  = '2px';
            indicator.style.height = linkRect.height + 'px';
            indicator.style.top    = (linkRect.top - listRect.top) + 'px';
            indicator.style.left   = 'auto';
            indicator.style.bottom = 'auto';
            indicator.style.right  = '-8px';
        }

        indicator.style.opacity = '1';
    }

    function scrollActive() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop    = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId     = section.getAttribute('id');
            const link = document.querySelector('.nav__link[href="#' + sectionId + '"]');
            if (!link) return;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(l => l.classList.remove('active-link'));
                link.classList.add('active-link');
                moveIndicator(link);
            }
        });
    }

    window.addEventListener('scroll', scrollActive);

    window.addEventListener('resize', function() {
        const active = document.querySelector('.nav__link.active-link');
        if (active) moveIndicator(active);
    });

    /* Smooth scroll on click */
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* Contact form */
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            formSuccess.classList.add('show');
            setTimeout(() => {
                contactForm.reset();
                formSuccess.classList.remove('show');
            }, 3000);
        });
    }

    /* ===== SCROLL REVEAL ANIMATIONS ===== */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

/* Home */
sr.reveal('.home__data',     { origin: 'left',   delay: 200 });
sr.reveal('.home__img',      { origin: 'bottom', delay: 400 });
sr.reveal('.home__info',     { origin: 'right',  delay: 500 });
sr.reveal('.home__social',   { origin: 'left',   delay: 600 });
sr.reveal('.home__cv',       { origin: 'right',  delay: 700 });

/* About */
sr.reveal('.about__data',    { origin: 'left',   delay: 200 });
sr.reveal('.about__img',     { origin: 'right',  delay: 400 });

/* Projects */
sr.reveal('.projects__card', { interval: 100 });

/* Services */
sr.reveal('.services__card', { interval: 100 });

/* Contact */
sr.reveal('.contact__card',  { interval: 100 });
sr.reveal('.contact__form',  { origin: 'right',  delay: 300 });

/* Footer */
sr.reveal('.footer__brand',       { origin: 'left',   delay: 200 });
sr.reveal('.footer__links',       { delay: 300 });
sr.reveal('.footer__contact',     { delay: 400 });
sr.reveal('.footer__social-wrap', { delay: 500 });

});