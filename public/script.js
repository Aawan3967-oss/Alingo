const services = [
    { name: 'TAXI', icon: '🚕' },
    { name: 'FOOD', icon: '🍱' },
    { name: 'GROCERY', icon: '🛒' },
    { name: 'TICKETS', icon: '🎟️' },
    { name: 'SHOP', icon: '🛍️' },
    { name: 'TRAVEL', icon: '✈️' }
];

const firebaseConfig = {
    apiKey: "AIzaSyCwToYZJlnhnpYUt0NpspoRh4HczFgy1I4",
    authDomain: "alingo-d59de.firebaseapp.com",
    projectId: "alingo-d59de",
    storageBucket: "alingo-d59de.firebasestorage.app",
    messagingSenderId: "854468704271",
    appId: "1:854468704271:web:6f389d7c069730194b8b7a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// بکنگ کنفرم کرنے کا فنکشن (ٹیکسی پیج کے لیے)
async function confirmBooking() {
    const pickup = document.querySelector('input[placeholder="Pickup Location"]').value;
    const dropoff = document.querySelector('input[placeholder="Drop-off Destination"]').value;
    const rideType = document.querySelector('.ride-option.active p').innerText;

    if (!pickup || !dropoff) {
        alert("Please enter both locations!");
        return;
    }

    try {
        await db.collection("orders").add({
            service: "Taxi",
            pickup: pickup,
            dropoff: dropoff,
            rideType: rideType,
            status: "Pending",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        alert("Your Alingo ride request has been sent! Check status in a moment.");
    } catch (error) {
        console.error("Error adding document: ", error);
        alert("Something went wrong. Please try again.");
    }
}




function drawNodes() {
    const container = document.getElementById('nodes-container');
    if(!container) return;
    
    const radius = 160; // ڈسک کا آدھا سائز
    const total = services.length;

    services.forEach((s, i) => {
        const angle = (i * (360 / total)) * (Math.PI / 180);
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        const el = document.createElement('div');
        el.className = 'node';
        el.innerHTML = `<span>${s.icon}</span><span>${s.name}</span>`;
        
        // یہ لائن بٹنز کو ڈسک کے کنارے پر سیٹ کرے گی
        el.style.left = `calc(50% + ${x}px - 30px)`;
        el.style.top = `calc(50% + ${y}px - 30px)`;
        
        el.onclick = () => alert(s.name + " Service Coming Soon!");
        container.appendChild(el);
    });
}

// پیج لوڈ ہونے پر بٹنز بنائیں
window.onload = drawNodes;

function openService(name) {
    // کسٹمر کو مخصوص پیج پر بھیجنے کے لیے
    const slug = name.toLowerCase();
    console.log("Navigating to:", slug);
    // window.location.href = `/${slug}`; 
}
