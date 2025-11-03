import { Router } from "express";
import articleRouter from "./article.router";

const router = Router();

router.use("/article", articleRouter);

export default router;
