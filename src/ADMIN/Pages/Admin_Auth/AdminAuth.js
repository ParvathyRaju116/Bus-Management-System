import React, { useState } from 'react'
import './AdminAuth.css'

function AdminAuth() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

  
  
    const handleSignInClick = () => {
      setIsSignUpActive(false);
    };
  return (
  <>

<div className='auth-Container'>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
       
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
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with sign in details.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </>
  )
}

export default AdminAuth