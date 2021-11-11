const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connect success db!');
  } catch(error) {
    console.log('Connect error!');
  }
}

module.exports = { connect };