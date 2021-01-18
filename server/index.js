const express = require("express");
const morgan = require("morgan");

const imagesRouter = require("./images/imagesRouter");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running." });
});

server.use("/images", imagesRouter);

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
