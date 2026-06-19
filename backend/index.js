const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/url");

const { connectMongo } = require("./connect");

// connection to mongoDB
connectMongo("mongodb://localhost:27017/short-url")
  .then(() => console.log("mongo connected...@@..."))
  .catch((err) => console.log("mongo connection error:", err));

// CORS configuration
const whiteList = { origin: ["http://localhost:5173"] };

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors(whiteList));
app.use(express.json());

app.use("/url", routes);

// middleware
app.use("/", (req, res, next) => {
  console.log("Middleware is running...");
  res.send("server is a ready");
});

const port = process.env.PORT || 3000;

app.listen(port, (req, res) => {
  console.log(`Server is running at localhost:${port}`);
});
