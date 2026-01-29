const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// تمام سٹیٹک فائلز کے لیے راستہ درست کریں
app.use(express.static(path.join(__dirname, '..')));

// ہوم پیج
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// ایڈمن پیج
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

module.exports = app;
