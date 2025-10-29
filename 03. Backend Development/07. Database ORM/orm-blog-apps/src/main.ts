import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./routers";

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Route
app.use("/api", router);

// Error Middleware

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
