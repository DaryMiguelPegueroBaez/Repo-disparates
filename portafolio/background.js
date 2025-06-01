const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 100; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, speed: 0.5 + Math.random() });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar estrellas
    ctx.fillStyle = 'white';
    for (let s of stars) {
        ctx.fillRect(s.x, s.y, 2, 2);
        s.y += s.speed;
        if (s.y > canvas.height) s.y = 0;
    }

    requestAnimationFrame(draw);
}

draw();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


// Jorge mmg Cambia la maldita logica que eso no sirve