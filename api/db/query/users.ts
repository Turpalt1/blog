import { error } from "console";
import pool from "../pool";

type USER = {
  username: string;
  email: string;
  password: string;
  avatar: string;
};
const insertUser = async (user: USER) => {
  const rows = await pool.query(
    "INSERT INTO users(username,password_hash, email,avatar) VALUES($1, $2, $3, $4);",
    [user.username, user.password, user.email, user.avatar],
  );
  return rows;
};
const existsEmail = async (email: string) => {
  const { rows } = await pool.query("SELECT id FROM users WHERE email = $1;", [
    email,
  ]);
  return rows.length;
};
const findUserOnEmail = async (email: string) => {
  const { rows } = await pool.query("SELECT * FROM users WHERE email = $1;", [
    email,
  ]);
  if (!rows.length) return false;
  return rows[0];
};
const updateUser = async (id: number, field: string, value: string) => {
  await pool.query("UPDATE users SET $2 = $3 WHERE id = $1;", [
    id,
    field,
    value,
  ]);
};

export default { insertUser, existsEmail, findUserOnEmail, updateUser };
