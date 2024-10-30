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

function showMusicSelection() {
    const musicSelection = document.getElementById("music-selection");
    musicSelection.style.display = "block";
}

function changeMusic(musicId) {
    document.querySelectorAll("audio").forEach(audio => audio.pause());
    const selectedMusic = document.getElementById(musicId);
    selectedMusic.play();
    document.getElementById("background-music").src = selectedMusic.src;
    closeMusicSelection();
}

function closeMusicSelection() {
    document.getElementById("music-selection").style.display = "none";
}

function createFallingHearts() {
    setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 5 + "s";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 500);
}

function createTouchHeart(event) {
    const touchHeart = document.createElement("div");
    touchHeart.classList.add("touch-heart");
    touchHeart.style.left = event.pageX - 12 + "px";
    touchHeart.style.top = event.pageY - 12 + "px";
    document.body.appendChild(touchHeart);

    setTimeout(() => {
        touchHeart.remove();
    }, 1000);
}

createFallingHearts();
