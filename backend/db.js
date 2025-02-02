// database in mongodb

const mongoose = require("mongoose");
const { string } = require("zod");


mongoose.connect('url')

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model('todos', todosSchema);

module.exports = {
  todo
}