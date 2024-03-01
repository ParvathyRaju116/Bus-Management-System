import React, { useState } from 'react';
import './Auth.css';
import { registerApi } from '../../../SERVICES/AllAPI';

function Auth() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const [authData , setAuthData]=useState({
     name:"",
     phone:"",
     address:"",
     email_address:"",
     username:"",
     password:""
  })

  console.log(authData);

  // register
  const handleRegister=async(e)=>{
    e.preventDefault()
    const {name,phone,address,email_address,username,password}=authData
    const response = registerApi(authData)
    console.log(response);
  }


  // login
  const handleLogin=async(e)=>{
    e.preventDefault()

  }




  return (
    <div className='auth-Container'>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="" onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={authData.name} onChange={(e)=>setAuthData({...authData,name:e.target.value})} required/>
            <input type="tel" placeholder='Phone Number' value={authData.phone} onChange={(e)=>setAuthData({...authData,phone:e.target.value})} required/>
            <input type="text" placeholder='Address' value={authData.address} onChange={(e)=>setAuthData({...authData,address:e.target.value})} required/>
            <input type="email" placeholder="Email" value={authData.email_address} onChange={(e)=>setAuthData({...authData,email_address:e.target.value})} required/>
            <input type="text" placeholder='UserName' value={authData.username} onChange={(e)=>setAuthData({...authData,username:e.target.value})} required/>
            <input type="password" placeholder="Password" value={authData.password} onChange={(e)=>setAuthData({...authData,password:e.target.value})} required/>
            <button >Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="" onSubmit={handleRegister}>
            <h1>Sign in</h1>
          
            <input type="text" placeholder="User Name" value={authData.email_address} onChange={(e)=>setAuthData({...authData,email_address:e.target.value})} required />
            <input type="password" placeholder="Password" value={authData.password} onChange={(e)=>setAuthData({...authData,password:e.target.value})} required/>
            {/* <a href="#">Forgot your password?</a> */}
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Auth;
