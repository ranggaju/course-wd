"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const article_controller_1 = require("../controller/article.controller");
const articleRouter = (0, express_1.Router)();
articleRouter.get("/", article_controller_1.getArticleList);
exports.default = articleRouter;
