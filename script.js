function unlock() {
    const code = document.getElementById("code").value;
    const passwordScreen = document.getElementById("password-screen");
    const mainContent = document.getElementById("main-content");

    if (code === "0606") {
        passwordScreen.classList.add("hidden");
        mainContent.classList.remove("hidden");
    } else {
        alert("Hmm... try again 👀");
    }
}
