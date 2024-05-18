const mongoose = require("mongoose");

// setup the user schema
const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

// Creating model from above schema
const UserModel = mongoose.model("users", UserSchema);

// export the model
module.exports = UserModel;