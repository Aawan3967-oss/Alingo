/* ===============================
   BASIC FRONTEND SECURITY LAYER
   =============================== */

// fake role (future: from login/session)
const allowedRoles = ["vendor", "driver", "company", "security"];

// prevent direct iframe / embed
if (window.top !== window.self) {
  document.body.innerHTML = "Access Denied";
}

// loader
function loadPanel(role){
  if(!allowedRoles.includes(role)){
    alert("Unauthorized access");
    return;
  }

  fetch(`panels/${role}.html`)
    .then(res => {
      if(!res.ok) throw new Error("Load failed");
      return res.text();
    })
    .then(html => {
      document.getElementById("panel-content").innerHTML = html;
    })
    .catch(()=>{
      document.getElementById("panel-content").innerHTML =
        "<p>Error loading section</p>";
    });
}
