const express = require("express");
const jwt = require("jsonwebtoken");
const Alumni = require("../models/Alumni");

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ────────────────────────────────────────
// POST /api/v1/auth/register
// ────────────────────────────────────────
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone, batch } = req.body;

        // Check if alumni already exists
        const existing = await Alumni.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: "Email already registered" });
        }

        // Create new alumni
        const alumni = await Alumni.create({ name, email, password, phone, batch });

        res.status(201).json({
            message: "Registration successful",
            token: generateToken(alumni._id),
            alumni: {
                id: alumni._id,
                name: alumni.name,
                email: alumni.email,
                phone: alumni.phone,
                batch: alumni.batch,
            },
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map((e) => e.message);
            return res.status(400).json({ message: messages.join(", ") });
        }
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

// ────────────────────────────────────────
// POST /api/v1/auth/login
// ────────────────────────────────────────
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "Please provide email and password" });
        }

        // Find alumni by email
        const alumni = await Alumni.findOne({ email });
        if (!alumni) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Check password
        const isMatch = await alumni.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        res.json({
            message: "Login successful",
            token: generateToken(alumni._id),
            alumni: {
                id: alumni._id,
                name: alumni.name,
                email: alumni.email,
                phone: alumni.phone,
                batch: alumni.batch,
            },
        });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;
