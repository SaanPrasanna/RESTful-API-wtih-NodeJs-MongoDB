require("dotenv/config");
const options = require("dotenv/lib/env-options");
const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const PostRoutes = require("./routes/api/posts");
const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.use("/api/posts", PostRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("SERVER RUN WITH PORT " + process.env.PORT);
});
