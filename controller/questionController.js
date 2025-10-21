const dbConnection = require("../db/db.config");
const { StatusCodes } = require("http-status-codes");

// Create a new question
async function createQuestion(req, res) {
    const { title, description, userId } = req.body;

    if (!title || !description || !userId) {
        return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Please provide all required fields" });
    }

    try {
        const [result] = await dbConnection.query(
            "INSERT INTO questions (title, description, userId) VALUES (?, ?, ?)",
            [title, description, userId]
        );

        return res.status(StatusCodes.CREATED).json({ msg: "Question created", questionId: result.insertId });
    } catch (error) {
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
    }
}

// Get all questions
async function getAllQuestions(req, res) {
    try {
        const [questions] = await dbConnection.query("SELECT * FROM questions ORDER BY createdAt DESC");
        return res.status(StatusCodes.OK).json({ questions });
    } catch (error) {
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
    }
}

// Get question by ID
async function getQuestionById(req, res) {
    const { id } = req.params;

    try {
        const [question] = await dbConnection.query("SELECT * FROM questions WHERE id = ?", [id]);
        if (question.length === 0) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: "Question not found" });
        }
        return res.status(StatusCodes.OK).json({ question: question[0] });
    } catch (error) {
        console.log(error.message);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Something went wrong" });
    }
}

module.exports = {
    createQuestion,
    getAllQuestions,
    getQuestionById,
};
