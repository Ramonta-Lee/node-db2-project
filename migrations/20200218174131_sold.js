exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.boolean("sold").defaultTo(false);
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", tbl => {
    tbl.dropColumn("sold");
  });
};
