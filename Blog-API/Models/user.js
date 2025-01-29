const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')



const UserSchema = new Schema({

    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function (v) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    pw:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    }


})


UserSchema.pre("save", async function (next) {

    const user = this;
    const hash = await bcrypt.hash(user.pw, 10);

    this.pw = hash;
    next();

})


UserSchema.methods.isValidPassword = async function (pw) {

    const user = this;
    const compare = await bcrypt.compare(pw, user.pw);

    return compare;
    
}

const userModel = mongoose.model("users", UserSchema);

module.exports = userModel

