const mongoose  = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
   title:  String, 
   body:   String,
  
 });

const User = mongoose.model('user',userSchema);

module.exports = User;