// MENU HAMBURGUESA MOBILE
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const canvas = document.getElementById('hero-particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = 600;

const particles = [];
for(let i=0;i<60;i++){
    particles.push({
        x: Math.random()*canvas.width,
        y: Math.random()*canvas.height,
        radius: Math.random()*3 + 1,
        dx: (Math.random()-0.5)*0.5,
        dy: (Math.random()-0.5)*0.5,
        alpha: Math.random()*0.5 + 0.3
    });
}

function animateParticles(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
        ctx.fillStyle = `rgba(0,170,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if(p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
});



// Inicializar el mapa
    var map = L.map('map').setView([-25.2637, -57.5759], 15); // Coordenadas de ejemplo (Asunción, Paraguay)

    // Añadir mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Añadir marcador personalizado
    var icon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });

    L.marker([-25.2637, -57.5759], {icon: icon}).addTo(map)
      .bindPopup("<b>Repuestos Premium</b><br>Calle Principal #123, Ciudad")
      .openPopup();


      // JS para acordeón FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Cierra otros abiertos
        faqItems.forEach(i => i !== item ? i.classList.remove('open') : null);
        // Abre o cierra el clickeado
        item.classList.toggle('open');
    });
});

// JS para animación al hacer scroll
const animatedItems = document.querySelectorAll('.animate');

function animateOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Reutilizamos la animación al hacer scroll de servicios/testimonios
const animatedItemsBlog = document.querySelectorAll('.blog-card.animate');

function animateBlogOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    animatedItemsBlog.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;

        if(itemTop < triggerBottom) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', animateBlogOnScroll);
window.addEventListener('load', animateBlogOnScroll);
