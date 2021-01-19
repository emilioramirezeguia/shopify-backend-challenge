exports.up = function (knex) {
  return knex.schema.createTable("image", function (image) {
    image.increments();
    image.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("image");
};
