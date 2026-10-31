import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Routes Import (Later you will create these files)
// import authRoutes from "./routes/authRoutes.js";
// import referralRoutes from "./routes/referralRoutes.js";

// Config
dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Server Running 🚀");
});

// Routes Use
// app.use("/auth", authRoutes);
// app.use("/referral", referralRoutes);

// Server Start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
