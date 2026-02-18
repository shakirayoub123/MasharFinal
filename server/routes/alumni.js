const express = require("express");
const protect = require("../middleware/auth");

const router = express.Router();
// ──────────────────────────────────────── // GET /api/v1/alumni/me (Protected) 
// // Returns the authenticated alumni's profile

router.get("/me", protect, async (req, res) => {
    res.json({
        alumni:
        {
            id: req.alumni._id,
            name: req.alumni.name,
            email: req.alumni.email,
            phone: req.alumni.phone,
            batch: req.alumni.batch,
        },
    });
});
module.exports = router;
