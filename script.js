// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Toggle Music On/Off
const backgroundMusic = document.getElementById("background-music");
let isPlaying = false;

function toggleMusic() {
    if (isPlaying) {
        backgroundMusic.pause();
    } else {
        backgroundMusic.play();
    }
    isPlaying = !isPlaying;
}

// Display Music Selection Modal
function showMusicSelection() {
    document.getElementById("music-selection").style.display = "block";
}

// Hide Music Selection Modal
function closeMusicSelection() {
    document.getElementById("music-selection").style.display = "none";
}

// Change Background Music
function changeMusic(option) {
    const selectedMusic = document.getElementById(option);
    backgroundMusic.src = selectedMusic.src;
    backgroundMusic.play();
    closeMusicSelection();
}

// Toggle Menu Visibility
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Create Hearts on Click
function createTouchHeart(event) {
    const touchHeart = document.createElement("div");
    touchHeart.classList.add("touch-heart");
    touchHeart.style.left = `${event.pageX}px`;
    touchHeart.style.top = `${event.pageY}px`;
    document.body.appendChild(touchHeart);

    setTimeout(() => {
        touchHeart.remove();
    }, 1000);
}

// Generate Falling Hearts
function generateFallingHearts() {
    const heart = document.createElement("div");
    heart.classList.add("falling-heart");
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(generateFallingHearts, 500);
