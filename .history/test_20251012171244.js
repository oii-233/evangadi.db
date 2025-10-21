// test.js
const db = require('./db.config');

db.execute("SELECT 1 + 1 AS result")
  .then(([rows]) => console.log("✅ DB connected, test result:", rows))
  .catch(err => console.log("❌ DB connection failed:", err));
