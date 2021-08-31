import React from 'react'
import Login from '../components/Login'

export default function TeacherLogin() {
    return (
    
        <Login heading="Teacher" endpoint="/api/teacher/login" link="/teacher/register"/>

        
    )
}
