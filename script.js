document.addEventListener("DOMContentLoaded", () => {
    const bg = document.querySelector(".bg");
    const dotCount = 5;

    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");

        // 隨機水平位置
        dot.style.left = `${Math.random() * 100}%`;

        // 設定隨機大小、速度、擺動、閃爍
        dot.style.setProperty("--size", `${Math.random() * 6 + 3}px`);
        dot.style.setProperty("--rise", `${Math.random() * 10 + 12}s`);
        dot.style.setProperty("--sway", `${Math.random() * 6 + 6}s`);
        dot.style.setProperty("--flicker", `${Math.random() * 3 + 2}s`);

        bg.appendChild(dot);
    }
});
