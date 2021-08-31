import React, { useState } from 'react'
import axios from 'axios'
export default function CreateAssigement() {
    const [name, setname] = useState('')
    const [subjectName, setsubjectName] = useState('')
    const data=JSON.parse(localStorage.getItem('token'))
    const HandleSubmit = (e) => {
        axios.post('/api/teacher/create/assigment', { subjectName,name, token: data.token })
            .then(res => {
                console.log(res.data)
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <div className="box">
                <form>
                    <div className="inputBox">
                        <input type="text" name="" required="" value={name} onChange={ e=>setname(e.target.value)}/>
                        <label for="">Name</label>
                    </div>
                     <div className="inputBox">
                        <input type="text" name="" required="" value={subjectName} onChange={ e=>setsubjectName(e.target.value)}/>
                        <label for="">Subject Name</label>
                    </div>
                    <input type="submit" value="Create" onClick={ HandleSubmit}/>
                </form>
            </div>
        </>
    )
}
