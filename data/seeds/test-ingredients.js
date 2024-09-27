
exports.seed = function(knex) {
  return knex('ingredients').del()
    .then(function () {
      return knex('ingredients').insert([
        {ingredient: 'Egg'},
      ]);
    });
};
