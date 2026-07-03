const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Baobab Server is running on Railway!' });
});

app.get('/api/products', (req, res) => {
    res.json([
        { id: 1, name: 'Kit de démarrage digital', price: 25000 },
        { id: 2, name: 'Formation 5 jours', price: 35000 },
        { id: 3, name: 'Livret IA pour PME', price: 10000 },
        { id: 4, name: 'Templates Canva Pro', price: 15000 },
        { id: 5, name: 'Pack Ma PME en ligne', price: 45000 }
    ]);
});

app.get('/api/videos', (req, res) => {
    res.json([
        { id: 1, title: 'Module 1 - Stratégie digitale' },
        { id: 2, title: 'Module 2 - Présence en ligne' },
        { id: 3, title: 'Module 3 - Outils IA' },
        { id: 4, title: 'Module 4 - Marketing digital' },
        { id: 5, title: 'Module 5 - CRM et suivi' }
    ]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🌐 Baobab Server running on port ${PORT}`);
});
