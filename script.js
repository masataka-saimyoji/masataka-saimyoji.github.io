const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let mouseX = width / 2;
let mouseY = height / 2;

window.addEventListener("resize", () => {
width = canvas.width = window.innerWidth;
height = canvas.height = window.innerHeight;
});

window.addEventListener("mousemove", (e) => {
mouseX = e.clientX;
mouseY = e.clientY;
});

let particles = [];

for (let i = 0; i < 80; i++) {
particles.push({
angle: Math.random() * Math.PI * 2,
radius: 150 + Math.random() * 100,
speed: 0.002 + Math.random() * 0.003
});
}

function animate() {
ctx.fillStyle = "rgba(10,10,10,0.2)";
ctx.fillRect(0, 0, width, height);

particles.forEach(p => {
p.angle += p.speed;

let baseX = width / 2 + Math.cos(p.angle) * p.radius;
let baseY = height / 2 + Math.sin(p.angle) * p.radius;

let dx = mouseX - baseX;
let dy = mouseY - baseY;
let dist = Math.sqrt(dx * dx + dy * dy);

let force = Math.max(0, 150 - dist) / 150;

let x = baseX - dx * force * 0.3;
let y = baseY - dy * force * 0.3;

ctx.beginPath();
ctx.arc(x, y, 2 + force * 4, 0, Math.PI * 2);
ctx.fillStyle = `rgba(255,255,255,${0.05 + force * 0.3})`;
ctx.fill();
});

requestAnimationFrame(animate);
}

animate();
const fadeElements = document.querySelectorAll(".fade-in");

function checkFade() {
const triggerBottom = window.innerHeight * 0.85;

fadeElements.forEach(el => {
const boxTop = el.getBoundingClientRect().top;

if (boxTop < triggerBottom) {
    el.classList.add("show");
}
});
}

window.addEventListener("scroll", checkFade);
checkFade();
const workCards = document.querySelectorAll(".work-card");

function checkCards() {
const triggerBottom = window.innerHeight * 0.9;

workCards.forEach((card, index) => {
const boxTop = card.getBoundingClientRect().top;

if (boxTop < triggerBottom) {
    setTimeout(() => {
    card.classList.add("show");
    }, index * 150);
}
});
}

window.addEventListener("scroll", checkCards);
checkCards();