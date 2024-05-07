const mongoose = require ('mongoose');
const authSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Name is required']
    },
    email: {
        type : String,
        required : [true, 'Email is required'],
    },
    password : {
        type : String,
        required: [true, 'Password is required'],
    },
    role :{
        type : Number,
        default: 0,
    }
},{timestamps: true})

const authModel = mongoose.model('AuthUser', authSchema);
module.exports = authModel;