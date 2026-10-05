import { Request, Response } from "express";
import db from "../db/query/users";
import "dotenv/config";
import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

const register = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
      avatar: req.body.avatar,
    };
    const checkEmail = await db.existsEmail(user.email);
    if (checkEmail)
      return res
        .status(409)
        .json({ message: "Это почта уже зарегистрирована!" });
    await db.insertUser(user);
    res.status(201).json({ message: "Пользователь успешно зарегистрирован!" });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }
    const user = await db.findUserOnEmail(req.body.email);
    if (!user) return res.status(401).json({ message: "Неверный почта или пароль" });
    console.log('there', user);
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user["password_hash"],
    );
    if (!isPasswordValid)
      return res.status(401).json({ message: "Неверный почта или пароль" });

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT secret is not configured");
    }
    const token = jwt.sign({ data: user.id }, secret, {
      expiresIn: "15m",
    });
    res.status(200).json({ message: "Успешно", token });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера", error });
  }
};

const updateField = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors.array());
    }
    await db.updateUser(req.body.id, req.body.field, req.body.value);
    res.status(200).json({ message: "Успешно" });
  } catch (error) {
    res.status(500).json({ message: "Внутренняя ошибка сервера" });
  }
};

export default { register, login, updateField };
