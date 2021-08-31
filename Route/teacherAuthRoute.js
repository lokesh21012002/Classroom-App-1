const { Router } = require('express')
const bcrypt = require('bcrypt')
const Teacher=require('../Modal/teacherModal')
const jwt = require('jsonwebtoken')
const TeacherAuthRoute = Router();
TeacherAuthRoute.post('/login', (req, res) => {
    Teacher.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err
        if (!user)
            return res.json('user email/password is invalid' )
        if (!bcrypt.compareSync(req.body.password, user.password))
            return res.json('user email/password is invalid')
        const token = jwt.sign({ userId: user._id}, 'NULL')
        return res.json({ token: token ,isTeacher:true})
    })
})
TeacherAuthRoute.post('/register', (req, res) => {
    const HashPassword = bcrypt.hashSync(req.body.password, 10)
    const newUser = new Teacher({ name: req.body.name, password: HashPassword, email: req.body.email, institute: req.body.institute })
    newUser.save(err => {
        if (err)
            return res.json('email already exist')
        else
            return res.status(200).json('User is registed')
    })
})
module.exports = TeacherAuthRoute