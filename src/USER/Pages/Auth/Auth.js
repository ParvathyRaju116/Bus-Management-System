import React, { useState } from 'react';
import './Auth.css';
import axios from 'axios';
import { registerApi } from '../../../SERVICES/AllAPI';
import { useNavigate } from 'react-router-dom';


function Auth() {

  const navigate=useNavigate()
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const [authData, setAuthData] = useState({
    name: "",
    phone: "",
    address: "",
    email_address: "",
    username: "",
    password: ""
  })
  console.log(authData);

  const handleRegister = async (e) => {
    e.preventDefault();
    const response = await registerApi(authData);
    if(response.status==200){
      setAuthData({name:"",phone:"",address:"",email_address:"",username:"",password:""})
      navigate('/')

    }
    console.log(response);
  }

  return (
    <div className='auth-Container'>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="" onSubmit={handleRegister}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={authData.name} onChange={(e) => setAuthData({ ...authData, name: e.target.value })} required/>
            <input type="tel" placeholder='Phone' value={authData.phone} onChange={(e) => setAuthData({ ...authData, phone: e.target.value })} required/>
            <input type="text" placeholder='Address' value={authData.address} onChange={(e) => setAuthData({ ...authData, address: e.target.value })} required/>
            <input type="email" placeholder="Email" value={authData.email_address} onChange={(e) => setAuthData({ ...authData, email_address: e.target.value })} required/>
            <input type="text" placeholder='Username' value={authData.username} onChange={(e) => setAuthData({ ...authData, username: e.target.value })} required/>
            <input type="password" placeholder="Password" value={authData.password} onChange={(e) => setAuthData({ ...authData, password: e.target.value })} required/>
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
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
