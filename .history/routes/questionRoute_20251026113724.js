const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createQuestion, getAllQuestions, getQuestionById } = require("../controller/questionController");

// Routes
router.post("/", createQuestion);
router.get("/", getAllQuestions);
router.get("/:id", getQuestionById);

module.exports = router;
