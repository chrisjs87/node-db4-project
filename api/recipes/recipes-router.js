const express = require('express')

// const db = require('../../data/db-config')
const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/:id', (req, res) => {
  Recipes.getRecipeById(req.params.id)
    .then(stuff => {res.json(stuff)})
})

module.exports = router;
