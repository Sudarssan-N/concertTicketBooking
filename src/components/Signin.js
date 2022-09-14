import React from "react";
import './Signin.css';
function Signin(){
    return(
        <div className="formbox">
            <form>
                <h3 className="topic">Welcome to Signin Page!</h3>
                <br/>
                <label className="slabel">UserName</label>
                <div></div>
                <input type="text" placeholder="Enter Your Username--"/>
                <div></div>
                <label className="slabel">Password</label>
                <input type="password" placeholder="Enter Your Password"/>
                <br/>
                <button type="button">Submit</button>
            </form>
        </div>
    );
}
export default Signin