import React, { useState } from 'react'
import axios from 'axios'

export default function CreateTest() {
    const [name, setname] = useState('')
    const [subjectName, setsubjectName] = useState('')
    const [date, setdate] = useState('')
    const [link, setlink] = useState('')
    const data=JSON.parse(localStorage.getItem('token'))
    const HandleSubmit = (e) => {
        axios.post('/api/teacher/create/test', { subjectName,name, token: data.token })
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
                        <label for="">Test Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="" value={subjectName} onChange={ e=>setsubjectName(e.target.value)}/>
                        <label for="">Subject Name</label>
                    </div>
                    <div className="inputBox">
                        <input type="date" name="" required="" value={date} onChange={ e=>setdate(e.target.value)}/>
                        <label for="">Date</label>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="" value={link} onChange={ e=>setlink(e.target.value)}/>
                        <label for="">Link</label>
                    </div>
                    <input type="submit" value="Create" onClick={ HandleSubmit}/>
                </form>
            </div>
        </>
    )
}
