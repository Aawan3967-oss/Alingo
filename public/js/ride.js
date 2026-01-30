function loadRide(section){
  fetch(`panels/ride/${section}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("panel-content").innerHTML = html;
    });
}
