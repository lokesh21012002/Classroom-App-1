const mongoose = require('mongoose')
const Schema = mongoose.Schema
const createClassModal = new Schema({
    subjectName: { type: String, required: true },
    time: { type: String, required: true },
    code: { type: String, required: true },
    enrolledBy: { type: Schema.Types.ObjectId, ref: 'student',default:null},
    teacher:{type:Schema.Types.ObjectId,ref:'teacher'}
})
module.exports=createClass=mongoose.model('createclass',createClassModal)