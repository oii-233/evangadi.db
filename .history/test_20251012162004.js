const db = require("./db/db.config");

async function testDB() {
    try {
        const [rows] = await db.query("SELECT 1 + 1 AS result");
        console.log("✅ DB connected:", rows);
    } catch (err) {
        console.error("❌ DB connection failed:", err.message);
    }
}

testDB();
