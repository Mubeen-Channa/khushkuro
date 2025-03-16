const texts = ["Mubeen Channa", "Full Stack Developer", "React-Native Developer"];
let textIndex = 0;
let charIndex = 0;
const speed = 100; // Typing speed in milliseconds

function typeEffect() {
    if (charIndex < texts[textIndex].length) {
        document.getElementById("typed-text").textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, speed);
    } else {
        setTimeout(eraseEffect, 1500); // Pause before erasing
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        document.getElementById("typed-text").textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, speed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length; // Move to next text
        setTimeout(typeEffect, speed);
    }
}

window.onload = typeEffect;

/* Dark Mode Toggle */
const darkModeToggle = document.getElementById("dark-mode-toggle");
const info = document.getElementById("info");
const social_icons = document.getElementById("social-icons");
const icon = darkModeToggle.querySelector("i");

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Toggle between moon and sun icon
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        info.classList.add("info");
        social_icons.classList.add("social");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        info.classList.remove("info");
        social_icons.classList.remove("social");
    }
});
