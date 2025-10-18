import express from "express";
import logger from "morgan";
import cors from "cors";
import { router as imagesRouter } from "./routes/api/imagesRouter.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.head('/keepalive', (req, res) => {
  console.log(' Keepalive ping received at', new Date().toISOString());
  res.sendStatus(200);
});

app.use("/api/images", imagesRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _req, res, _next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export { app };
