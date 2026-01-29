// سروسز کا ڈیٹا جو گول ڈسک پر نظر آئے گا
const alingoServices = [
    { id: 'food', name: 'کھانا', icon: '🍔', active: true },
    { id: 'grocery', name: 'گروسری', icon: '🛒', active: true },
    { id: 'taxi', name: 'ٹیکسی', icon: '🚕', active: true },
    { id: 'tickets', name: 'ٹکٹنگ', icon: '🎟️', active: true },
    { id: 'shopping', name: 'شاپنگ', icon: '🛍️', active: true },
    { id: 'travel', name: 'ٹریول', icon: '✈️', active: true }
];

// جب کسی سروس پر کلک ہو تو کیا ہو؟
function handleServiceClick(serviceId) {
    const displayArea = document.getElementById('display-area'); // انڈیکس فائل میں یہ آئی ڈی ہونی چاہیے
    
    if (serviceId === 'food') {
        loadFoodMenu();
    } else if (serviceId === 'taxi') {
        loadTaxiBooking();
    } else {
        alert(serviceId + " سروس جلد لائیو ہوگی!");
    }
}

// کھانا لوڈ کرنے کا فنکشن
function loadFoodMenu() {
    const area = document.getElementById('display-area');
    area.innerHTML = `
        <div class="animate__animated animate__fadeInUp p-4 bg-white rounded-3xl shadow-lg">
            <h3 class="text-xl font-bold mb-4 text-[#004a99]">تازہ کھانا آرڈر کریں</h3>
            <div class="grid grid-cols-1 gap-4">
                <div class="flex justify-between items-center border-b pb-2">
                    <span>چکن بریانی (فل)</span>
                    <button onclick="confirmOrder('Biryani', 350)" class="bg-[#1eb53a] text-white px-3 py-1 rounded-lg">Rs. 350</button>
                </div>
            </div>
        </div>
    `;
}
