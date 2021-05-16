const { Schema } = require('mongoose');

const mailSchema = new Schema({
  subject: String,
  content: String,
  receiver: String
});

module.exports = mailSchema;