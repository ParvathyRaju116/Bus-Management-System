import React from 'react'
import './Request.css'
import AdminHeader from '../../Components/Admin-Header/AdminHeader'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Request() {
  return (
    <div>
   <AdminHeader></AdminHeader>

   <div className=' m-5 d-flex align-item-center justify-content-center'>

   <div className='p-5 reqBody w-75'>

<div className='text-center'><h1 className='mb-3 reqestHead'>Request</h1></div>
        <h5>Name Of Owner :</h5> <p>Manu</p>

      
        <h5>Name Of Bus :</h5>
         <p>ABCD</p>
        <h5>Number of Bus :</h5>
        <p>KL 63 F 1169</p>
        <h5>Engine Number :</h5>
        <p>789654123</p>

        <br />
        <h5>Employee Details :</h5>
    
       <div className='text-end'>
            <Link to={"/admin-dashbord"}><Button className='btn-danger'>Deny</Button></Link> 
           <Link to={"/admin-bus-details"}> <Button className='btn-success ms-5'>Accept</Button></Link>
       </div>
    
   </div>

   </div>


    </div>
  )
}

export default Request