const dbConnection = require("../db/db.config");
const { StatusCodes } = require("http-status-codes");

// Create a new answer
async function createAnswer(req, res) {
    const { questionId, userId, content } = req.body;

    if (!questionId || !userId || !content) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide all required fields" });
    }

    try {
        const [result] = await dbConnection.query(
            "INSERT INTO answers (questionId, userId, content) VALUES (?, ?, ?)",
            [questionId, userId, content]
        );

        return res.status(StatusCodes.CREATED).json({ msg: "Answer created", answerId: result.insertId });
    } catch (error) {
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
    }
}

// Get all answers for a specific question
async function getAnswersByQuestion(req, res) {
    const { questionId } = req.params;

    try {
        const [answers] = await dbConnection.query(
            "SELECT * FROM answers WHERE questionId = ? ORDER BY createdAt ASC",
            [questionId]
        );

        return res.status(StatusCodes.OK).json({ answers });
    } catch (error) {
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
    }
}

module.exports = {
    createAnswer,
    getAnswersByQuestion,
};
