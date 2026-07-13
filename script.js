const pages = document.querySelectorAll(".page");
let current = 0;

function nextPage() {
    pages[current].classList.remove("active");
    current++;

    if (current < pages.length) {
        pages[current].classList.add("active");
    }
}

const text =
"I made something just for you... ❤️";

let i = 0;

function typeWriter() {

    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }

}

typeWriter();

const music = document.getElementById("music");

function toggleMusic() {

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}

setInterval(createHeart, 300);

const noBtn = document.getElementById("noBtn");

let tries = 0;

noBtn.addEventListener("mouseover", () => {

    if (tries < 5) {

        noBtn.style.position = "absolute";

        noBtn.style.left =
            Math.random() * (window.innerWidth - 150) + "px";

        noBtn.style.top =
            Math.random() * (window.innerHeight - 80) + "px";

        tries++;

    }

});

noBtn.addEventListener("click", () => {

    alert("That's okay 😊\n\nI'll still be hoping we get that conversation ❤️");

});

const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: { y: 0.6 }

    });

    pages[current].classList.remove("active");

    document.getElementById("yesPage").classList.add("active");

});
