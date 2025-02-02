import "dotenv/config";
import "./db.js";

import express from "express";
import routes from "./routes/index.js";

const app = express();

app.use("/api", routes);

//Handle 404

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

//Handle 500

app.use((req, res, next) => {
  res.status(500).send("Internal server error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
