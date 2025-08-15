import express, { Request, Response } from "express";
import http from "node:http";

const app = express();
const port = 3000;

const server = http.createServer(app);

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Server is running on docker container" });
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
