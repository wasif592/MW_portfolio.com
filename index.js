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
});const modeBtn = document.getElementById('modeBtn');
const body = document.body;

// Check for saved user preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    updateIcon(savedTheme);
}

modeBtn.addEventListener('click', () => {
    // Toggle the class
    body.classList.toggle('dark-theme');
    
    // Determine current state
    const isDark = body.classList.contains('dark-theme');
    const theme = isDark ? 'dark-theme' : '';
    
    // Save preference
    localStorage.setItem('theme', theme);
    
    // Update button icon
    updateIcon(theme);
});

function updateIcon(theme) {
    modeBtn.textContent = theme === 'dark-theme' ? '☀️' : '🌙';
}
function saveMsg() {
    let text = document.getElementById("msg").value;

    // Save for current session only (deleted on refresh)
    sessionStorage.setItem("tempMsg", text);

    document.getElementById("display" ).textContent = text;
}

// Show message (if exists) without keeping it after refresh
let saved = sessionStorage.getItem("tempMsg");
document.getElementById("display").textContent = saved;
