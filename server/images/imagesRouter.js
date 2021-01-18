const router = require("express").Router();

const Images = require("./imagesModel");

router.post("/", (req, res) => {
  const image = req.body;

  Images.add(image)
    .then((image) => {
      res.status(201).json({ image });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
