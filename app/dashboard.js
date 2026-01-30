fetch("sidebar.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("sidebar").innerHTML = html;
  });

function loadModule(file) {
  document.getElementById("moduleFrame").src = `modules/${file}`;
}
