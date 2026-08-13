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
    window.open(
        "https://open.spotify.com/search/Glue%20Song%20beabadoobee",
        "_blank"
    );
}
