const db = require("../data/dbConfig");

module.exports = {
  findByID,
  add,
  remove,
};

// get image(s) by id
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
function remove(filter) {
  return db("image").where(filter).orderBy("id");
}
