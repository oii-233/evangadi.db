const dbConnection = require("../db/db.config");
const { StatusCodes } = require("http-status-codes");

// Create a new answer
async function createAnswer(req, res) {
  const { question_id, answer } = req.body;
  const user_id = req.user.userid; // from authMiddleware

  if (!question_id || !answer) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please provide question_id and answer" });
  }

  try {
    const [result] = await dbConnection.query(
      "INSERT INTO answers (question_id, user_id, answer) VALUES (?, ?, ?)",
      [question_id, user_id, answer]
    );

    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Answer created", answerId: result.insertId });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong" });
  }
}

// Get all answers for a specific question
async function getAnswersByQuestion(req, res) {
  const { question_id } = req.params;

  try {
    const [answers] = await dbConnection.query(
      "SELECT * FROM answers WHERE question_id = ? ORDER BY created_at ASC",
      [question_id]
    );

    return res.status(StatusCodes.OK).json({ answers });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Something went wrong" });
  }
}

module.exports = { createAnswer, getAnswersByQuestion };
