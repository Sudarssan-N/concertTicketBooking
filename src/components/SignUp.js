import React from "react";
import './SignUp.css';
function SignUp(){
    return(
        <div className="shadowbox">
            <h3 className="topic">SignUp</h3>
            <label className="ulabel">Name</label><br/>
            <input type="text" placeholder="Enter Your Name--"/>
            <br/> <br/>
            <label className="ulabel">Create Your Password</label><br/>
            <input type="password" placeholder="Enter Your Password--"/>
            <br/> <br/>
            <label className="ulabel">MailId</label><br/>
            <input type="Mail" placeholder="Enter Your MailId--"/>
            <br/> <br/>
            <label className="ulabel">Mobile Number</label><br/>
            <input type={Number} placeholder="Enter Your Number--"/>
            <br/> <br/>
            <button type="submit">Submit</button>
        </div>
    );
}
export default SignUp