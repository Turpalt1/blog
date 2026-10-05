import { Router } from "express";
import { Request, Response } from "express";
import postController from "../controllers/postsController";
import multer from "multer";
import path from "path";
const posts = Router();
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

// posts.post("/posts");
export default posts;
