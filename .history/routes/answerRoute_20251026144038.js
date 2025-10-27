const express = require("express");
const router = express.Router();
const { createAnswer, getAnswersByQuestion } = require("../controller/answerController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, createAnswer);
router.get("/:question_id", getAnswersByQuestion);

module.exports = router;
