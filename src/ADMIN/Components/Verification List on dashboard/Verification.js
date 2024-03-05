import React, { useEffect, useState } from 'react'
import './Verification.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import { allRequestListApi } from '../../../SERVICES/AllAPI';


function Verification() {

  const token = localStorage.getItem("token")
const[allRequest,setAllReqest]=useState([])

  const allRequestList= async () => {
    const header = {
      Authorization: `Token ${token}`
    };
    const response = await allRequestListApi(header)
    setAllReqest(response.data)
    console.log(response);
  }

  useEffect (()=>{
   allRequestList()
  },[])

  return (
    <div className='p-4'>
      <h1>Request Approval</h1> <br /> <br />
      {allRequest?allRequest.map(i=>(
         <Link  to={`/admin-request/${i.id}`}>
         <Stack direction="row" spacing={2} >
          
          <Avatar
            alt={i.name}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          /> <h6>{i.name}</h6>
        </Stack>
        <hr />
        </Link>)):<></>}

    </div>
  )
}

export default Verification