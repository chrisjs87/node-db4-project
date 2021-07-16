
exports.seed = function(knex) {
  return knex('step_ingredients').del()
    .then(function () {
      return knex('step_ingredients').insert([
        {quantity: 3, ingredient_id: 1, step_id: 2},
      ]);
    });
};
