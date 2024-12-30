import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import { DATABASE, PORT } from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();

app.use(cors());
app.use("/api", router);
app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
