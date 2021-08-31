import React from "react";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  return (
    <div className="login-container" >
      <Link to="/student/login" style={{
        "textDecoration": "none", "color": "black", "backgroundColor"
    :"white","marginTop":"4rem"}}>
        <h2>As Student</h2>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AlL-wqCyJJYOXlUNiHhpJQHaHa%26pid%3DApi&f=1" alt=""/>
      </Link>
      <Link to="/teacher/login" style={{"textDecoration":"none","color":"black","backgroundColor"
    :"white","marginTop":"4rem"}}>
        <h2>As Teacher</h2>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.JswZOq7vdMSDgmbwytZonQHaHa%26pid%3DApi&f=1" alt="#"/>
      </Link>
    </div>
  );
}
