
exports.seed = function(knex) {
  return knex('steps').del()
    .then(function () {
      return knex('steps').insert([
        {step_number: 1, instructions: 'Prep stove', recipe_id: 1},
        {step_number: 2, instructions: 'Scramble eggs', recipe_id: 1},
        {step_number: 3, instructions: 'Cook eggs in pan', recipe_id: 1},
      ]);
    });
};
