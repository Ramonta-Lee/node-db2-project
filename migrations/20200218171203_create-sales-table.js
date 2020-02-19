// const CarTable = require("./20200218153237_create-car-dealer-table");

exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments();
    tbl.integer("price");
    tbl
      .boolean("is_sold")
      // .foreign("id")
      .references("sold")
      .inTable("cars");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("sales");
};
