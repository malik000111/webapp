function lockedAlert() {
    alert("Complete the previous test to unlock this topic!");
}

function openPage(topic) {
    window.location.href = topic + ".html";
}

const htmlPassed = localStorage.getItem("html_passed") === "true";
const cssPassed = localStorage.getItem("css_passed") === "true";
const jsPassed = localStorage.getItem("js_passed") === "true";

if (htmlPassed) {
    document.getElementById("css-block").classList.remove("locked");
    document.getElementById("css-block").onclick = () => openPage("css");
    document.getElementById("html-status").textContent = "HTML: ✅";
    document.getElementById("html-badge").textContent = "Completed";
    document.getElementById("css-badge").textContent = "Start";
}

if (cssPassed) {
    document.getElementById("js-block").classList.remove("locked");
    document.getElementById("js-block").onclick = () => openPage("js");
    document.getElementById("css-status").textContent = "CSS: ✅";
    document.getElementById("css-badge").textContent = "Completed";
    document.getElementById("js-badge").textContent = "Start";
}

if (jsPassed) {
    document.getElementById("js-status").textContent = "JS: ✅";
    document.getElementById("js-badge").textContent = "Completed";
}
