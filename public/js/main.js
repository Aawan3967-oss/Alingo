// Splash → Home transition
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("home").style.display = "block";
  }, 2200);
});
