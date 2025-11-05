import { Router } from "express";
import {
  getAllArticleController,
  getArticleByIdController,
  createArticleController,
  updateArticleController,
  deleteArticleController,
} from "../controllers/article.controller";
import { authMiddleware, roleGuard } from "../middleware/auth.middleware";
import { uploader } from "../utils/uploader";
import { validateRequest } from "../middleware/validate.middleware";
import { articleCreateSchema } from "../schemas/article.schema";

const articleRouter = Router();

articleRouter.get("/", authMiddleware, getAllArticleController);
articleRouter.get("/:id", authMiddleware, getArticleByIdController);
articleRouter.post(
  "/",
  authMiddleware,
  roleGuard(["ADMIN"]),
  uploader("memory", "ART", "articles").single("image"),
  validateRequest(articleCreateSchema),
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
