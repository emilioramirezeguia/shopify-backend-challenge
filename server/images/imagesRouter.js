const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Images router is up!" });
});

module.exports = router;
