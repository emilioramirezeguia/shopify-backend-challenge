const db = require("../data/dbConfig");

module.exports = {
  getAll,
  findByID,
  add,
  remove,
};

// get all images
function getAll() {
  return db("image");
}

// find image(s) by id
function findByID(id) {
  return db("image").where({ id }).first();
}

// add image(s) and return image with id
function add(image) {
  return db("image")
    .insert(image)
    .then((imageID) => {
      const id = imageID[0];
      return findByID(id);
    });
}

// find image(s) by id(s) and delete it
function remove(id) {
  return db("image").where({ id }).del();
}
