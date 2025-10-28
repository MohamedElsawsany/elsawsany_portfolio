// Typing Effect
const phrases = [
  "Securing infrastructure since 2020...",
  "Windows & Linux system expert...",
  "Network security specialist...",
  "Virtualization architect...",
  "Full stack developer...",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function type() {
  const current = phrases[phraseIndex];

  if (isDeleting) {
    typingElement.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(type, speed);
}

setTimeout(type, 1000);

// 3D Rotating Cubes Background
const canvas3d = document.getElementById("canvas3d");
const ctx3d = canvas3d.getContext("2d");
canvas3d.width = window.innerWidth;
canvas3d.height = window.innerHeight;

class Cube {
  constructor() {
    this.x = Math.random() * canvas3d.width;
    this.y = Math.random() * canvas3d.height;
    this.size = Math.random() * 50 + 20;
    this.rotationX = 0;
    this.rotationY = 0;
    this.rotationZ = 0;
    this.speedX = (Math.random() - 0.5) * 0.02;
    this.speedY = (Math.random() - 0.5) * 0.02;
    this.speedZ = (Math.random() - 0.5) * 0.02;
    this.opacity = Math.random() * 0.3 + 0.1;
  }

  update() {
    this.rotationX += this.speedX;
    this.rotationY += this.speedY;
    this.rotationZ += this.speedZ;
  }

  draw() {
    ctx3d.save();
    ctx3d.translate(this.x, this.y);
    ctx3d.strokeStyle = `rgba(0, 255, 255, ${this.opacity})`;
    ctx3d.lineWidth = 2;

    const halfSize = this.size / 2;

    ctx3d.beginPath();
    ctx3d.rect(-halfSize, -halfSize, this.size, this.size);
    ctx3d.stroke();

    ctx3d.beginPath();
    ctx3d.moveTo(-halfSize + 10, -halfSize + 10);
    ctx3d.lineTo(halfSize - 10, halfSize - 10);
    ctx3d.moveTo(halfSize - 10, -halfSize + 10);
    ctx3d.lineTo(-halfSize + 10, halfSize - 10);
    ctx3d.stroke();

    ctx3d.restore();
  }
}

const cubes = [];
for (let i = 0; i < 15; i++) {
  cubes.push(new Cube());
}

function animate3d() {
  ctx3d.clearRect(0, 0, canvas3d.width, canvas3d.height);
  cubes.forEach((cube) => {
    cube.update();
    cube.draw();
  });
  requestAnimationFrame(animate3d);
}

animate3d();

// Particle System
const particlesCanvas = document.getElementById("particles");
const ctxParticles = particlesCanvas.getContext("2d");
particlesCanvas.width = window.innerWidth;
particlesCanvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * particlesCanvas.width;
    this.y = Math.random() * particlesCanvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > particlesCanvas.width) this.x = 0;
    if (this.x < 0) this.x = particlesCanvas.width;
    if (this.y > particlesCanvas.height) this.y = 0;
    if (this.y < 0) this.y = particlesCanvas.height;

    this.opacity += (Math.random() - 0.5) * 0.1;
    if (this.opacity < 0) this.opacity = 0;
    if (this.opacity > 1) this.opacity = 1;
  }

  draw() {
    ctxParticles.fillStyle = `rgba(0, 255, 255, ${this.opacity})`;
    ctxParticles.beginPath();
    ctxParticles.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctxParticles.fill();
  }
}

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctxParticles.clearRect(0, 0, particlesCanvas.width, particlesCanvas.height);
  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Resize Handler
window.addEventListener("resize", () => {
  canvas3d.width = window.innerWidth;
  canvas3d.height = window.innerHeight;
  particlesCanvas.width = window.innerWidth;
  particlesCanvas.height = window.innerHeight;
});

// Mouse Trail Effect
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  const trail = document.createElement("div");
  trail.style.position = "fixed";
  trail.style.left = mouseX + "px";
  trail.style.top = mouseY + "px";
  trail.style.width = "5px";
  trail.style.height = "5px";
  trail.style.background = "#0ff";
  trail.style.borderRadius = "50%";
  trail.style.pointerEvents = "none";
  trail.style.zIndex = "9999";
  trail.style.boxShadow = "0 0 10px #0ff";
  trail.style.animation = "fadeTrail 0.5s forwards";

  document.body.appendChild(trail);

  setTimeout(() => trail.remove(), 500);
});

const style = document.createElement("style");
style.textContent = `
            @keyframes fadeTrail {
                to {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
document.head.appendChild(style);
