import { Router } from "express";
import {
  createArticleController,
  deleteArticleController,
  getAllArticleController,
  getArticleByIdController,
  updateArticleController,
} from "../controllers/article.controller";

const articleRouter = Router();

articleRouter.get("/", getAllArticleController);
articleRouter.get("/:id", getArticleByIdController);
articleRouter.post("/", createArticleController);
articleRouter.patch("/:id", updateArticleController);
articleRouter.delete("/:id", deleteArticleController);

export default articleRouter;
