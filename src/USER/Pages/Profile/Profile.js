import React from 'react'
import './Profile.css'
import Header from '../../Components/Header/Header'

function Profile() {
  return (
   <>
   <Header></Header>
        <div className='profileBody mt-5'>
            <div className='avatar text-center '>
        
                <h1 className='profileHead mt-5'>Profile</h1>
                
    
    <img className='avatarImg' src="https://i.postimg.cc/Yqrt88b9/360-F-633547842-Aug-Yzex-Tp-MJ9z1-Ycp-TKUBoq-BF0-CUCk10.jpg" alt="" />
   <div className=' text-center ps-5 me-5 pe-5 ms-5'>
        <p>Username</p>
        <hr />
        <p>Email</p>
        <hr />
        <p>Gender</p>
        <hr />
        <p>Date Of Birth</p>
        <hr />
   </div>
   <div className='text-end me-5 pe-5'>
                <i class="fa-regular fa-pen-to-square"></i>
                </div>
            </div>
            
        </div>
   </>
  )
}

export default Profile