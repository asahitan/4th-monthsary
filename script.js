function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function toggleMusic() {
    const music = document.getElementById("background-music");
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Create falling hearts
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.className = "falling-heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createFallingHeart, 1000); // Falling hearts every second

// Create heart on touch/click
function createTouchHeart(event) {
    const heart = document.createElement("div");
    heart.className = "touch-heart";
    heart.style.left = `${event.pageX - 12}px`;
    heart.style.top = `${event.pageY - 12}px`;
    document.body.appendChild(heart);

    // Remove heart after animation
    setTimeout(() => heart.remove(), 1000);
}
