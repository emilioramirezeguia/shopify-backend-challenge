const router = require("express").Router();

const Images = require("./imagesModel");

// get all images
router.get("/", (eq, res) => {
  Images.getAll()
    .then((images) => {
      res.status(200).json({ images });
    })
    .catch((error) => {
      console.log(error);
    });
});

// post an image
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

// delete an image by id
router.delete("/:id", (req, res) => {
  const id = req.params.id;

  Images.remove(id).then((response) => {
    res.status(204).end();
  });
});

module.exports = router;
