const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// تمام سٹیٹک فائلز (HTML, CSS, JS) کو ایکسیس دینا
app.use(express.static(path.join(__dirname, '../')));

// کسٹمر کے لیے روٹ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// ایڈمن کے لیے روٹ
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../admin.html'));
});

// ٹیسٹ API تاکہ پتہ چلے سرور چل رہا ہے
app.get('/api/status', (req, res) => {
    res.json({ status: "Alingo Server Online", version: "1.0.0" });
});

module.exports = app;
