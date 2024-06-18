const {Schema, model} = require('../connection')
const userSchema = new Schema({
    lname: String,
    fname: String,
    email: String,
    password: String,
    role: {type:String, default: "user"},
});
module.exports = model('users1', userSchema)