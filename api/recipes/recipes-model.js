const db = require('../../data/db-config')

module.exports = {
  async getRecipeById(recipe_id) {
    const rows = await db('recipes as rec')
      .leftJoin('steps')
    return rows
  }
}