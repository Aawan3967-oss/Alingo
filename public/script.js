const services = [
    { name: 'TAXI', icon: '🚕', id: 'taxi' },
    { name: 'FOOD', icon: '🍔', id: 'food' },
    { name: 'GROCERY', icon: '🛒', id: 'grocery' },
    { name: 'TICKETS', icon: '🎟️', id: 'tickets' },
    { name: 'SHOP', icon: '🛍️', id: 'shop' },
    { name: 'TRAVEL', icon: '✈️', id: 'travel' }
];

function initCircle() {
    const container = document.getElementById('diskContainer');
    const radius = container.offsetWidth / 2 - 30; // 30 is half of button size to keep it inside
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    services.forEach((s, i) => {
        const angle = (i * (360 / services.length)) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle) - 30;
        const y = centerY + radius * Math.sin(angle) - 30;

        const btn = document.createElement('div');
        btn.className = 'service-node';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
        btn.innerHTML = `<span>${s.icon}</span><label>${s.name}</label>`;
        
        btn.onclick = () => alert(s.name + " service coming soon!");
        container.appendChild(btn);
    });
}

// Initial Call
document.addEventListener('DOMContentLoaded', initCircle);
