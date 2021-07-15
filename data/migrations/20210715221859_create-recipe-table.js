
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl.text('recipe_name')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
};
