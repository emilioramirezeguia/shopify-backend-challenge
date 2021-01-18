const express = require("express");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up and running." });
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
