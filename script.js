// script.js

document.addEventListener("DOMContentLoaded", () => {
    // === 光點背景生成 ===
    const bg = document.querySelector(".bg");
    if (bg) {
        const dotCount = 15; // 光點數量

        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");

            // 隨機水平位置
            dot.style.left = `${Math.random() * 100}%`;

            // 隨機大小、上升速度、左右擺動、閃爍速度
            dot.style.setProperty("--size", `${Math.random() * 6 + 3}px`);
            dot.style.setProperty("--rise", `${Math.random() * 10 + 12}s`);
            dot.style.setProperty("--sway", `${Math.random() * 6 + 6}s`);
            dot.style.setProperty("--flicker", `${Math.random() * 3 + 2}s`);

            bg.appendChild(dot);
        }
    }

    // === 滾動時 body 加入 scrolled 樣式 ===
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });

    // === 自動標記當前頁面 nav active ===
    const navLinks = document.querySelectorAll("nav a");
    const currentPage = window.location.pathname.split("/").pop(); // 取得檔名
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});