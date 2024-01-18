const mongoose = require('mongoose');
var crypto = require('crypto');

const usersSchema = new mongoose.Schema({
    UserName:{
        type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true
    },
    email:{
        type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true
    },
    Password:{
        type: Number,
        requred: true
    }


},{ timestamps:true })



usersSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

module.exports = mongoose.model("UserModel", usersSchema);
