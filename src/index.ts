import express, { Express } from "express";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import cors from "cors";
import RegisterUser from "./Controllers/RegisterUser";

dotenv.config();
const app: Express = express();
const port = process.env.PORT || 3000;

const SESSION_SECRET_KEY = process.env.SESSION_SECRET_KEY;

if (!SESSION_SECRET_KEY) {
  throw new Error("Missing SESSION_SECRET_KEY. Check the .env file.");
}

app.use(cors({ credentials: true, origin: "" }));

app.use(
  session({
    secret: SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/register", RegisterUser);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
