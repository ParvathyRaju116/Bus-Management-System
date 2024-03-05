import React, { useEffect, useState } from 'react'
import './Request.css'
import AdminHeader from '../../Components/Admin-Header/AdminHeader'
import { Button, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { acceptRequestApi, allRequestListApi } from '../../../SERVICES/AllAPI'


function Request() {
  const token = localStorage.getItem("token")
  const [allRequest, setAllReqest] = useState([])
  const param=useParams()

  const allRequestList = async () => {
    const header = {
      Authorization: `Token ${token}`
    };
    const response = await allRequestListApi(header)
    setAllReqest(response.data)
    console.log(response);
  }

  useEffect(() => {
    allRequestList()
  }, [])

  const {id}=param 

  const req= allRequest.find(i=>i.id==id)

  // approval
 const acceptRequest=async ()=>{
  const header = {
    Authorization: `Token ${token}`
  };
  const response=await acceptRequestApi(id,header)
  console.log(response);
 }

  return (
    <div>
      <AdminHeader></AdminHeader>

      <div className=' m-5 d-flex align-item-center justify-content-center'>

        <div className='p-5 reqBody w-75'>

          <div className='text-center'><h1 className='mb-3 reqestHead'>Request</h1></div>
        { req &&  <div>
<Row>
  <Col className='proofImg'>
 <div  className=''> <img src="https://i.postimg.cc/GmghkXDV/download-1.png" alt="" /></div>
  </Col>
  <Col className='mt-5'>
    
                <h5>Name Of Owner :</h5> 
                <p>{req.name}</p>
                <h5>Address :</h5>
                <p>{req.address}</p>
                <h5>Phone Number</h5>
                <p>{req.phone}</p>
  </Col>
</Row>
          
  
         </div>}
          <div className='text-end'>
            <Link to={"/admin-dashbord"}><Button className='btn-danger'>Deny</Button></Link>
            <Link to={"/admin-dashbord"}> <Button className='btn-success ms-5' onClick={acceptRequest}>Accept</Button></Link>
          </div>

        </div>

      </div>


    </div>
  )
}

export default Request