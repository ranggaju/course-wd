"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleList = void 0;
console.log(">>> article.controller.ts loaded");
const utils_1 = require("../utils");
const getArticleList = (req, res) => {
    try {
        const data = (0, utils_1.readJson)();
        res.json({
            message: "OK",
            data: data.articles,
        });
    }
    catch (err) { }
};
exports.getArticleList = getArticleList;
