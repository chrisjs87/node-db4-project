
exports.seed = function(knex) {
  return knex('recipes').del()
    .then(function () {
      return knex('recipes').insert([
        {recipe_name: 'Scrambled Eggs'},
      ]);
    });
};
