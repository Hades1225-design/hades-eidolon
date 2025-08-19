document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector(".bg");
    const dotCount = 20;

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot", "float", "sway");

        dot.style.left = `${Math.random() * 100}%`;

        // 隨機設定 CSS 變數
        dot.style.setProperty("--size", `${Math.random() * 6 + 3}px`);
        dot.style.setProperty("--rise", `${Math.random() * 10 + 12}s`);
        dot.style.setProperty("--sway", `${Math.random() * 6 + 2}s`);
        dot.style.setProperty("--flicker", `${Math.random() * 3 + 2}s`);

        bg.appendChild(dot);
    }
});
