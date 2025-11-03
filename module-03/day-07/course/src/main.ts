import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import pool from "./lib/db";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api");

pool.connect((err, client, release) => {
  if (err) return console.error("Data failed to connect", err.stack);

  console.log("Database connected successfully");

  release();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
