const db = require('./db/db.config');

db.execute("SELECT 1 + 1 AS result")
  .then(([rows]) => console.log("✅ DB connection works:", rows))
  .catch(err => console.log("❌ DB connection failed:", err.message));
