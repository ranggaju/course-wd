import { Router, Request, Response, NextFunction } from "express";

const articles = [
  {
    id: 1,
    slug: "makan-sehat",
    title: "Makan sehat",
    content: "Makanlah makanan yang sehat",
    description: "Makan",
  },
  {
    id: 2,
    slug: "minum-sehat",
    title: "Minum sehat",
    content: "Minumlah minuman yang sehat",
    description: "Minum",
  },
];

const articleRouter = Router();

articleRouter.get("/:id", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const article = articles.filter((article) => article.id === Number(id))[0];

    res.json({
      message: "OK",
      data: article,
    });
  } catch (err) {
    next(err);
  }
});

articleRouter.post("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug, title, content, description } = req.body;

    articles.push({
      id: 3,
      slug,
      title,
      content,
      description,
    });

    res.json({
      message: "OK",
      data: articles,
    });
  } catch (err) {
    next(err);
  }
});

export default articleRouter;
