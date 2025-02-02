// database in mongodb

const mongoose = require("mongoose");
const { string } = require("zod");


mongoose.connect('mongodb+srv://Anjan:Ancient%407645@cluster0.7mroy.mongodb.net/piyush')

const todosSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model('todos', todosSchema);

module.exports = {
  todo
}