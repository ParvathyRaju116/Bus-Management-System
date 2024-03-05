import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import './BusOwnerAuth.css'
import { busOwnerloginApi, busOwnerregisterApi } from '../../../SERVICES/AllAPI';
import axios from 'axios';


function BusOwnerAuth() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const [photo,setPhoto]=useState(null)

  const handleSignUpClick = () => {
    setIsSignUpActive(true);
  };

  const handleSignInClick = () => {
    setIsSignUpActive(false);
  };

  const navigate=useNavigate()

  const [authData , setAuthData]=useState({
     name:"",
     phone:"",
     address:"",
     username:"",
     password:"",
     proof:""
  })

  console.log(authData);

  const HandelImgChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setAuthData((prevDetails) => ({
      ...prevDetails,
      image: file,
    }));
  };

  const handleSubmit =async(e)=>{
    e.preventDefault()
    const token =localStorage.getItem("token")
    console.log(token);

    if(!token){
      navigate('/bus-owner-auth')
    }

    const formData=new FormData()
    formData.append("name",authData.name)
    formData.append("phone",authData.phone)
    formData.append("address",authData.address)
    formData.append("username",authData.username)
    formData.append("password",authData.password)
    formData.append("proof",authData.proof)

    // headers 
    try {
      const response = await axios.post(`http://127.0.0.1:8000/Admin/register/`,formData,{
      headers:{
        "Content-Type":"multipart/form-data",
        Authorization: `Token ${token}`
      }
    });
    console.log(response);
    } catch (error) {
      console.log(error);
    }

  }

  // register
  // const handleRegister = async (e) => {
  //   e.preventDefault();
  //     const response = await busOwnerregisterApi(authData);
  //     console.log(response);
  // if(response.status==200){
  //   setIsSignUpActive(false);
  //   setAuthData({
  //     name: "",
  //     phone: "",
  //     address: "",
  //     username: "",
  //     password: "",
  //     proof:""
  //   });
  // }
  // else{
  //   alert("Register API failed")
  // }
     
  
  // };

//   // login
  const handleLogin=async(e)=>{
    e.preventDefault()
      const response= await busOwnerloginApi(authData)
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
        navigate('/bus-owner-home-page')
        console.log(response.data);
      }
      else{
        alert('incorrect password or username')
      }     
    }

  
  
  return (
   <div className='auth-Container'>
      <div className={`container ${isSignUpActive ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form action="" onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input type="text" placeholder="Name" value={authData.name} onChange={(e)=>setAuthData({...authData,name:e.target.value})} required/>
            <input type="tel" placeholder='Phone Number' value={authData.phone} onChange={(e)=>setAuthData({...authData,phone:e.target.value})} required/>
            <input type="text" placeholder='Address' value={authData.address} onChange={(e)=>setAuthData({...authData,address:e.target.value})} required/>
            <input type="text" placeholder='UserName' value={authData.username} onChange={(e)=>setAuthData({...authData,username:e.target.value})} required/>
            <input type="password" placeholder="Password" value={authData.password} onChange={(e)=>setAuthData({...authData,password:e.target.value})} required/>
            <input type="file" placeholder='' onChange={HandelImgChange} required/>
            <button type='submit'>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form action="" onSubmit={handleLogin}>
            <h1>Sign in</h1>
          
            <input type="text" placeholder="User Name" value={authData.username} onChange={(e)=>setAuthData({...authData,username:e.target.value})} required />
            <input type="password" placeholder="Password" value={authData.password} onChange={(e)=>setAuthData({...authData,password:e.target.value})} required/>
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
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default BusOwnerAuth