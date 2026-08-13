function unlock() {
    const code = document.getElementById("code").value;
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");

    if (code === "0606") {
        passwordScreen.classList.add("unlocking");

        setTimeout(function() {
            passwordScreen.classList.add("hidden");
            mainContent.classList.remove("hidden");

            window.scrollTo(0, 0);
        }, 900);

    } else {
        const box = document.querySelector(".password-box");

        box.classList.add("wrong-code");

        setTimeout(function() {
            box.classList.remove("wrong-code");
        }, 500);
    }
}

function playMusic() {
    window.open(
        "https://open.spotify.com/search/Glue%20Song%20beabadoobee",
        "_blank"
    );
}
