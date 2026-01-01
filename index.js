// Fade animation for gallery
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    items.forEach((item, i) => {
        item.style.opacity = "0";
        setTimeout(() => {
            item.style.transition = "0.6s";
            item.style.opacity = "1";
        }, i * 150);
    });
});

// Dark Mode Toggle
const modeBtn = document.getElementById("modeBtn");
modeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.textContent = "☀️";
    } else {
        modeBtn.textContent = "🌙";
    }
});
function saveMsg() {
    let text = document.getElementById("msg").value;

    // Save for current session only (deleted on refresh)
    sessionStorage.setItem("tempMsg", text);

    document.getElementById("display" ).textContent = text;
}

// Show message (if exists) without keeping it after refresh
let saved = sessionStorage.getItem("tempMsg");
document.getElementById("display").textContent = saved;
