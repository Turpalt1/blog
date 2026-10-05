import { Request, Response } from "express";
import path from "path";
import multer from "multer";
type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, filename: string) => void;

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    cb: DestinationCallback,
  ) => {
    const category = req.path.includes("register")
      ? "avatar"
      : req.path.includes("update")
        ? "avatar"
        : "chats";
    cb(null, path.join(process.cwd(), "/uploads/" + category));
  },
  filename: (req: Request, file: Express.Multer.File, cb: FileNameCallback) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter(req, file, cb) {
    const allowed = ["image/png", "image/jpeg", "image/jpg"];
    if (allowed.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Только изображения"));
    }
  },
});

export default upload;