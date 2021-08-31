const { Router } = require('express')
const jwt = require('jsonwebtoken')
const createClass = require('../Modal/createClassModal')
const Test = require('../Modal/testModal')
const Assigment = require('../Modal/assigmentModal')
const studentRoute = Router()
studentRoute.post('/enrollclass', (req, res) => {
    jwt.verify(req.body.token, "NULL", (err, decoded) => {
        if (err) throw err
        createClass.findOne({ subjectName: req.body.subjectName, code: req.body.code }, (err, docs) => {
            if (err) throw err
            docs.enrolledBy = decoded.userId
            docs.save(err => {
                if (err) throw err
                res.json("Class Enrolled")
            })
        })
        
    })
})
studentRoute.get('/enrollclass', (req, res) => {
    jwt.verify(req.headers.token, "NULL", (err, decoded) => {
        if (err) throw err
        createClass.find({ enrolledBy: decoded.userId }, (err, docs) => {
            if (err) throw err
            res.json({ class: docs })
        })
    })
})
studentRoute.get('/assigment', (req, res) => {
    jwt.verify(req.headers.token, "NULL", (err, decoded) => {
        if (err) throw err
        createClass.find({ enrolledBy: decoded.userId }, (err, docs) => {
            if (err) throw err
            Assigment.find({ class: docs._id }, (err, result) => {
                if (err) throw err
                res.json({ assigment: result })
            })
        })
    })
})
studentRoute.get('/test', (req, res) => {
    jwt.verify(req.headers.token, "NULL", (err, decoded) => {
        if (err) throw err
        createClass.find({ enrolledBy: decoded.userId }, (err, docs) => {
            if (err) throw err
            Test.find({ class: docs._id }, (err, result) => {
                if (err) throw err
                res.json({ test: result })
            })
        })
    })
})
module.exports = studentRoute