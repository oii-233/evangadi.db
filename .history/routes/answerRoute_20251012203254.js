const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createAnswer, getAnswersByQuestion } = require("../controller/answerController");

// Routes
router.post("/", authMiddleware, createAnswer);
router.get("/question/:questionId", getAnswersByQuestion);

module.exports = router;
