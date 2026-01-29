const emojis = ["🚕","🍔","🛒","✈️","🎟️","📦"];
const stage = document.getElementById("emoji-stage");

emojis.forEach((e, i) => {
  const span = document.createElement("span");
  span.textContent = e;
  span.style.position = "absolute";
  span.style.left = 10 + i * 12 + "%";
  span.style.top = "-40px";
  span.style.fontSize = "24px";
  stage.appendChild(span);

  setTimeout(() => {
    span.animate([
      { transform: "translateY(0)" },
      { transform: "translateY(60vh)" },
      { transform: "translateY(55vh)" }
    ], {
      duration: 2000,
      easing: "ease-out",
      fill: "forwards"
    });
  }, i * 800);
});

setTimeout(() => {
  document.getElementById("splash").style.display = "none";
  document.getElementById("home").style.display = "block";

  // inject emojis into disk
  const disk = document.querySelector(".outer-disk");
  emojis.forEach((e, i) => {
    const el = document.createElement("div");
    el.className = "emoji";
    el.textContent = e;
    const angle = (360 / emojis.length) * i;
    el.style.transform =
      `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`;
    disk.appendChild(el);
  });

}, 10000);
