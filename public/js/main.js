// public/js/main.js
// Global Frontend Controller (LIVE)

console.log("✅ main.js loaded successfully");

// ---------- API BASE ----------
const API_BASE = "/api";

// ---------- Helper ----------
async function apiRequest(url, method = "GET", data = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const res = await fetch(API_BASE + url, options);
  return await res.json();
}

// ---------- Example: Order Accept ----------
async function acceptOrder(orderId) {
  try {
    const result = await apiRequest("/orders", "POST", {
      action: "accept",
      orderId
    });
    alert(result.message || "Order Accepted");
  } catch (err) {
    console.error("Order error:", err);
    alert("Order failed");
  }
}

// ---------- Example: Wallet ----------
async function loadWallet() {
  try {
    const wallet = await apiRequest("/wallet");
    console.log("Wallet:", wallet);
  } catch (e) {
    console.error("Wallet load failed");
  }
}

// ---------- On Page Load ----------
document.addEventListener("DOMContentLoaded", () => {
  console.log("📦 App Ready");
});
