const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authMiddleware = require("./middlewares/authMiddleware"); // Import middleware
const assignmentRoutes = require("./routes/assignmentRoutes"); // Import routes

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ Use the assignment routes
app.use("/api/assignments", assignmentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
