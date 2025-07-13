import React, { useRef } from 'react'
import '../assets/styles/landingpage.css'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    let formData=useRef()
    let navigate=useNavigate()

    let handleLogin=(e)=>{
        e.preventDefault()
        let emailField=formData.current[0]
        let passwordField=formData.current[1]

        let credentials={
            email : 'admin@gmail.com',
            password : 'admin123'
        }
        let {email , password }=credentials

        let emailBool=emailField.value===email
        let passwordBool=passwordField.value===password

        if(emailBool && passwordBool){
            navigate('/portal')
        }
        else{
            let errBorder = 'solid 2px red'
            emailField.style.border = errBorder
            passwordField.style.border = errBorder
        }
    }
  return (
    <>
        <div className="landingpage">
            <div className="container">
                <h1>Login Page</h1>
                <form ref={formData} onSubmit={handleLogin}>
                    
                    <input type="email" placeholder='Enter Email Address'/>
                    <input type="password" placeholder='Enter password'/>

                    <button>Login</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default Landingpage