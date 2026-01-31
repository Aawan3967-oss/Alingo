// Dummy Users (API-ready)
const users = [
  {id:1, name:"Ali Foods", role:"Seller", status:"Active"},
  {id:2, name:"Ahmed Rider", role:"Driver", status:"Blocked"},
  {id:3, name:"Zain Investor", role:"Investor", status:"Active"}
];

const appeals = [
  {user:"Ahmed Rider", reason:"Late delivery issue resolved"}
];

const table = document.getElementById("userTable");
let active=0, blocked=0;

users.forEach(u=>{
  if(u.status==="Active") active++;
  if(u.status==="Blocked") blocked++;

  table.innerHTML += `
    <tr>
      <td>${u.name}</td>
      <td>${u.role}</td>
      <td>${u.status}</td>
      <td>
        <button class="approve" onclick="approve(${u.id})">Approve</button>
        <button class="block" onclick="block(${u.id})">Block</button>
      </td>
    </tr>
  `;
});

document.getElementById("uCount").innerText = users.length;
document.getElementById("aCount").innerText = active;
document.getElementById("bCount").innerText = blocked;

// Appeals
const appealList = document.getElementById("appealList");
appeals.forEach(a=>{
  appealList.innerHTML += `<li><strong>${a.user}</strong>: ${a.reason}</li>`;
});

function approve(id){
  alert("User approved (Admin verification logged)");
}

function block(id){
  alert("User blocked (Reason required)");
}
