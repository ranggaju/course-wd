import { Router } from "express";
import articleRouter from "./article.router";

const router = Router();

router.use("/articles", articleRouter);

export default router;
