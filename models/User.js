const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  userId: {
    type: String
  },
  userName: {
    type: String
  },
  adminName: {
    type: String
  },
  softwareList: {
    type: Array
  }
});
module.exports = User = mongoose.model('user', UserSchema, 'User_List');
