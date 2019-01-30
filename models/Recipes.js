const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipesSchema = new Schema({
  author: String,
  name: String,
  ingredients: String,
  instructions: String,
  notes: String,
  song: String,
  artist: String,
  image: String
})

module.exports = mongoose.model('Recipes', recipesSchema)
