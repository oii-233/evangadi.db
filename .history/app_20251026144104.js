require("dotenv").config();
const express = require("express");
const app = express();
const port = 5500;

const dbConnection = require("./db/db.config");
const userRoutes = require("./routes/userRoute");
const questionRoutes = require("./routes/questionRoute");
const answerRoutes = require("./routes/answerRoute");
const authMiddleware = require("./middleware/authMiddleware");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/questions", authMiddleware, questionRoutes);
app.use("/api/answers", authMiddleware, answerRoutes);

async function start() {
  try {
    await dbConnection.execute("SELECT 'test'");
    await app.listen(port);
    console.log("✅ Database connection established");
    console.log(`🚀 Server listening on port ${port}`);
  } catch (error) {
    console.log("❌ Database connection failed:", error);
  }
}
start();
