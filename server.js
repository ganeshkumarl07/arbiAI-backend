require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('ArbiAI Backend is Running 🚀');
});

// AI Product Search Route (Mock Response)
app.post('/search', (req, res) => {
    const { query } = req.body;
    res.json({
        success: true,
        message: `AI searching for: ${query}`,
        results: [
            { product: "Laptop", price: "$400", marketplace: "Amazon" },
            { product: "Phone", price: "$250", marketplace: "eBay" }
        ]
    });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
