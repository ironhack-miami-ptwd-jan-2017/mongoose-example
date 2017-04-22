const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: String,
  age: Number,
  color: String,
  isFed: Boolean,
  favoriteToys: Array,
  birthday: Date
});

const Cat =
  mongoose.model(
    'Cat',        // <-- NAME of the model (for mongoose to keep track of)
    catSchema     // <-- SCHEMA of the model (the structure that the docs will have)
  );

module.exports = Cat;
