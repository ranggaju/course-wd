console.log(">>> article.controller.ts loaded");

import { Request, Response } from "express";
import { readJson } from "../utils";
import { IArticle } from "../interfaces";

// create new article

// update article
// get article list
export const getArticleList = (req: Request, res: Response) => {
  try {
    const data = readJson<{ articles: IArticle[] }>();
    const articleList = data.articles.map(({ title, desc }) => ({
      title,
      desc,
    }));

    res.json({
      message: "OK",
      data: articleList,
    });
  } catch (err: any) {
    res.status(400).json({
      message: "NG",
      error: err.message,
    });
  }
};

// get article details

// delete article
