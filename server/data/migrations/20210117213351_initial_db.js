exports.up = function (knex) {
  return knex.schema.createTable("images", function (images) {
    images.increments();
    images.string("url").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("images");
};
