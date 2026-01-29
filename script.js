function initCircle() {
    const services = [
        { name: 'Taxi', icon: '🚕' },
        { name: 'Food', icon: '🍔' },
        { name: 'Grocery', icon: '🛒' },
        { name: 'Tickets', icon: '🎟️' },
        { name: 'Shopping', icon: '🛍️' },
        { name: 'Travel', icon: '✈️' }
    ];

    const wrapper = document.getElementById('menuRing');
    const radius = 115; // ڈسک کے اندر رکھنے کے لیے ریڈیس
    const centerX = wrapper.offsetWidth / 2;
    const centerY = wrapper.offsetHeight / 2;

    services.forEach((service, i) => {
        const angle = (i * (360 / services.length)) * (Math.PI / 180);
        const x = centerX + radius * Math.cos(angle) - 32.5; // 32.5 is half of button width
        const y = centerY + radius * Math.sin(angle) - 32.5;

        const btn = document.createElement('div');
        btn.className = 'service-node animate__animated animate__zoomIn';
        btn.style.left = `${x}px`;
        btn.style.top = `${y}px`;
        btn.innerHTML = `<span>${service.icon}</span><span>${service.name}</span>`;
        
        btn.onclick = () => alert(service.name + " service coming soon!");
        wrapper.appendChild(btn);
    });
}
