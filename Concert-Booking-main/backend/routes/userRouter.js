const express = require('express');
const bcrypt = require('bcryptjs'); 
const router = express.Router();
const User = require('../models/User');

// Signup User
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Error creating user." });
    }
});

// Login User
router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) return res.status(400).json({ error: "Invalid username or password" });

        // Compare hashed passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid username or password" });

        res.status(200).json({ message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ error: "Error during login." });
    }
});

module.exports = router;
