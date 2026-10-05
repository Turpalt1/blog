import express from "express";
import "dotenv/config";
import auth from "./routes/auth";
import posts from "./routes/posts";
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(auth);
app.use(posts);
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
