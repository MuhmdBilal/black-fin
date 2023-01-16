const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
// const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
    userName : {type :String, required: [true, 'Please add a Name']},
    email : String,
    password: String
})



// encrypting password before saving
UserSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password, 10);
 });

// verify password
UserSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

module.exports = mongoose.model("SignUp", UserSchema)