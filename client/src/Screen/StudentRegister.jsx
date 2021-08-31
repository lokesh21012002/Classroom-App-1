import React from 'react'
import Register from '../components/Register'

export default function StudentRegister() {
    return (
        <Register heading="Student" endpoint="/api/student/register" redirect="/student/login"/>
        
    )
}
