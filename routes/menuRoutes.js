// 


const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem'); // Ensure this path is correct

// POST route to create a new menu item
router.post('/', async (req, res) => {
    try {
        const menuData = req.body;
        const newMenuItem = new MenuItem(menuData);
        const response = await newMenuItem.save();
        console.log('Data saved:', response);
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// GET route to fetch menu items based on taste
router.get('/:tastebest', async (req, res) => {
    try {
        const tastebest = req.params.tastebest;

        if (tastebest === 'spicy' || tastebest === 'sour' || tastebest === 'sweet') {
            const response = await MenuItem.find({ taste: tastebest });
            console.log('Data fetched:', response);
            return res.status(200).json(response);
        } else {
            console.log('Invalid taste type:', tastebest);
            return res.status(400).json({ error: 'Invalid taste type' });
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

// GET route to fetch all menu items
router.get('/', async (req, res) => {
    console.log("GET /menuitem called"); // Debugging statement
    try {
        const data = await MenuItem.find();
        console.log('Data fetched:', data);
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching data:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
