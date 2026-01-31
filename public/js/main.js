document.addEventListener("DOMContentLoaded", () => {
  const splash = document.getElementById("splash");
  const home = document.getElementById("home");

  // Splash duration
  setTimeout(() => {
    splash.style.display = "none";
    home.classList.remove("hidden");
  }, 4000); // 4 seconds
});
