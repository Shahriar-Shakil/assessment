// import cors from "cors";
import express from "express";
import db from "./app/models/index.js";
import router from "./app/routes/api.js";

const port = 5000;
const app = express();

// app.use(cors());
app.use(express.json());
app.use("/api", router);

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
