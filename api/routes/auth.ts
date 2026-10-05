import { Router } from "express";
import { Request, Response } from "express";
import usersController from "../controllers/usersController";
import upload from "../middlewares/upload";
import path from "path";
import authValidate from "../validation/authValidation";
const auth = Router();

auth.get("/test", (req, res) => res.json({ message: "GOlllOD" }));

auth.post(
  "/auth/register",
  upload.single("avatar"),
  authValidate.registerValidation,
  usersController.register,
);
auth.post("/auth/login", authValidate.loginValidation, usersController.login);
auth.patch(
  "/users/me",
  upload.none(),
  authValidate.updateValidation,
  usersController.updateField,
);
export default auth;
