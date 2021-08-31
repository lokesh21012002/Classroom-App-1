import React from 'react'
import Login from '../components/Login'

export default function StudentLogin() {
    return (
        <Login heading="Student" endpoint="/api/student/login" link="/student/register"/>
        
    )
}
