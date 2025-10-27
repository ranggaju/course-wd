import { Router } from "express";
import { getArticleList } from "../controller/article.controller";

const articleRouter = Router();

articleRouter.get("/", getArticleList);

export default articleRouter;
