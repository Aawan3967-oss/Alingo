// Dummy Investment Data (later API / DB)
const investments = [
  { service:"Food Delivery", city:"Lahore", amount:1000000, profit:18, status:"🟢" },
  { service:"Logistics", city:"Multan", amount:700000, profit:22, status:"🟢" },
  { service:"Ride", city:"Karachi", amount:500000, profit:9, status:"🟡" }
];

let totalInvestment = 0;
let totalProfit = 0;

const table = document.getElementById("investmentTable");

investments.forEach(item=>{
  totalInvestment += item.amount;
  totalProfit += item.amount * item.profit / 100;

  table.innerHTML += `
    <tr>
      <td>${item.service}</td>
      <td>${item.city}</td>
      <td>Rs ${item.amount.toLocaleString()}</td>
      <td>${item.profit}%</td>
      <td>${item.status}</td>
    </tr>
  `;
});

document.getElementById("totalInvestment").innerText =
  "Rs " + totalInvestment.toLocaleString();

document.getElementById("totalProfit").innerText =
  "Rs " + totalProfit.toLocaleString();

document.getElementById("monthlyProfit").innerText =
  "Rs " + Math.round(totalProfit/6).toLocaleString();

function withdraw(){
  alert("Withdraw request sent to Admin for approval");
}

function reinvest(){
  alert("Re-investment request submitted");
}
