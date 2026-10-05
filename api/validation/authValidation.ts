import { body } from "express-validator";

const registerValidation = [
  body("username", "Имя должно быть от 3 символов").isLength({ min: 3 }),
  body("email", "Неверный формат почты").isEmail().isLength({ min: 3 }),
  body("password", "Пароль должен быть от 3 до 20 символов").isLength({
    min: 3,
    max: 20,
  }),
  body("avatar").optional().isString(),
];
const loginValidation = [
  body("email", "Неверный формат почты").isEmail().isLength({ min: 3 }),
  body("password", "Пароль должен быть от 3 символов").isLength({
    min: 3,
    max: 20,
  }),
];
const updateValidation = [
  body("username", "Имя должно быть от 3 символов").isLength({ min: 3 }),
  body("avatar").optional().isString(),
];
export default { registerValidation, loginValidation, updateValidation };
