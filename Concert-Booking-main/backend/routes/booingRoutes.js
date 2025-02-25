const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// Create a Booking
router.post('/', async (req, res) => {
    try {
        const { name, email, tickets } = req.body;
        const newBooking = new Booking({ name, email, tickets });
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: "Error creating booking." });
    }
});

// Get All Bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: "Error fetching bookings." });
    }
});

module.exports = router;
