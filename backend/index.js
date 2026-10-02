import express from "express";
import taskRoute from "./routes/taskRoute.js";
import cors from "cors";
const app = express();
import connectDB from "./config/db.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("server created successfully");
});

app.use("/api/task",taskRoute);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
    connectDB();
})