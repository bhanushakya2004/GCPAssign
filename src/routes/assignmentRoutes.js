const express = require("express");
const { createAssignment } = require("../controllers/assignmentController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

// Route to create an assignment (Folder = Deadline Date)
router.post("/create", authMiddleware, createAssignment);

module.exports = router;
