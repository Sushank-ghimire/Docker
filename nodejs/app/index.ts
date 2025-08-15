import express, { Request, Response } from "express";
import http from "node:http";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();
const port = process.env.PORT;

const server = http.createServer(app);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const secret = process.env.SECRET_KEY || "key not found";
  res.json({ message: "Server is running on docker container" });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
