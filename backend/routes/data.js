const express = require('express');
const router = express.Router();
const Market = require('../models/Market'); // Import the model

// Get market data
router.get('/get-data', async (req, res) => {
    try {
        const data = await Market.find(); // Fetch all data from MongoDB
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
