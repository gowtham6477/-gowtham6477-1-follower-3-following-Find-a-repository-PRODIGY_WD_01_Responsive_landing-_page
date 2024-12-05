// Scroll Progress Bar
const scrollProgress = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollProgress.style.background = `conic-gradient(yellow ${scrollPercent}%, transparent ${scrollPercent}%)`;
});

// Typewriter Effect
const typewriter = document.getElementById("typewriter");
const text = "Welcome to a World of Innovation and Creativity!";
let idx = 0;

function typeEffect() {
    if (idx < text.length) {
        typewriter.textContent += text.charAt(idx);
        idx++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();
