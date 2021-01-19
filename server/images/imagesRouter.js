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

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Images.remove(id).then((response) => {
    res.status(204).end();
  });
});

module.exports = router;
