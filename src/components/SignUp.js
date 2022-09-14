import React from "react";
function SignUp(){
    return(
        <div className="shadowbox">
            <h3 className="topic">Welcome to SignUp Page!</h3>
            <label className="ulabel">Name</label><br/>
            <input type="text" placeholder="Enter Your Name--"/>
            <label className="ulabel">Create Your Password</label><br/>
            <input type="password" placeholder="Enter Your Password--"/>
            <label className="ulabel">MailId</label><br/>
            <input type="email" placeholder="Enter Your MailId--"/>
            <label className="ulabel">Mobile Number</label><br/>
            <input type={Number} placeholder="Enter Your Number--"/>
            <button type="submit">Submit</button>
        </div>
    );
}
export default SignUp