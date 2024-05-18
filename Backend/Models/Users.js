const {Schema, model} = require('../connection')
const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});
module.exports = model('users1', userSchema)