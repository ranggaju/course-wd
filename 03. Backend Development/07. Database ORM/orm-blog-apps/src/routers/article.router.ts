import { Router } from "express";
import {
  createArticleController,
  deleteArticleController,
  getAllArticleController,
  getArticleByIdController,
  updateArticleController,
} from "../controllers/article.controller";
import { authMiddleware, roleGuard } from "../middleware/auth.middleware";

const articleRouter = Router();

articleRouter.get("/", authMiddleware, getAllArticleController);
articleRouter.get("/:id", authMiddleware, getArticleByIdController);
articleRouter.post(
  "/",
  authMiddleware,
  roleGuard(["ADMIN"]),
  createArticleController
);
articleRouter.patch(
  "/:id",
  authMiddleware,
  roleGuard(["ADMIN"]),
  updateArticleController
);
articleRouter.delete(
  "/:id",
  authMiddleware,
  roleGuard(["ADMIN"]),
  deleteArticleController
);

export default articleRouter;
