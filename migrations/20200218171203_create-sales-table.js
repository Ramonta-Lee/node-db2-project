exports.up = function(knex) {
  return knex.schema.createTable("sales", tbl => {
    tbl.increments("id");
    tbl.integer("price");
    tbl
      .foreign("id")
      .references("id")
      .inTable("cars");
  });
};

exports.down = function(knex) {
 return knex.schema.dropTableIfExists("sales");
};
