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

            // 隨機大小、速度、擺動、閃爍
            dot.style.setProperty("--size", `${Math.random() * 6 + 3}px`);
            dot.style.setProperty("--rise", `${Math.random() * 10 + 12}s`);
            dot.style.setProperty("--sway", `${Math.random() * 6 + 6}s`);
            dot.style.setProperty("--flicker", `${Math.random() * 3 + 2}s`);

            bg.appendChild(dot);
        }
    }

    // === 捲動效果（加上 scrolled class） ===
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            document.body.classList.add("scrolled");
        } else {
            document.body.classList.remove("scrolled");
        }
    });
});