import React,{useState} from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import Alert from './Alert'

export default function Login(props) {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [response, setresponse] = useState('')
  const HandleSumbit = (e) => {
    e.preventDefault()
    axios.post(props.endpoint, { email, password })
      .then(res => {
        const token = res.data
        const isTeacher = res.data.isTeacher
        localStorage.setItem('isTeacher',JSON.stringify(isTeacher))
        localStorage.setItem('token', JSON.stringify(token))
        window.location.href='/'
      })
      .catch(err=>{setresponse(err)})
  }
  return (
    <div>
      {response && <Alert msg={ response}/>}
      <div className="box">
        <h2>Login {props.heading}</h2>
        <form>
          <div className="inputBox">
            <input type="text" name="" required="" value={email} onChange={e=>setemail(e.target.value)}/>
            <label for="">Email</label>
          </div>
          <div className="inputBox">
            <input type="password" name="" required="" value={password} onChange={e=>setpassword(e.target.value)}/>
            <label for="">Password</label>
          </div>
          <div className="container">
            <input type="submit" name="" value="Login" onClick={HandleSumbit}></input>
            <Link to={props.link}>
              <input type="submit" name="" value="Register" style={{}}></input>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
