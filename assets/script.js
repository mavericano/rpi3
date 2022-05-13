document.getElementById("vibrateButton").addEventListener("click", () => {
    window.navigator.vibrate(document.getElementById("vibrateLength").value);
})