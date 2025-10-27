import express, { Request, Response } from "express";
import cors from "cors";
import articleRouter from "./router/article.router";

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/articles", articleRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
