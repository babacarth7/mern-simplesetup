import express from "express";
import path from "path";
import { MongoClient } from "mongodb";
import devBundle from "./dev.bundle";
import template from "../template";

const CURRENT_WORKING_DIR = process.cwd();

const app = express();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));
devBundle.compile(app);

app.get("/", (req, res) => {
  res.status(200).send(template());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log("Server started on port %s.", PORT);
});

const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/mernsimplesetup";
MongoClient.connect(URI, (err, db) => {
  if (err) {
    console.log(err);
  }
  console.log("Connected successfully to mongodb server");
  db.close();
});
