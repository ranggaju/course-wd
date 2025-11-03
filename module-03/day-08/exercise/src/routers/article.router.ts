import { Router } from "express";
import { getArticleList } from "../controllers/article.controller";

const articleRouter = Router();

articleRouter.get("/", getArticleList);

export default articleRouter;
