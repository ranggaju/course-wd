import express, { Request, Response } from "express";
import cors from "cors";
import articleRouter from "./routers/article.router";
import helmet from "helmet";

const app = express();
const PORT = process.env.PORT || 8080;

// middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// routes
app.use("/articles", articleRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
