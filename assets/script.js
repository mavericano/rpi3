document.getElementById("vibrateButton").addEventListener("click", () => {
    let length = document.getElementById("vibrateLength").value;
    window.navigator.vibrate(length);
    document.getElementById("background").classList.add("vibrating");
    setTimeout(() => {
        document.getElementById("background").classList.remove("vibrating");
    }, length)
})