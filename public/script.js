/* ================= SPLASH SCREEN EMOJI FALL ================= */

const splashEmojis = ["🚕","🍔","🛒","✈️","🎟️","📦"];
const fallBox = document.getElementById("emoji-fall");

splashEmojis.forEach((emoji, i) => {
  const el = document.createElement("div");
  el.textContent = emoji;
  el.style.position = "absolute";
  el.style.left = (12 + i * 12) + "%";
  el.style.top = "-40px";
  el.style.fontSize = "22px";
  el.style.zIndex = "1";
  fallBox.appendChild(el);

  setTimeout(() => {
    el.animate(
      [
        { transform: "translateY(0)" },
        { transform: "translateY(80vh)" },
        { transform: "translateY(74vh)" }
      ],
      {
        duration: 2200,
        easing: "ease-out",
        fill: "forwards"
      }
    );
  }, i * 700);
});

/* ================= SHOW HOME AFTER SPLASH ================= */

setTimeout(() => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");

  if (splash) splash.style.display = "none";
  if (home) home.style.display = "block";

  initOrbitEmojis();
}, 10000);


/* ================= ORBIT EMOJI SYSTEM ================= */
/*
  - inner logo disk = static
  - orbit container = rotating
  - emoji buttons move around logo
*/

function initOrbitEmojis() {
  const orbit = document.getElementById("orbit");
  if (!orbit) return;

  const emojis = ["🚕","🍔","🛒","✈️","🎟️","📦"];
  const radius = 95; // لوگو ڈسک کے گرد فاصلہ

  orbit.innerHTML = ""; // safety reset

  emojis.forEach((emoji, index) => {
    const item = document.createElement("div");
    item.className = "orbit-item";
    item.textContent = emoji;

    const angle = (360 / emojis.length) * index;

    // ⭐ یہی وہ اصل لائن ہے جو گردش کرواتی ہے
    item.style.transform =
      `rotate(${angle}deg) translate(${radius}px)`;

    orbit.appendChild(item);
  });
}
