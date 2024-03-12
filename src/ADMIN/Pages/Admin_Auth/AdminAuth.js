import React, { useState } from 'react'
import './AdminAuth.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AdminLoginApi } from '../../../SERVICES/AllAPI';
import { Dropdown } from 'react-bootstrap';



function AdminAuth() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const navigate=useNavigate()
 
    const handleSignInClick = () => {
      setIsSignUpActive(false);
    };

    const [authData, setAuthData] = useState({
      username: "",
      password: ""
    })

    // function for admin login
    const handleLogin=async(e)=>{
      e.preventDefault()
        const response= await AdminLoginApi(authData)
        if(response.status==200){
          toast('Login success', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
          navigate('/admin-dashbord')
          localStorage.setItem("token",response.data.token)
          console.log(response);
        }
        else{
          alert('incorrect password or username')
        }     
      }

      
  
  
  
  
  return (
  <>
 
<div className='auth-Container'>
<div className=' mb-3 drop'>
     <Dropdown className=''>
        <Dropdown.Toggle className=' '  id="dropdown-basic">
         Select User
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        <Dropdown.Item as={Link} to={'/auth'}>User</Dropdown.Item>
            <Dropdown.Item as={Link} to={'/bus-owner-auth'}>Bus Owner</Dropdown.Item>
            <Dropdown.Item as={Link} to={'/admin-auth'}>Admin</Dropdown.Item>        </Dropdown.Menu>
      </Dropdown>
 </div>
  
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
      
        <div className="form-container sign-in-container">
          <form action="" onSubmit={handleLogin}>
            <h1>Sign in</h1>
          
            <input type="text" placeholder='Username' value={authData.username} onChange={(e) => setAuthData({ ...authData, username: e.target.value })} required/>
            <input type="password" placeholder="Password" value={authData.password} onChange={(e) => setAuthData({ ...authData, password: e.target.value })} required/>
            <button type='submit'>Sign In</button>
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