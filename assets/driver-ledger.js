const driverId = "DRV-" + Math.floor(Math.random()*100000);
document.getElementById("did").innerText = driverId;

// Example fare
const totalFare = 24000;

// Reuse same commission logic
const result = calculateCommission(totalFare);

document.getElementById("ledgerResult").innerText =
"Platform Commission: " + result.platform +
" | Driver Earnings: " + result.vendor;
