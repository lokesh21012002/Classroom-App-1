import React, { useState, useEffect } from 'react'
import axios from 'axios'
export default function DashboardClass() {
    const data = JSON.parse(localStorage.getItem('token'))
    const [classes, setclasses] = useState([])
    useEffect(() => {
        if (data.isTeacher) {
            axios.get('/api/teacher/classes', { headers: { token: data.token } })
                .then(res => {
                    setclasses(res.data.classes)
                })
        }
        else {
            axios.get('/api/student/enrollclass', { headers: { token: data.token } })
                .then(res => {
                    setclasses(res.data.class)
                })
        }
    }, [])
    return (
        <>
            <center><h2>Classes</h2></center>
            <div className="container">
                {
                    classes.map(Class => (
                        <div className="card shadow">
                            <div className="card-head">
                                <h3>{Class.subjectName}</h3>
                                <h5 style={{ "color": "gray" }}>{Class.time}</h5>
                            </div>
                            <div className="card-bottom">
                                <h5 style={{ "color": "gray" }}>code: {Class.code}</h5>
                                <button className="btn btn-info">Start Now</button>
                            </div>
                        </div>
                    ))
                    }
            </div>
        </>
    )
}
