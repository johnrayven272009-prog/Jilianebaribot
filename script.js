function unlock() {
    const code = document.getElementById("code").value;
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");

    if (code === "0606") {
        passwordScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    } else {
        alert("Hmm... that's not it 👀");
    }
}

function playMusic() {
    const song = document.getElementById("song");

    if (song.src) {
        song.play();
    } else {
        alert("We'll add your song here next 🎵");
    }
}
