import React from "react";
import './Signin.css';
function Signin(){
    return(
        <div className="formbox">
            <form>
                <h3 className="topic"> Signin</h3>
                <br/>
                <label className="slabel">UserName</label>
                <br/>
                <input type="text" placeholder="Enter Your Username--"/>
                <br/><br/>
                <label className="slabel">Password</label>
                <br/>
                <input type="password" placeholder="Enter Your Password"/>
                <br/><br/>
                <button type="button">Submit</button>
            </form>
        </div>
    );
}
export default Signin