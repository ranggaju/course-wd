import { Router } from "express";
import userRouter from "./user.router";
import articleRouter from "./article.router";

const router = Router();

router.use("/users", userRouter);
router.use("/articles", articleRouter);

export default router;
