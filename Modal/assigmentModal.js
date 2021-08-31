const mongoose = require('mongoose')
const Schema = mongoose.Schema
const assigmentModal = new Schema({
    name: { type: String, required: true },
    subjectName: { type: String, required: true },
    done: { type: Boolean, default: false },
    class:{type:Schema.Types.ObjectId,ref:"createclass"},
    creator:{ type:Schema.Types.ObjectId,ref:"teacher" }
})
module.exports=Assigment=mongoose.model('assigment',assigmentModal)