const mongoose = require('mongoose')
const Schema = mongoose.Schema
const teacherModal = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    institute:{type:String,required:true}
})
module.exports=Teacher=mongoose.model('user',teacherModal)