const mongoose = require('mongoose');
const Schema = mongoose.Schema;


                             // mongo
                             // > use mongooseExample
                             //               |
mongoose.connect('mongodb://localhost/mongooseExample');


// MODEL: constructor function that interacts with a specific COLLECTION

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

// COLLECTION:  Cat -> cats  (db.cats.find(), etc.)
// Fields: name (type String)



// CREATE (C of CRUD)
const kitty = new Cat({
  name: 'Mr. Nibbles',
  age: 1,
  color: 'golden',
  isFed: true,
  favoriteToys: [ 'shoelaces', 'chocolate' ],
  birthday: new Date(2016, 3, 22)
});


  // db.cats.insertOne()
kitty.save((err) => {
  if (err) {
    console.log('OH NO SAVE ERROR AHHHHH!');
  }
  else {
    console.log('SUCCESSFUL SAVE!');
  }
});


// READ (R of CRUD)

  // db.cats.find()
Cat.find((err, catsList) => {
  if (err) {
    console.log('OH NO FIND ERROR!');
    return;
  }

  catsList.forEach((oneCat) => {
    console.log(` --> cat: ${oneCat.name} ${oneCat._id}`);
  });
});


// Cat.find(
//   { name: 'Mr. Bigglesworth' }, // CRITERIA OBJECT
//   { name: 1, _id: 0 },          // PROJECTION OBJECT
//   (err, catsList) => {
//     if (err) {
//       console.log('OH NO FIND ERROR!');
//       return;
//     }
//
//     catsList.forEach((oneCat) => {
//       console.log(` --> cat: ${oneCat.name} ${oneCat._id}`);
//     });
//   }
// );
