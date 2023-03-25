import { useState } from "react"

const signup=()=>{
    const [email,setEmail]=useState('')
    const [emailValidated,setEmailValidated]=useState(false)
    
    const [password,setPassword]=useState('')
    const [passwordValidated,setPasswordValidted]=useState(false)
    
    const [confirmPassword,setConfirmPassworf]=useState('')
    const [confirmPasswordValidated,setConfirmPasswordValidated]=useState(false)

    function validateEmail(email){
        let index_of_at = email.indexOf('0')
        let index_of_dot=email.lastIndexOf('.')
        return(index_of_at>0 && index_of_dot &&index_of_dot>index_of_at)
    }
    function validatePassword(password){
        return password.length >=8
    }

    function validatePassword(password,confirmPassword){
        return password===confirmPassword
    }
    
    function handleEmailChange(e){
        let email_value = e.target.value 
        setEmail(email_value)
        setEmailValidated( validateEmail(email_value))
    }

    function handlePasswordChange(e){
        let password_value = e.target.value 
        setPassword(password_value)
        setPasswordValidated( validatePassword(password_value))
    }

    function handleConfirmPasswordChange(e){
        let confirmPassword_value = e.target.value 
        setconfirmPassword(confirmPassword_value)
        setConfirmPasswordValidated( validateConfirmPassword(password, confirmPassword_value))
    }

   function handleSubmit(e){
    e.preventDefault()

    if(emailValidated==true && passwordValidated&&confirmPasswordValidated){
        alert("form submitted Successfully")
    }
    else{
        alert("cant submit the form")
    }
   } 

   return(
    <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
             type="email" 
             id="email" 
             value="email"
             onChange={handleEmailChange} 
             className={emailValidated==true?"is-valid":"is-invalid"}>
                </input>
        </div>
        <div className="form-group">
            <label htmlFor="password">
                Password
            </label>
            <input
             type="password" 
             id="password" 
             value="password"
             onChange={handlePasswordChange} 
             className={passwordValidated==true?"is-valid":"is-invalid"}>
                </input>
        </div>

        <div className="form-group">
            <label htmlFor="confirmPassword">
                confirmPassword
            </label>
            <input
             type="password" 
             id="confirm-Password" 
             value="confirmPassword" 
             onChange={handleConfirmPasswordChange} 
             className={confirmPasswordValidated==true?"is-valid":"is-invalid"}>
                </input>
        </div>
        <button type="submit " className="btn-primary">submit</button>
    </form>
   
   )



}




export default signup