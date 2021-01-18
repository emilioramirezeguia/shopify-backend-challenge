const db = require("../data/dbConfig");

module.exports = {
  add,
  remove,
};

// add image(s) and return it
function add(imageURL) {
  return db("images").insert(imageURL).returning("id");
}

// find image(s) by id and delete it
function remove(filter) {
  return db("images").where(filter).orderBy("id");
}
