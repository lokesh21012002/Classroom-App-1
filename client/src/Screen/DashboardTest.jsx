import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function DashboardTest() {
    const [tests, settests] = useState([])
    const data=JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        if (data.isTeacher)
        {
            axios.get('/api/teacher/test', { headers: { token: data.token } })
                .then(res => {
                console.log(res.data)
            }).catch(err=>{console.log(err)})
        }
        else {
            axios.get('/api/student/test', { headers: { token: data.token } })
                .then(res => {
                console.log(res.data)
            }).catch(err=>{console.log(err)})
        }
    }, [])
    return (
        <>
            <center><h2>Test's</h2></center>
            <div className="container">
                <div className="test-card shadow">
                    <div className="test-card-head">
                        <h3>Test Name</h3>
                        <h4>Subject Name</h4>
                    </div>
                    <div className="test-card-bottom">
                        <h5 style={{"color":"gray"}}>Institute</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
