import { IArticlePayload } from "../interfaces/article.interface";
import pool from "../lib/db";

const titleToSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
};

const getArticleByTitle = async (title: string) => {
  try {
    const query = await pool.query("SELECT * FROM article where title = $1", [
      title,
    ]);
    const article = query.rows[0];

    return article;
  } catch (err) {
    throw err;
  }
};

export const getAllArticle = async () => {
  try {
    const query = await pool.query("SELECT * FROM article");
    const article = query.rows;

    return article;
  } catch (err) {
    throw err;
  }
};

export const getArticleById = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

export const createArticle = async ({
  title,
  description,
  content,
  cover_img,
}: IArticlePayload) => {
  try {
    const isExist = await getArticleByTitle(title);

    if (isExist) throw new Error("Article with that title already exist");

    await pool.query(
      "INSERT INTO article (title, description, content, cover_img, slug) values($1, $2, $3, $4, $5)",
      [title, description, content, cover_img, titleToSlug(title)]
    );
  } catch (err) {
    throw err;
  }
};

export const updateArticle = async () => {
  try {
  } catch (err) {
    throw err;
  }
};

export const deleteArticle = async () => {
  try {
  } catch (err) {
    throw err;
  }
};
