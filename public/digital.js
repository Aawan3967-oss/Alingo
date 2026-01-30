const container = document.getElementById("services");

fetch("/api/digital/services")
  .then(res => res.json())
  .then(data => {
    data.forEach(service => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div style="font-size:40px">${service.emoji}</div>
        <h3>${service.title}</h3>
        <p>Rs ${service.price}</p>
        <button onclick="orderService('${service.id}')">Activate</button>
      `;

      container.appendChild(card);
    });
  });

function orderService(id) {
  fetch("/api/digital/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ serviceId: id })
  })
  .then(res => res.json())
  .then(data => alert(data.message));
}
