import { Request, Response } from "express";
import db from "../db/query/posts";
import "dotenv/config";
const createPost = async (req: Request, res: Response) => {
  try {
    
    res.status(201).json({
      message: "Пост успешно создан.",
    });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
};
export default { createPost };
