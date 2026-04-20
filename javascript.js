// --- HEADER STICKY COM PERFORMANCE ---
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (!header) return;

    if (window.scrollY > 10) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// --- ANIMAÇÃO AO SCROLL (REUTILIZÁVEL) ---
const elements = document.querySelectorAll('[data-animate]');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            entry.target.classList.add('show');
            observer.unobserve(entry.target); // anima só uma vez
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => {
    observer.observe(el);
});


// --- ANIMAÇÃO SUAVE AO CLICAR EM LINKS INTERNOS ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});