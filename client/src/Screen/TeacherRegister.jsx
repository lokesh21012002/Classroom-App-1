import React from 'react'
import Register from '../components/Register'

export default function TeacherRegister() {
    return (
        <Register heading="Teacher" endpoint="/api/teacher/register" redirect="/teacher/login"/>
        
    )
}
