const track = document.querySelector('.testimonials-carousel');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');

let index = 0;

function showTestimonial() {
    const width = track.children[0].offsetWidth + 30; // ancho + gap
    track.style.transform = `translateX(${-index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    index++;
    if (index >= track.children.length) index = 0;
    showTestimonial();
});

prevBtn.addEventListener('click', () => {
    index--;
    if (index < 0) index = track.children.length - 1;
    showTestimonial();
});
function addTestimonial() {
    let name = document.getElementById("name").value;
    let comment = document.getElementById("comment").value;

    if (name === "" || comment === "") {
        alert("Completa todos los campos");
        return;
    }

    let testimonial = {
        name: name,
        comment: comment
    };

    let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    testimonials.push(testimonial);
    localStorage.setItem("testimonials", JSON.stringify(testimonials));

    showTestimonials();

    document.getElementById("name").value = "";
    document.getElementById("comment").value = "";
}

function showTestimonials() {
    let container = document.querySelector(".testimonials-carousel");
    let testimonials = JSON.parse(localStorage.getItem("testimonials")) || [];

    testimonials.forEach(t => {
        let card = `
        <div class="testimonial-card">
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png">
            <h4>${t.name}</h4>
            <p>"${t.comment}"</p>
        </div>`;
        container.innerHTML += card;
    });
}

showTestimonials();