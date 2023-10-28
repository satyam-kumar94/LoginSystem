import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function ForgotPassword(){
    const history = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const emalVal = e.target.email.value;
        sendPasswordResetEmail(getAuth,emalVal).then(data=>{
            alert("Check your gmail")
            history("/")
        }).catch(err=>{
            alert(err.code) 
        })
    }
    return(
        <div className="App">
            <h1>Forget Password</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input name="email" /><br/><br/>
                <button>Reset</button>
            </form>
        </div>
    )
}
export default ForgotPassword;