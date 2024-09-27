
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments('id')
      tbl.text('recipe_name')
        .unique()
    })
    .createTable('steps', tbl => {
      tbl.increments('id')
      tbl.integer('step_number')
      tbl.text('instructions')
      tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
    .createTable('ingredients', tbl => {
      tbl.increments('id')
      tbl.text('ingredient')
    })  
    .createTable('step_ingredients', tbl => {
      tbl.increments('id')
      tbl.decimal('quantity')
      tbl.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      tbl.integer('step_id')
        .unsigned()
        .references('id')
        .inTable('steps')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
