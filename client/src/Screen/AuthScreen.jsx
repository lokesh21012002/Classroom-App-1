import React from 'react'

export default function AuthScreen(Component:any) {
    return (props) => {
        const token = localStorage.getItem('token')
        if (!token)
            window.location.href = '/login'
        return <Component {...props}/>
    }
}
