const express = require('express')
const app = express()
const path=require('path')
require('dotenv').config()
const mongoose = require('mongoose')
const TeacherAuthRoute = require('./Route/teacherAuthRoute')
const StudentAuthRoute = require('./Route/studentAuthRoute')
const teacherRoute = require('./Route/teacherRoute')
const studentRoute=require('./Route/studentRoute')
app.use(express.json())
app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
mongoose.connect(process.env.MONGODB_URI)
    .then(res=>{console.log('DB Connected')})
app.use('/api/student/',StudentAuthRoute)
app.use('/api/teacher/', TeacherAuthRoute)
app.use('/api/teacher/', teacherRoute)
app.use('/api/student/', studentRoute)
if (process.env.NODE_ENV === 'production')
{
    app.use(express.static(path.join(__dirname, "client/build")))
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "client/build", "index.html"))
    })
}
const port=process.env.PORT || 5000
app.listen(port, () => { console.log('Server Started...') })