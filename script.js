// script.js

document.addEventListener("DOMContentLoaded", () => {
      const bg = document.querySelector(".bg");

      const colors = [
        "rgba(255,255,255,0.9)",   // 白
        "rgba(192,192,192,0.8)",  // 銀白
        "rgba(173,216,230,0.8)"   // 淡藍
      ];

      function createDot() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("dot-wrapper");
        wrapper.style.left = `${Math.random() * 100}%`;

        const riseDuration = Math.random() * 10 + 10; // 10~20s
        wrapper.style.setProperty("--rise", `${riseDuration}s`);

        const dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style.setProperty("--size", `${Math.random() * 6 + 4}px`);
        dot.style.setProperty("--sway", `${Math.random() * 6 + 4}s`);
        dot.style.setProperty("--flicker", `${Math.random() * 3 + 2}s`);
        dot.style.background = colors[Math.floor(Math.random() * colors.length)];

        wrapper.appendChild(dot);
        bg.appendChild(wrapper);

        setTimeout(() => wrapper.remove(), riseDuration * 1000);
      }

      setInterval(createDot, 250);
      for (let i = 0; i < 10; i++) setTimeout(createDot, i * 200);

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