import axios from 'axios'
import React, { useState } from 'react'

export default function JoinClass() {
    const [subjectName, setsubjectName] = useState('')
    const [code, setcode] = useState('')
    const data=JSON.parse(localStorage.getItem('token'))
    const HandleSubmit = (e) => {
        e.preventDefault()
        axios.post('/api/student/enrollclass', { token: data.token, subjectName, code })
            .then(res => { console.log(res.data) })
            .catch(err=>{console.log(err)})
    }
    return (
        <>
           <div className="box">
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required="" type={subjectName} onChange={ e=>{setsubjectName(e.target.value)}}/>
                        <label for="">Subject Name</label>
                    </div>
                     <div className="inputBox">
                        <input type="text" name="" required="" type={code} onChange={ e=>{setcode(e.target.value)}}></input>
                        <label for="">Code</label>
                    </div>
                    <input type="submit" value="Enroll Class" onClick={HandleSubmit}/>
                </form>
            </div>  
        </>
    )
}
